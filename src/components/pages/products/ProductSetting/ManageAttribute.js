import AttributeList from "./AttributeList";
import ConfigureTable from "./ConfigureTable";
import OptionAccordions from "./OptionAccordions";
import Modal from "@/components/ui/Modal";
import {
  getCombinationTableMutation,
  saveAttributeMutation,
} from "@/resolvers/mutation";
import {
  getAllAttributeQuery,
  getProductAttributeExistanceQuery,
} from "@/resolvers/query";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ManageAttribute = (product_data) => {
  const router = useRouter();
  const { slug } = router.query;
  const [checkList, setCheckList] = React.useState([]);
  const [show, setShow] = React.useState(false);

  const hideModal = () => {
    setShow(false);
  };

  const [checkedAttributes, setCheckedAttributes] = useState([]);

  // mutation for product update. specially for

  const { data: productAttributeData, isLoading: productAttributeLoading } =
    useQuery({
      queryKey: ["product_attribute", slug],
      queryFn: () => getProductAttributeExistanceQuery(slug),
    });

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
          checked: true,
          options: attribute.options,
          active: true,
        });
      });
      // setState({
      //   is_attribute: product_data.is_attribute.value === 1,
      // });
      setCheckList(temp);
    }

    if (productAttributeData) {
      const temp = [];
      productAttributeData?.data.forEach((attribute) => {
        // if attribute id is same as the attribute id from the data then push the option id to the temp array else push the attribute id to the temp array with attribute options id as the options

        if (
          temp.filter((item) => item.id === attribute.attribute_id).length > 0
        ) {
          temp.forEach((item) => {
            if (item.id === attribute.attribute_id) {
              item.options.push(attribute.attribute_option_id);
            }
          });
        }
        // if the attribute id is not in the temp array then push the attribute id with the option id as the options
        else {
          temp.push({
            id: attribute.attribute_id,
            options: [attribute.attribute_option_id],
          });
        }
      });

      setCheckedAttributes(temp);
    }
  }, [data, productAttributeData]);

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
        product_id: slug,
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

  const { mutate: saveCombination, isPending: combinationLoading } =
    useMutation({
      mutationKey: "save_combination",
      mutationFn: getCombinationTableMutation,
    });

  const handleMutate = () => {
    const form_data = new FormData();

    checkedAttributes.forEach((attribute) => {
      attribute.options.forEach((option) => {
        form_data.append(`attributes[${attribute.id}][]`, option);
      });
    });
    saveCombination(
      {
        product_id: slug,
        variables: form_data,
      },
      {
        onSuccess: (data) => {
          console.log(data);
        },
        onError: (error) => {
          toast.error(error.response.data.message);
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
          checkedAttributes={checkedAttributes}
          toggleAccordion={toggleAccordion}
        />
      </div>
      <div className="flex items-center justify-end w-full gap-3 mt-10">
        <button
          type="button"
          class="ti-btn ti-btn-primary-full ti-btn-wave"
          disabled={isPending}
          onClick={handleSave}
        >
          {isPending ? "Saving..." : "Save"}
        </button>
        <button
          type="button"
          class="ti-btn ti-btn-primary-full ti-btn-loader "
          disabled={isPending}
          onClick={handleMutate}
        >
          <span class="me-2">Publish</span>
          {combinationLoading ? (
            <span class="loading">
              <i class="ri-loader-2-fill text-[1rem] animate-spin"></i>
            </span>
          ) : null}
        </button>
      </div>
    </>
  );
};

export default ManageAttribute;
