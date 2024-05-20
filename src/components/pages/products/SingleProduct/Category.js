import { getAllCategories } from "@/resolvers/query";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";

const CategoryComponent = ({ categorytogle }) => {
  const [checkedItems, setCheckedItems] = React.useState({});

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: "getCategoriesQuery",
    queryFn: getAllCategories,
  });

  useEffect(() => {
    if (data) {
      const initialCheckedState = data.data.reduce((acc, item) => {
        acc[item.slug] = false;
        item.children.forEach(child => {
          acc[child.slug] = false;
        });
        return acc;
      }, {});
      setCheckedItems(initialCheckedState);
    }
  }, [data]);

  const handleParentChange = (slug) => {
    setCheckedItems(prev => ({
      ...prev,
      [slug]: !prev[slug],
    }));
  };

  const handleChildChange = (parentSlug, childSlug) => {
    setCheckedItems(prev => {
      const newChecked = { ...prev, [childSlug]: !prev[childSlug] };
      const parentChecked = newChecked[childSlug] || data.data.find(item => item.slug === parentSlug).children.some(child => newChecked[child.slug]);
      newChecked[parentSlug] = parentChecked;
      return newChecked;
    });
  };

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div
      id="hs-basic-with-title-and-arrow-stretched-collapse-one"
      className={`hs-accordion-content transition duration-300 ${
        categorytogle ? "opacity-100 visible" : "opacity-0 invisible hidden"
      }`}
      aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
    >
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
                    checked={checkedItems[item.slug]}
                    onChange={() => handleParentChange(item.slug)}
                    className="rounded-md mb-1 mr-1 mt-[2px]"
                  />
                  <label htmlFor={item.slug}>{item.title}</label>
                </div>
                {item.children.map((childItem) => (
                  <div key={childItem.slug} className="flex items-center mt-1 ml-3">
                    <input
                      type="checkbox"
                      id={childItem.slug}
                      name="scales"
                      checked={checkedItems[childItem.slug]}
                      onChange={() => handleChildChange(item.slug, childItem.slug)}
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

