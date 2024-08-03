import ModalLayout from "@/components/ui/ModalLayout";
import { useAuth } from "@/hooks/useAuth";
import useToastMessage from "@/hooks/useToastMessage";
import { updateOrderItemStatus } from "@/resolvers/mutation";
import { formateDate } from "@/utils/common";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";

const OrderStatusUpdate = ({ item, refetch }) => {
  const { isAuthenticated, session } = useAuth();
  const [tracking_number, setTrackingNumber] = useState({
    show: false,
    tracking_number: "",
  });
  const showToastMessage = useToastMessage();
  const [order_status, setOrderStatus] = useState(item.status || "Pending");
  const { isPending, mutate } = useMutation({
    mutationKey: "update-order-status",
    mutationFn: updateOrderItemStatus,
  });

  const handleUpdate = () => {
    const variables = { status: order_status };
    if (tracking_number.tracking_number && order_status === "Dispatched")
      variables.tracking_number = tracking_number.tracking_number;

    if (tracking_number)
      mutate(
        {
          order_item_id: item.id,
          variables,
          token: session?.token,
        },
        {
          onSuccess: () => {
            toast.success("Order Status Updated Successfully");
            setTrackingNumber({ ...tracking_number, show: false });
            refetch();
          },
          onError: (error) => {
            showToastMessage(
              error?.response?.data?.message || "An error occurred"
            );
          },
        }
      );
  };
  const handleChange = (e) => {
    if (e.target.value === "Dispatched") {
      setTrackingNumber({ show: true, tracking_number: "" });
      setOrderStatus(e.target.value);
    } else {
      setOrderStatus(e.target.value);
    }
  };

  const hideModal = () => {
    setTrackingNumber({ show: false, tracking_number: "" });
    setOrderStatus(item.status);
  };

  const handleTrackingNumber = (e) => {
    setTrackingNumber({ ...tracking_number, tracking_number: e.target.value });
  };

  return (
    <>
      <ModalLayout
        title="Add Tracking Number"
        show={tracking_number.show}
        hideModal={hideModal}
        handleMutate={handleUpdate}
        isPending={isPending}
        buttonText="Update"
      >
        <input
          type="text"
          className="w-full px-3 py-1.5 rounded-sm"
          placeholder="Tracking Number"
          value={tracking_number.tracking_number}
          onChange={handleTrackingNumber}
        />
      </ModalLayout>
      <div className="p-4">
        <div className="flex flex-col items-end justify-start w-full gap-2 sm:flex-row">
          <div className="w-full max-w-md">
            <label htmlFor="status" className="block mb-1 font-medium">
              Update Status
            </label>
            <select
              name="status"
              id="status"
              className="w-full max-w-lg rounded"
              onChange={handleChange}
              value={order_status}
            >
              <option value="Pending">Pending</option>
              <option value="Processing">Processing</option>
              <option value="Designing">Designing</option>
              <option value="Printing">Printing</option>
              <option value="Dispatched">Dispatched</option>
              <option value="Cancelled">Cancelled</option>
              <option value="On Hold">On Hold</option>
              <option value="Cancelled">Cancelled</option>
              <option value="Failed">Failed</option>
              <option value="Refunded">Refunded</option>
              <option value="Partially Refunded">Partially Refunded</option>
            </select>
          </div>
          <div className="flex-1">
            <button
              type="button"
              style={{ marginBottom: "0" }}
              className=" ti-btn ti-btn-primary-full ti-btn-loader disabled:bg-zinc-900"
              onClick={handleUpdate}
              disabled={isPending || item.status === order_status}
            >
              <span className="me-2">Update</span>
              {isPending && (
                <span className="loading">
                  <i className="ri-loader-2-fill text-[1rem] animate-spin"></i>
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderStatusUpdate;
