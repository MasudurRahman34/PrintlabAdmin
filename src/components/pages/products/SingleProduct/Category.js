import { getAllCategories } from "@/resolvers/query";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";

const CategoryComponent = ({ categorys }) => {
  const [category, setcategory] = React.useState([]);

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: "getCategoriesQuery",
    queryFn: getAllCategories,
  });

  useEffect(() => {
    if (data) {
      setcategory([...data?.data]);
    }
  }, [data]);

  console.log(category);

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div
      id="hs-basic-with-title-and-arrow-stretched-collapse-one"
      class={`hs-accordion-content  transition duration-300  ${
        categorys ? "opacity-100 visible" : "opacity-0 invisible hidden"
      } `}
      aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
    >
      <div class="text-gray-800 !py-3 !px-4 dark:text-gray-200">
        <div className="mt-2 category-section">
          <fieldset className="fieldset-scroll max-h-[300px] overflow-y-auto px-2 border">
            <legend>Choose your Category:</legend>
            {category?.map((item, idx) => (
              <div key={item.slug}>
                <div className="flex items-center mt-1">
                  <input
                    type="checkbox"
                    id={item.slug}
                    name="scales"
                    className="rounded-md mb-1 mr-1 mt-[2px]"
                  />
                  <label htmlFor={item.slug}>{item.title}</label>
                </div>
                {item?.children?.map((childItem, childIdx) => (
                  <div
                    key={childItem.slug}
                    className="flex items-center mt-1 ml-3"
                  >
                    <input
                      type="checkbox"
                      id={childItem.slug}
                      name="scales"
                      className="rounded-md mb-1 mr-1 mt-[2px]"
                    />
                    <label htmlFor={childItem.slug}>{childItem.title}</label>
                  </div>
                ))}
              </div>
            ))}
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default CategoryComponent;
