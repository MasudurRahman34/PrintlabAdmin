import { useAuth } from "@/hooks/useAuth";
import useToastMessage from "@/hooks/useToastMessage";
import { updateOrderItemStatus } from "@/resolvers/mutation";
import { formateDate, formatPrice } from "@/utils/common";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";

const OrderItemCard = ({ item, refetch }) => {
  const { isAuthenticated, session } = useAuth();
  const showToastMessage = useToastMessage();
  const [order_status, setOrderStatus] = useState(item.status || "Pending");

  const { isPending, mutate } = useMutation({
    mutationKey: "update-order-status",
    mutationFn: updateOrderItemStatus,
  });

  const handleUpdate = () => {
    mutate(
      {
        order_item_id: item.id,
        variables: { status: order_status },
        token: session?.token,
      },
      {
        onSuccess: () => {
          toast.success("Order Status Updated Successfully");
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
    setOrderStatus(e.target.value);
  };
  return (
    <div
      className={` mb-4 overflow-hidden border rounded  border-gray-100 w-full bg-white`}
    >
      <div className="flex items-center justify-between gap-5 px-3 py-2 bg-gray-100">
        <div className="flex flex-col justify-between w-full gap-2 md:items-center md:flex-row">
          <p className="text-sm">
            Order placed{" "}
            <span className="font-semibold">
              {formateDate(item.created_at)}
            </span>
          </p>
          <p className="text-sm">
            Item <span className="font-semibold">{item.id}</span>
          </p>
          <p className="text-sm">
            Order Total{" "}
            <span className="font-semibold">{formatPrice(item.total)}</span>
          </p>
        </div>
        {/* <div>
        <button className="underline">Close</button>
      </div> */}
      </div>
      <div className="w-full p-4 ">
        <div className="w-full bg-gray-100">
          <div className="flex flex-col items-stretch justify-between w-full gap-1 md:flex-row">
            <div className="w-full bg-white md:w-2/3">
              <div className="mb-2">
                {item.status === "Pending" || item.status === "On Hold" ? (
                  <h1 className="text-xl font-semibold text-yellow-600">
                    {item.status}
                  </h1>
                ) : item.status === "Processing" ||
                  item.status === "Designing" ||
                  item.status === "Printing" ||
                  item.status === "Dispatched" ? (
                  <h1 className="text-xl font-semibold text-green-500">
                    {item.status}
                  </h1>
                ) : (
                  <h1 className="text-xl font-semibold text-red-500">
                    {item.status}
                  </h1>
                )}
                <p className="text-sm">
                  Item Number{" "}
                  <span className="font-semibold">
                    #{item.order_item_number}
                  </span>
                </p>
              </div>
              <div className="mb-2">
                <h1 className="text-xl font-semibold">{item.product_title}</h1>

                <p className="text-sm">
                  Qty: {item.quantity}, Cobination: {item.combination_string},
                </p>
              </div>
              <div>
                <h1 className="text-lg font-semibold">
                  {item.artwork_service.title}
                </h1>
              </div>
            </div>
            <div className="w-full p-2 bg-white md:w-1/3">
              <div className="mb-3">
                <h1 className="text-lg font-semibold">Delivery To</h1>
                <p className="text-sm">
                  {item.shipping_address.first_name +
                    " " +
                    item.shipping_address.last_name}
                </p>
                <p className="text-sm">
                  {item.shipping_address.address},{" "}
                  {item.shipping_address.country}, {item.shipping_address.phone}
                  , {item.shipping_address.email},{" "}
                  {item.shipping_address.post_code}
                </p>
              </div>
              <div>
                <h1 className="text-lg font-semibold">Delivery By</h1>
                <p className="text-sm">Thursday, 27th June 2024</p>
                <p className="text-sm">By 8pm (FREE)</p>
              </div>
            </div>
            <div className="w-full p-2 bg-white md:w-1/3">
              <div className="mb-3">
                <h1 className="text-lg font-semibold">Delivery To</h1>
                <p className="text-sm">
                  {item.shipping_address.first_name +
                    " " +
                    item.shipping_address.last_name}
                </p>
                <p className="text-sm">
                  {item.shipping_address.address},{" "}
                  {item.shipping_address.country}, {item.shipping_address.phone}
                  , {item.shipping_address.email},{" "}
                  {item.shipping_address.post_code}
                </p>
              </div>
              <div>
                <h1 className="text-lg font-semibold">Delivery By</h1>
                <p className="text-sm">Thursday, 27th June 2024</p>
                <p className="text-sm">By 8pm (FREE)</p>
              </div>
            </div>
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default function OrdersList({ orderItems = [], refetch }) {
  return (
    <div>
      {orderItems.length > 0 ? (
        orderItems.map((item) => (
          <OrderItemCard key={item.id} item={item} refetch={refetch} />
        ))
      ) : (
        <div className="text-center ">No Orders Items Found</div>
      )}
    </div>
  );
}
