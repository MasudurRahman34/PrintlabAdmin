import AttributeList from "./AttributeList";
import OptionAccordions from "./OptionAccordions";
import Modal from "@/components/ui/Modal";
import { saveAttributeMutation } from "@/resolvers/mutation";
import { getAllAttributeQuery } from "@/resolvers/query";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ManageAttribute = (
  product_id,
  product_data,
  product_isLoading,
  product_error,
  product_isError,
  product_refetch,
  setState
) => {
  const router = useRouter();
  const { slug } = router.query;

  const [checkList, setCheckList] = React.useState([]);
  const [show, setShow] = React.useState(false);

  const hideModal = () => {
    setShow(false);
  };

  const [checkedAttributes, setCheckedAttributes] = useState([]);

  // mutation for product update. specially for

  // getting all attribute from here
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: "attributes",
    queryFn: getAllAttributeQuery,
  });

  // mutate for saving attribute option

  const { mutate, isPending } = useMutation({
    mutationKey: "save attribute",
    mutationFn: saveAttributeMutation,
  });

  // useEffect for setting the data to the checkList
  useEffect(() => {
    if (data) {
      const temp = [];
      data.data.forEach((attribute) => {
        temp.push({
          id: attribute.id,
          title: attribute.title,
          checked: false,
          options: attribute.options,
          active: true,
        });
      });
      // setState({
      //   is_attribute: product_data.is_attribute.value === 1,
      // });
      setCheckList(temp);
    }
    if (product_data) {
    }
  }, [data, product_data]);

  const handleCheck = (id) => {
    if (checkedAttributes.filter((item) => item.id === id).length > 0) {
      setCheckedAttributes(checkedAttributes.filter((item) => item.id !== id));
    } else {
      setCheckedAttributes([
        ...checkedAttributes,
        {
          id: id,
          options: [],
        },
      ]);
    }

    const temporarry = checkList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          checked: !item.checked,
        };
      }
      return item;
    });

    setCheckList(temporarry);
  };

  const handleOptionCheck = ({ checked_value, attribute_id }) => {
    const temp = checkedAttributes.find((item) => item.id === attribute_id);

    if (temp.options.includes(checked_value)) {
      temp.options = temp.options.filter((item) => item !== checked_value);
    } else {
      temp.options.push(checked_value);
    }

    const newCheckedAttributes = checkedAttributes.map((item) => {
      if (item.id === attribute_id) {
        return temp;
      }
      return item;
    });

    setCheckedAttributes(newCheckedAttributes);
  };

  const toggleAccordion = (id) => {
    const temp = checkList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          active: !item.active,
        };
      }
      return item;
    });
    setCheckList(temp);
  };

  const handleSave = () => {
    const form_data = new FormData();

    checkedAttributes.forEach((attribute) => {
      attribute.options.forEach((option) => {
        form_data.append(`attributes[${attribute.id}][]`, option);
      });
    });

    mutate(
      {
        variables: form_data,
        product_id: product_id,
      },
      {
        onSuccess: () => {
          refetch();
          toast.success("Attribute created successfully");
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };
  return (
    <>
      <Modal show={show} hideModal={hideModal} refetch={refetch} />
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 box">
          <div className="justify-between box-header">
            <div className="box-title">Profit Earned</div>
            <div className="hs-dropdown ti-dropdown">
              <button
                type="button"
                aria-label="button"
                className="ti-btn ti-btn-icon ti-btn-primary-full ti-btn-wave"
                onClick={() => setShow(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="p-3 box-body">
            <div id="crm-profits-earned ">
              {isLoading ? (
                <div>Loading...</div>
              ) : isError ? (
                <div>Error</div>
              ) : (
                data?.data.map((attribute) => (
                  <AttributeList
                    title={attribute.title}
                    value={attribute.id}
                    checked={
                      checkedAttributes.filter(
                        (item) => item.id === attribute.id
                      ).length > 0
                    }
                    handleCheck={handleCheck}
                    key={attribute.id}
                  />
                ))
              )}
            </div>
          </div>
        </div>
        <OptionAccordions
          handleOptionCheck={handleOptionCheck}
          refetch={refetch}
          options={[...checkList]}
          toggleAccordion={toggleAccordion}
        />
      </div>
      <div className="flex items-center justify-end w-full mt-10">
        <button
          type="button"
          class="ti-btn ti-btn-primary-full ti-btn-wave"
          disabled={isPending}
          onClick={handleSave}
        >
          {isPending ? "Saving..." : "Save"}
        </button>
      </div>
      <div className="py-3"></div>
    </>
  );
};

export default ManageAttribute;
