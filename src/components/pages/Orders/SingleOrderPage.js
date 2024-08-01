import OrdersList from "@/components/ui/OrdersList";
import Ordertraking from "@/components/ui/Ordertraking";
import UserDetails from "@/components/ui/UserDetails";
import { useAuth } from "@/hooks/useAuth";
import { getOrderById } from "@/resolvers/query";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";

const OrdersDetails = () => {
  const { session } = useAuth();
  const router = useRouter();
  const { order_id } = router.query;

  const { data, isError } = useQuery({
    queryKey: ["get-all-orders", order_id, session?.token],
    queryFn: () => getOrderById({ id: order_id, token: session?.token }),
    enabled: !!session?.token && !!order_id,
  });

  console.log(data, isError);

  return (
    <div className="main-content">
      <div className="justify-between block page-header md:flex">
        <div>
          <h3 className="!text-defaulttextcolor dark:!text-defaulttextcolor/70 dark:text-white dark:hover:text-white text-[1.125rem] font-semibold">
            {" "}
            Orders Details
          </h3>
        </div>
        <ol className="flex items-center min-w-0 whitespace-nowrap">
          <li className="text-[0.813rem] ps-[0.5rem]">
            <a
              className="flex items-center truncate text-primary hover:text-primary dark:text-primary"
              href="javascript:void(0);"
            >
              Ecommerce
              <i className="ti ti-chevrons-right flex-shrink-0 text-[#8c9097] dark:text-white/50 px-[0.5rem] overflow-visible rtl:rotate-180"></i>
            </a>
          </li>
          <li
            className="text-[0.813rem] text-defaulttextcolor font-semibold hover:text-primary dark:text-[#8c9097] dark:text-white/50 "
            aria-current="page"
          >
            Orders Details
          </li>
        </ol>
      </div>

      <div className="grid grid-cols-12 gap-x-6">
        <div className="col-span-12 xl:col-span-9">
          <OrdersList />
        </div>
        <div className="col-span-12 xl:col-span-3">
          <Ordertraking />
        </div>
        <div className="col-span-12 ">
          <UserDetails />
        </div>
      </div>
    </div>
  );
};

export default OrdersDetails;
