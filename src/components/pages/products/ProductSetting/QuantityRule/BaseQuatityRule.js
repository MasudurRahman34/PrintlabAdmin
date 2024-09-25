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
  const [status, setStatus] = React.useState(false);
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
        quantity_id: product_data?.productQuantityRule?.id,
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
    if (product_data?.productQuantityRule) {
      setStatus(product_data.productQuantityRule.status);
      setQuantityOptionStatus(
        product_data.productQuantityRule.quantity_option_status
      );
    } else {
      setStatus(false);
      setQuantityOptionStatus(false);
    }
  }, [product_data]);

  return (
    <div>
      {product_data?.productQuantityRule ? (
        <div className="flex flex-col items-start gap-5 md:items-center md:flex-row">
          <Switcher
            lable="Quantity Status"
            isChecked={status}
            setIsChecked={() => {
              handleStatusChange({ status: !status });
            }}
          />

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
      ) : (
        <div>
          <h2 className="text-lg font-semibold">
            {" "}
            <span className="font-bold text-red-600">*</span> Create Quantity
            Rule
          </h2>
        </div>
      )}
      <table className="table min-w-full mt-3 whitespace-nowrap table-bordered">
        <thead>
          <tr className="border-b border-defaultborder">
            <th scope="col" className="text-start">
              Min Quantity
            </th>
            <th scope="col" className="text-start">
              Max Quantity
            </th>
            <th scope="col" className="text-start">
              Quantity Increment
            </th>
            <th scope="col" className="text-start">
              Per Increment Price
            </th>
            <th scope="col" className="text-start">
              Price Reduction Rate (%)
            </th>
            <th scope="col" className="text-start">
              Calculate As
            </th>

            <th scope="col" className="text-start">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {product_data?.productQuantityRule ? (
            <UpdateTableRow
              row={product_data.productQuantityRule}
              refetch={refetch}
            />
          ) : (
            <CreateTableRow product_id={product_data?.id} refetch={refetch} />
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BaseQuatityRule;
