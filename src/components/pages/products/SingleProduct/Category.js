import Loading from "@/components/ui/Loading";
import { saveProductCategoryMutation } from "@/resolvers/mutation";
import { getAllCategories } from "@/resolvers/query";
import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

const CategoryComponent = ({
  product_data,
  product_loading,
  product_error,
  product_refetch,
}) => {
  // here i will save category id as Array
  const [checkedItems, setCheckedItems] = React.useState([]);

  const { data, isLoading, isFetching, isError, error, refetch } = useQuery({
    queryKey: ["getCategoriesQuery"],
    queryFn: getAllCategories,
  });

  const { mutate, isPending } = useMutation({
    mutationKey: "save_product_category",
    mutationFn: saveProductCategoryMutation,
  });

  const handleChange = ({ category_id }) => {
    // if the category id already exist then remove it from the array otherwise add it

    // copy the checked items array

    const newCheckedItems = [...checkedItems];

    // check if the category id already exist in the array
    const index = newCheckedItems.indexOf(category_id);

    // if the category id already exist then remove it from the array
    if (index > -1) {
      newCheckedItems.splice(index, 1);
    } else {
      // otherwise add it to the array
      newCheckedItems.push(category_id);
    }

    // set the new checked items array
    setCheckedItems(newCheckedItems);
  };

  const handleSave = () => {
    // here you can use the checkedItems array
    // make a form data and send the checkedItems array to the server

    const formData = new FormData();
    checkedItems.forEach((category_id, idx) => {
      formData.append(`category_id[${idx}]`, category_id);
    });

    mutate(
      {
        variables: formData,
        product_id: product_data.id,
      },
      {
        onSuccess: () => {
          toast.success("Category saved successfully");
          product_refetch();
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };

  useEffect(() => {
    if (product_data) {
      // make a forEach loop on the product_data.categories array and add the category id to the checkedItems array

      const temp = [];
      product_data.categories.forEach((category) => {
        temp.push(category.id);
      });
      setCheckedItems(temp);
    }
  }, [product_data]);

  return (
    <div
      id="hs-basic-with-title-and-arrow-stretched-collapse-one"
      className={`hs-accordion-content transition duration-300 `}
      aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
    >
      {isLoading || isFetching ? (
        <Loading />
      ) : (
        <div className="text-gray-800 !py-3 !px-4 dark:text-gray-200">
          <div className="mt-2 category-section">
            <fieldset className="fieldset-scroll max-h-[300px] overflow-y-auto px-2 border">
              <legend>Choose your Category:</legend>
              {data?.data.map((item) => (
                <div key={item.slug}>
                  <div className="flex items-center mt-1">
                    <input
                      type="checkbox"
                      id={item.slug}
                      name="scales"
                      checked={checkedItems.includes(item.id)}
                      onChange={() =>
                        handleChange({
                          category_id: item.id,
                        })
                      }
                      className=" mb-1 mr-1 mt-[2px]"
                    />
                    <label htmlFor={item.slug}>{item.title}</label>
                  </div>
                  {item.children.map((childItem) => (
                    <div
                      key={childItem.slug}
                      className="flex items-center mt-1 ml-3"
                    >
                      <input
                        type="checkbox"
                        id={childItem.slug}
                        name="scales"
                        checked={checkedItems.includes(childItem.id)}
                        onChange={() =>
                          handleChange({
                            category_id: childItem.id,
                          })
                        }
                        className=" mb-1 mr-1 mt-[2px]"
                      />
                      <label htmlFor={childItem.slug}>{childItem.title}</label>
                    </div>
                  ))}
                </div>
              ))}
            </fieldset>
          </div>
          <div className="flex items-center justify-end py-3">
            <button
              type="button"
              className="ti-btn ti-btn-primary-full ti-btn-wave"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryComponent;
