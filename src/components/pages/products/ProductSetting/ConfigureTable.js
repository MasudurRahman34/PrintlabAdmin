import { useMutation } from "@tanstack/react-query";
import CombinationRow from "./CombinationRow";

import React, { useEffect } from "react";
import { destroyQuantityOptionsMutation } from "@/resolvers/mutation";
import { useAuth } from "@/hooks/useAuth";
import toast from "react-hot-toast";
import useToastMessage from "@/hooks/useToastMessage";

const ConfigureTable = ({ data, product_id, combination_refetch }) => {
  // need a radio button for default price combination here i will manage . radio button should be selected only one at a time
  const { session } = useAuth();
  const showToastMessage = useToastMessage();

  const [combinationIds, setCombinationIds] = React.useState([]);

  const { mutate, isPending } = useMutation({
    mutationKey: "destroyCombination",
    mutationFn: destroyQuantityOptionsMutation,
  });

  const handleAddCombination = (id) => {
    // if id is already in the array then remove it
    if (combinationIds.includes(id)) {
      setCombinationIds((prev) => prev.filter((item) => item !== id));
    } else {
      setCombinationIds((prev) => [...prev, id]);
    }
  };

  const handleSelectAll = () => {
    // if all are selected then unselect all
    if (combinationIds.length === data?.data.length) {
      setCombinationIds([]);
    } else {
      setCombinationIds(data?.data.map((item) => item.id));
    }
  };

  const handleDestroyCombination = () => {
    // handle destroy combination here
    const data = new URLSearchParams();
    combinationIds.forEach((element, idx) => {
      data.append(`combination_ids[${idx}]`, element);
    });

    mutate(
      {
        quantity_option_ids: data,
        product_id,
        token: session.token,
      },
      {
        onSuccess: () => {
          // refetch the combination table
          combination_refetch();
          toast.success("Combination deleted successfully");
        },
        onError: (error) => {
          showToastMessage(error?.response?.data?.message);
        },
      }
    );
  };

  return (
    <div className="py-3">
      <div className="w-full">
        <div>
          <div className="avatar-list-stacked ">
            <div
              className="table-responsive max-h-[800px] overflow-y-auto scrollbar-thin p-2 md:p-4
            "
            >
              <table className="table min-w-full whitespace-nowrap">
                <thead>
                  <tr className="border-b border-defaultborder">
                    <th scope="row" className="!ps-4 !pe-5">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="combination_id"
                        checked={combinationIds.length === data?.data.length}
                        aria-label="..."
                        onChange={handleSelectAll}
                      />
                    </th>
                    <th scope="col" className="text-start">
                      S/R
                    </th>
                    <th scope="col" className="text-start">
                      SKU
                    </th>
                    <th scope="col" className="text-start">
                      Price
                    </th>

                    <th scope="col" className="text-start">
                      Combination
                    </th>

                    <th scope="col" className="text-start">
                      Quantity Status
                    </th>

                    <th scope="col" className="text-start">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.data.map((row, idx) => {
                    return (
                      <CombinationRow
                        key={idx}
                        idx={idx}
                        row={row}
                        combinationIds={combinationIds}
                        handleAddCombination={handleAddCombination}
                        handleSelectAll={handleSelectAll}
                      />
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex items-center justify-end p-4 mt-4">
            <button
              className="px-4 py-2 text-white rounded-md bg-danger disabled:opacity-50"
              onClick={handleDestroyCombination}
              disabled={isPending || combinationIds.length === 0}
            >
              {
                // if isPending is true then show loading
                isPending
                  ? "Deleting Selected Combination..."
                  : "Delete Selected Combination"
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigureTable;
