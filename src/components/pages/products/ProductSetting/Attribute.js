import ManageAttribute from "./ManageAttribute";
import Switcher from "@/components/ui/Switcher";
import React, { useEffect, useState } from "react";

const Attribute = () => {
  const [state, setState] = useState({
    is_attribute: true,
  });

  return (
    <div className="grid grid-cols-12">
      <div className="py-2 xxl:col-span-4 xl:col-span-4  col-span-12">
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
      <div className="xxl:col-span-4 xl:col-span-4  col-span-12">
      {state.is_attribute && <ManageAttribute setState={setState} />}
      </div>
    </div>
  );
};

export default Attribute;
