import Modal from "@/components/ui/Modal";
import ModalLayout from "@/components/ui/ModalLayout";
import { useAuth } from "@/hooks/useAuth";
import useToastMessage from "@/hooks/useToastMessage";
import { updateRefundMutation } from "@/resolvers/mutation";
import { useMutation } from "@tanstack/react-query";
import React, { useEffect } from "react";

import toast from "react-hot-toast";

const UpdateRefundForm = ({ item, show, setShow, refetch }) => {
  const { session } = useAuth();
  const showToastMessage = useToastMessage();
  const [formState, setFormState] = React.useState({
    amount: item.refund_amount,
    status: item.status,
    desc: item.status_description,
  });

  const { isPending, mutate } = useMutation({
    mutationKey: "update-refund",
    mutationFn: updateRefundMutation,
  });

  const hideModal = () => {
    setShow(false);
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const { amount, status, desc } = formState;

    if (!amount || !status || !desc) {
      showToastMessage("All fields are required");
      return;
    }

    mutate(
      {
        refund_id: item.id,
        variables: {
          amount,
          status,
          status_description: desc,
        },
        token: session?.token,
      },
      {
        onSuccess: (data) => {
          toast.success("Refund updated successfully");
          setFormState({
            amount: "",
            status: "",
            desc: "",
          });
          hideModal();
          refetch();
        },
        onError: (error) => {
          showToastMessage(error.response.data.message);
        },
      }
    );
  };

  useEffect(() => {
    setFormState({
      amount: item.refund_amount,
      status: item.status,
      desc: item.status_description,
    });
  }, [item]);

  return (
    <ModalLayout
      show={show}
      hideModal={hideModal}
      isPending={isPending}
      handleMutate={handleSubmit}
      title="Update Refund Form"
    >
      <div className="flex flex-col w-full gap-3">
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="amount">Amount</label>
          <input
            min={1}
            type="number"
            id="amount"
            name="amount"
            className="w-full input-box"
            placeholder="Amount"
            value={formState.amount}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="status">Status</label>
          <select
            id="status"
            name="status"
            className="w-full input-box"
            placeholder="Status"
            value={formState.status}
            onChange={handleChange}
          >
            <option value="0">Pending</option>
            <option value="1">Approved</option>
            <option value="2">Rejected</option>
          </select>
        </div>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="desc">Description</label>
          <textarea
            id="desc"
            name="desc"
            className="w-full input-box"
            placeholder="Enter Description"
            value={formState.desc}
            onChange={handleChange}
          />
        </div>
      </div>
    </ModalLayout>
  );
};

export default UpdateRefundForm;
