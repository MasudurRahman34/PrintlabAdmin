import { useMutation } from "@tanstack/react-query";
import CombinationRow from "./CombinationRow";

import React, { useEffect } from "react";
import { destroyQuantityOptionsMutation } from "@/resolvers/mutation";
import { useAuth } from "@/hooks/useAuth";
import toast from "react-hot-toast";
import useToastMessage from "@/hooks/useToastMessage";
import ExportToCsv from "./Combination/ExportToCsv";

const ConfigureTable = ({ data, product_id, combination_refetch }) => {
  // need a radio button for default price combination here i will manage . radio button should be selected only one at a time
  const { session } = useAuth();
  const showToastMessage = useToastMessage();

  const [combinationIds, setCombinationIds] = React.useState([]);
  const [combinations, setCombinations] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [searchBy, setSearchBy] = React.useState("sku");

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

  const handleSearch = (e) => {
    // handle search here
    setSearch(e.target.value);
    if (e.target.value === "") {
      setCombinations(data?.data);
    } else {
      if (searchBy === "sku") {
        setCombinations(
          data?.data.filter((item) =>
            item.sku.toLowerCase().includes(e.target.value.toLowerCase())
          )
        );
      } else if (searchBy === "combination_string") {
        setCombinations(
          data?.data.filter((item) =>
            item.combination_string
              .toLowerCase()
              .includes(e.target.value.toLowerCase())
          )
        );
      }
    }
  };

  useEffect(() => {
    if (data) {
      setCombinations(data?.data);
    }
  }, [data]);

  return (
    <div className="py-3">
      <div className="w-full">
        <div>
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div>
                  <input
                    type="search"
                    placeholder="Search"
                    className="w-full max-w-md p-2 text-sm border border-gray-300 rounded-md"
                    onChange={handleSearch}
                    value={search}
                  />
                </div>
                <div>
                  <select
                    name="search_by"
                    id="search_by"
                    onChange={(e) => {
                      setSearchBy(e.target.value);
                      setCombinations(data?.data);
                      setSearch("");
                    }}
                    value={searchBy}
                    className="w-full max-w-sm p-2 text-sm border rounded-md"
                  >
                    <option value="sku">SKU</option>

                    <option value="combination_string">
                      Combination String
                    </option>
                  </select>
                </div>
              </div>
              <ExportToCsv combination_data={data} />
            </div>
          </div>
          <div className="avatar-list-stacked ">
            <div
              className="table-responsive max-h-[800px] overflow-y-auto scrollbar-thin p-2 md:p-4
            "
            >
              {combinations.length ? (
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
                    {combinations.length ? (
                      combinations.map((row, idx) => {
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
                      })
                    ) : (
                      <tr>
                        <td colSpan="7" className="text-center">
                          No data found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              ) : (
                <div className="text-center">No combination found</div>
              )}
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
