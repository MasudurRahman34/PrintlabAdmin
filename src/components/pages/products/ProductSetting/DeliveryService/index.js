import TableRow from "./TableRow";
import Loading from "@/components/ui/Loading";
import ModalLayout from "@/components/ui/ModalLayout";
import { createDeliveryServiceMutation } from "@/resolvers/mutation";
import {
  getAllDeliveryServiceQuery,
  getProductDeliveryServiceQuery,
} from "@/resolvers/query";
import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const DeliveryService = ({ product_data }) => {
  const [tableState, setTableState] = useState([]);
  const [state, setState] = useState({
    title: "",
    type: 0,
  });

  const [show, setShow] = useState(false);
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["getAllDeliveryService"],
    queryFn: getAllDeliveryServiceQuery,
  });
  const {
    data: productDeliveryServiceData,
    isLoading: productDeliveryServiceLoading,
  } = useQuery({
    queryKey: ["product_delivery_service", product_data?.id],
    queryFn: () => getProductDeliveryServiceQuery(product_data?.id),
    enabled: !!product_data?.id,
  });

  const { mutate, isPending } = useMutation({
    mutationKey: "createDeliveryServiceMutation",
    mutationFn: createDeliveryServiceMutation,
  });

  const handleCreate = () => {
    const variables = {};

    mutate(
      { variables },
      {
        onSuccess: (data) => {
          toast.success("Delivery Service created successfully");
          setShow(false);
          refetch();
        },
        onError: (error) => {
          toast.error(error.response.data.message[0] || "An error occurred");
          console.log(error);
        },
      }
    );
  };

  useEffect(() => {
    if (!productDeliveryServiceData?.data.length > 0 && data?.data.length > 0) {
      setTableState(data.data);
    }

    if (productDeliveryServiceData?.data.length > 0 && data?.data.length > 0) {
      const temp = data.data.map((item) => {
        const found = productDeliveryServiceData.data.find(
          (element) => element.service_id === item.id
        );
        if (found) {
          return {
            ...item,
            cost: found.cost,
            duration: found.duration,
          };
        }
        return item;
      });
      setTableState(temp);
    }
  }, [productDeliveryServiceData, data]);

  return (
    <>
      <ModalLayout
        show={show}
        hideModal={() => {
          setShow(false);
        }}
        handleMutate={handleCreate}
        isPending={isPending}
        buttonText="Create"
        title="Create Delivery Service"
      >
        <div>
          <div className="form-group">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={state.title}
              onChange={(e) =>
                setState((prev) => ({ ...prev, title: e.target.value }))
              }
            />
          </div>
          <div className="form-group">
            <label className="form-label">Type</label>
            <select
              className="form-select"
              name="type"
              value={state.type}
              onChange={(e) =>
                setState((prev) => ({ ...prev, type: e.target.value }))
              }
            >
              <option value="0">Select Type</option>
              <option value="0">Delivery</option>
              <option value="1">Artwork</option>
            </select>
          </div>
        </div>
      </ModalLayout>
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
                    Title
                  </th>
                  <th scope="col" className="text-start">
                    Status
                  </th>
                  <th scope="col" className="text-start">
                    Cost
                  </th>
                  <th scope="col" className="text-start">
                    Duration
                  </th>
                  <th scope="col" className="text-start">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableState.map((row) => (
                  <TableRow
                    row={row}
                    key={row.id}
                    product_id={product_data?.id}
                  />
                ))}
              </tbody>
            </table>
          )}
        </div>
      </section>
    </>
  );
};

export default DeliveryService;
