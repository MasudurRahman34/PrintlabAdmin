import Switcher from "@/components/ui/Switcher";
import { useAuth } from "@/hooks/useAuth";
import useToastMessage from "@/hooks/useToastMessage";
import { updateQuantityOptionsMutation } from "@/resolvers/mutation";
import { getQuantityOptionsQuery } from "@/resolvers/query";
import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const QuantityOptions = ({ product_data, refetch }) => {
  const { session } = useAuth();
  const showToastMessage = useToastMessage();

  const [state, setState] = React.useState({
    age: {
      status: false,
      values: ["1-2", "3-5", "5-8", "9-12", "13-16", "16-20", "20-25", "25+"],
    },
    male: {
      status: false,
      values: ["S", "M", "L", "XL", "XXL"],
    },
    female: {
      status: false,
      values: ["S", "M", "L", "XL", "XXL"],
    },
  });

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["quantity_options", product_data?.id],
    queryFn: () => getQuantityOptionsQuery({ product_id: product_data?.id }),
    enabled: !!product_data?.id,
  });

  

  const { mutate, isPending } = useMutation({
    mutationKey: "update_quantity_options",
    mutationFn: updateQuantityOptionsMutation,
  });

  const handleSave = () => {
    const variables = {
      product_id: product_data?.id,
    };

    Object.keys(state).map((key) => {
      variables[key] = state[key].status ? 1 : 0;
    });

    mutate(
      {
        variables,
        token: session?.token,
      },
      {
        onSuccess: (data) => {
          refetch();
          toast.success("Quantity options updated successfully");
        },
        onError: (error) => {
          showToastMessage(error?.response?.data?.message);
        },
      }
    );
  };

  React.useEffect(() => {
    if (data?.data) {
      const newState = { ...state };

      Object.keys(data?.data?.quantity_options).map((key) => {
        newState[key] = {
          ...newState[key],
          status: true,
        };
      });

      setState(newState);
    }
  }, [data]);

  return (
    <div className="py-4">
      <div>
        <div>
          <div>
            <h4>Product Quantity Options</h4>
          </div>
          {Object.keys(state).map((key) => {
            return (
              <div key={key} className="mt-5">
                <Switcher
                  lable={key}
                  isChecked={state[key].status}
                  setIsChecked={() => {
                    setState((prev) => ({
                      ...prev,
                      [key]: {
                        ...prev[key],
                        status: !prev[key].status,
                      },
                    }));
                  }}
                />
                <div className="mt-4">
                  {state[key].status && (
                    <table className="w-full border ">
                      <thead>
                        {state[key].values.map((value) => (
                          <th key={value} className="px-3 py-2 border">
                            {value}
                          </th>
                        ))}
                      </thead>
                    </table>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-end">
          <button
            onClick={handleSave}
            className="px-4 py-2 mt-3 text-white rounded bg-primary"
            disabled={isPending}
          >
            {isPending ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuantityOptions;
