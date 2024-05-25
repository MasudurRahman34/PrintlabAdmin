import ManageAttribute from "./ManageAttribute";
import Switcher from "@/components/ui/Switcher";
import { updateProductMutation } from "@/resolvers/mutation";
import {
  getAllAttributeQuery,
  getProductAttributeExistanceQuery,
} from "@/resolvers/query";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Attribute = () => {
  const router = useRouter();

  const { slug } = router.query;
  const [state, setState] = useState({
    is_attribute: true,
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
      {state.is_attribute && <ManageAttribute setState={setState} />}
    </div>
  );
};

export default Attribute;
