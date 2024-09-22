import Loading from "@/components/ui/Loading";
import React from "react";
import UpdateTableRow from "./UpdateTableRow";
import CreateTableRow from "./CreateTableRow";

const QuantityRule = ({ product_data, isLoading }) => {
  console.log(product_data);

  return (
    <section className="w-full py-3">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Delivery Service</h3>
        <button
          type="button"
          aria-label="button"
          className="ti-btn ti-btn-icon ti-btn-primary-full ti-btn-wave"
          onClick={() => setShow(true)}
        >
          <i className="bi bi-plus-lg "></i>
        </button>
      </div>
      <div className="mt-4 table-responsive">
        {isLoading ? (
          <Loading />
        ) : (
          <table className="table min-w-full whitespace-nowrap table-bordered">
            <thead>
              <tr className="border-b border-defaultborder">
                <th scope="col" className="text-start">
                  Increment By (Quantity)
                </th>
                <th scope="col" className="text-start">
                  Quatity Unit Price
                </th>
                <th scope="col" className="text-start">
                  Calculate As
                </th>

                <th scope="col" className="text-start">
                  Status
                </th>
                <th scope="col" className="text-start">
                  Min Quantity
                </th>
                <th scope="col" className="text-start">
                  Max Quantity
                </th>
                <th scope="col" className="text-start">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {product_data?.productQuantityRule ? (
                <UpdateTableRow row={product_data.productQuantityRule} />
              ) : (
                <CreateTableRow product_id={product_data?.id} />
              )}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
};

export default QuantityRule;