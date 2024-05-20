import AttributeList from "./AttributeList";
import OptionAccordions from "./OptionAccordions";
import Modal from "@/components/ui/Modal";
import { getAllAttributeQuery } from "@/resolvers/query";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";

const Attribute = () => {
  const [checkList, setCheckList] = React.useState([]);
  const [show, setShow] = React.useState(false);

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: "attributes",
    queryFn: getAllAttributeQuery,
  });

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
      setCheckList(temp);
    }
  }, [data]);

  const handleCheck = (id) => {
    const temp = checkList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          checked: !item.checked,
        };
      }
      return item;
    });
    setCheckList(temp);
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

  const hideModal = () => {
    setShow(false);
  };

  // make a react useMemo for returning a array of checked items

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
                      checkList.find((item) => item.id === attribute.id)
                        ?.checked
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
          refetch={refetch}
          options={[...checkList]}
          toggleAccordion={toggleAccordion}
        />
      </div>
    </>
  );
};

export default Attribute;
