import Loading from "@/components/ui/Loading";
import React from "react";

import BaseQuatityRule from "./BaseQuatityRule";
import QuantityOptions from "./QuantityOptions";

const QuantityRule = ({ product_data, isLoading, product_refetch }) => {
  return (
    <section className="w-full py-3">
      <div className="mt-4 table-responsive">
        {isLoading ? (
          <Loading />
        ) : (
          <div>
            <BaseQuatityRule
              product_data={product_data}
              isLoading={isLoading}
              refetch={product_refetch}
            />
            {product_data?.quantity_option_status && (
              <QuantityOptions
                product_data={product_data}
                refetch={product_refetch}
              />
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default QuantityRule;
