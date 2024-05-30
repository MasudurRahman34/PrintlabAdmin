import TableRow from "./TableRow";
import ModalLayout from "@/components/ui/ModalLayout";
import { createDeliveryServiceMutation } from "@/resolvers/mutation";
import { getAllDeliveryServiceQuery } from "@/resolvers/query";
import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const DeliveryService = () => {
  const [state, setState] = useState({
    title: "",
    type: 0,
  });

  const [show, setShow] = useState(false);
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["getAllDeliveryService"],
    queryFn: getAllDeliveryServiceQuery,
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
          console.log(data);
          refetch();
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };

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
            <i className="ri-bank-fill"></i>
          </button>
        </div>
        <div className="mt-4 table-responsive">
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
              {isLoading ? (
                <tr>
                  <td colSpan="5">Loading...</td>
                </tr>
              ) : (
                data?.data.map((row) => <TableRow row={row} key={row.id} />)
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default DeliveryService;
