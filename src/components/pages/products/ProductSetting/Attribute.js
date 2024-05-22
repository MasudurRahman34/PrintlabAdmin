import ManageAttribute from "./ManageAttribute";
import Switcher from "@/components/ui/Switcher";
import { updateProductMutation } from "@/resolvers/mutation";
import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Attribute = ({
  product_id,
  product_data,
  product_isLoading,
  product_error,
  product_isError,
  product_refetch,
}) => {
  const [state, setState] = useState({
    is_attribute: true,
  });

  // make a react useMemo for returning a array of checked items

  const { mutate, isPending } = useMutation({
    mutationKey: "update_product",
    mutationFn: updateProductMutation,
  });

  return (
    <div>
      <div className="py-2">
        <Switcher
          isChecked={state.is_attribute}
          setIsChecked={() => {
            mutate(
              {
                variables: {
                  is_attribute: state.is_attribute ? 0 : 1,
                },
                product_id,
              },
              {
                onSuccess: () => {
                  setState((prev) => ({
                    ...prev,
                    is_attribute: !prev.is_attribute,
                  }));
                  refetch();
                },
              }
            );
          }}
          lable="Is Attribute"
        />
      </div>
      {state.is_attribute && (
        <ManageAttribute
          product_id={slug}
          product_data={data}
          product_isLoading={isLoading}
          product_error={error}
          product_isError={isError}
          product_refetch={refetch}
        />
      )}
    </div>
  );
};

export default Attribute;
