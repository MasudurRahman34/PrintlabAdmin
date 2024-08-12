import OrderItemFile from "../pages/Orders/OrderItemFile";
import OrderStatusUpdate from "../pages/Orders/OrderStatusUpdate";
import { formateDate, formatPrice } from "@/utils/common";
import React, { useState } from "react";

export const OrderItemCard = ({ item, refetch }) => {
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
          <div className="grid w-full grid-cols-12 gap-1 ">
            <div className="w-full col-span-12 p-4 bg-white md:col-span-5">
              <div>
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
            <div className="w-full col-span-12 p-4 bg-white md:col-span-5">
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
              <div className="">
                <h1 className="text-lg font-semibold">Delivery By</h1>
                <p className="text-sm">{formateDate(item.delivery_date)}</p>
              </div>
              {item.tracking_number && (
                <div className="">
                  <h1 className="text-lg font-semibold">Tracking Number</h1>
                  <p className="text-sm">{item.tracking_number}</p>
                </div>
              )}
            </div>
            <OrderItemFile item={item} />
          </div>
          <OrderStatusUpdate item={item} refetch={refetch} />
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
