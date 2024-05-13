import AttributeList from "./AttributeList";
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

  const hideModal = () => {
    setShow(false);
  };

  console.log(checkList);

  return (
    <>
      <Modal show={show} hideModal={hideModal} refetch={refetch} />
      <div className="attribute">
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
                checkList.find((item) => item.id === attribute.id)?.checked
              }
              handleCheck={handleCheck}
              key={attribute.id}
            />
          ))
        )}
        <div className="mt-3">
          <button
            type="button"
            class="ti-btn ti-btn-primary-full ti-btn-loader m-2"
            onClick={() => setShow(true)}
          >
            <span class="me-2">Add Attribute</span>
            {/* <span class="loading">
            <i class="ri-loader-2-fill text-[1rem] animate-spin"></i>
          </span> */}
          </button>
        </div>
      </div>
    </>
  );
};

export default Attribute;
