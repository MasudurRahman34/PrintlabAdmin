import Switcher from "@/components/ui/Switcher";
import { updateProductMutation } from "@/resolvers/mutation";
import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

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
    <div
      id="hs-basic-with-title-and-arrow-stretched-collapse-one"
      class={`hs-accordion-content  transition duration-300  ${
        publish ? "opacity-100 visible" : "opacity-0 invisible hidden"
      } `}
      aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
    >
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
                      title: data.title,
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
                    title: data.title,
                  },
                  product_id: data.id,
                });
              }}
              lable="Status"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Status;
