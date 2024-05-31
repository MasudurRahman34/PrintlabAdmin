import ManageAttribute from "./ManageAttribute";
import Switcher from "@/components/ui/Switcher";
import React, { useState } from "react";

const Attribute = ({ product_data, product_refetch, combination_refetch }) => {
  const [state, setState] = useState({
    is_attribute: true,
  });

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 mt-3 ">
        <Switcher
          isChecked={state.is_attribute}
          setIsChecked={() => {
            mutate(
              {
                variables: {
                  is_attribute: state.is_attribute ? 0 : 1,
                },
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
      <div className="col-span-12 ">
        {state.is_attribute && (
          <ManageAttribute
            setState={setState}
            product_data={product_data}
            product_refetch={product_refetch}
            combination_refetch={combination_refetch}
          />
        )}
      </div>
    </div>
  );
};

export default Attribute;
