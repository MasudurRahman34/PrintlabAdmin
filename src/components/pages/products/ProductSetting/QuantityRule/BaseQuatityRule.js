import Switcher from "@/components/ui/Switcher";
import React from "react";
import UpdateTableRow from "./UpdateTableRow";
import CreateTableRow from "./CreateTableRow";
import { useMutation } from "@tanstack/react-query";
import { updateQuantityRuleMutation } from "@/resolvers/mutation";
import useToastMessage from "@/hooks/useToastMessage";
import { useAuth } from "@/hooks/useAuth";

const BaseQuatityRule = ({ product_data, refetch }) => {
  const { session } = useAuth();
  const showToastMessage = useToastMessage();

  const [quantityOptionStatus, setQuantityOptionStatus] = React.useState(false);

  const { mutate, isPending } = useMutation({
    mutationKey: "update_quantity",
    mutationFn: updateQuantityRuleMutation,
  });

  const handleStatusChange = ({ status, statusType = "status" }) => {
    const variables = {};
    variables[statusType] = status ? 1 : 0;

    mutate(
      {
        variables,
        token: session?.token,
        product_id: product_data?.id,
      },
      {
        onSuccess: (data) => {
          refetch();
        },
        onError: (error) => {
          showToastMessage(error?.response?.data?.message);
        },
      }
    );
  };

  React.useEffect(() => {
    if (product_data) {
      setQuantityOptionStatus(!!product_data.quantity_option_status);
    } else {
      setQuantityOptionStatus(false);
    }
  }, [product_data]);

  return (
    <div>
      <div className="flex flex-col items-start gap-5 md:items-center md:flex-row">
        <Switcher
          lable="Quantity Option Status"
          isChecked={quantityOptionStatus}
          setIsChecked={() => {
            handleStatusChange({
              status: !quantityOptionStatus,
              statusType: "quantity_option_status",
            });
          }}
        />
      </div>
    </div>
  );
};

export default BaseQuatityRule;
