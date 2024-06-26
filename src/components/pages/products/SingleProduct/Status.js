import Switcher from "@/components/ui/Switcher";
import { updateProductMutation } from "@/resolvers/mutation";
import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Status = ({ publish, data, isLoading, isError, refetch }) => {
  const [state, setState] = useState({
    visibility: false,
    status: false,
  });
  const { mutate, isPending } = useMutation({
    mutationKey: "updateProductMutation",
    mutationFn: updateProductMutation,
  });

  useEffect(() => {
    if (data) {
      setState({
        visibility: data?.visibility?.value === 1,
        status: data?.status?.value === 1,
      });
    }
  }, [data]);

  return (
    <div>
      <ul className="px-4 mt-4 mb-5">
        <li className="flex py-2 text-sm font-normal text-black">
          <Switcher
            isChecked={state.visibility}
            setIsChecked={() => {
              mutate(
                {
                  variables: {
                    visibility: state.visibility ? 0 : 1,
                  },
                  product_id: data.id,
                },
                {
                  onSuccess: () => {
                    setState((prev) => ({
                      ...prev,
                      visibility: !prev.visibility,
                    }));
                    refetch();
                  },
                }
              );
            }}
            lable="Visibility"
          />
        </li>
        <li className="flex py-2 text-sm font-normal text-black">
          <Switcher
            isChecked={state.status}
            setIsChecked={() => {
              setState((prev) => ({ ...prev, status: !prev.status }));
              mutate({
                variables: {
                  status: state.status ? 0 : 1,
                },
                product_id: data.id,
              });
              toast.success("Product status updated successfully");
              refetch();
            }}
            lable="Status"
          />
        </li>
      </ul>
    </div>
  );
};

export default Status;
