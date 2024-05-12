import CategorySelect from "@/components/CategorySelect";
import React from "react";

const CategoryForm = () => {
  const formState = {
    category_name: "",
    parent_category: "",
    description: "",
  };
  const handleChange = (e) => {
    formState[e.target.name] = e.target.value;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <div className="w-4/12 category-left">
      <form>
        <div className="grid grid-cols-12 gap-4 mt-0">
          <div className="col-span-12 ">
            <label className="form-label">Category Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Category name"
              name="category_name"
              value={formState.category_name}
              onChange={handleChange}
              aria-label="First name"
            />
          </div>

          <div className="col-span-12 ">
            <label for="inputEmail4" className="form-label">
              Parent category
            </label>
            <CategorySelect
              value={formState.parent_category}
              onChange={handleChange}
            />
          </div>
          <div className="col-span-12 ">
            <label for="inputAddress" className="form-label">
              Description
            </label>
            <textarea
              id="story"
              className="w-full rounded-md"
              name="story"
              rows="6"
              cols="60"
            ></textarea>
          </div>

          <div className="col-span-12 mt-6">
            <div className="box">
              <div class="box-header">
                <h5 className="box-title">Profile Image</h5>
              </div>
              <div className="box-body">
                <div>
                  <label className="block">
                    <span className="sr-only">Choose Profile photo</span>
                    <input
                      type="file"
                      className="block w-full border border-gray-200 focus:shadow-sm dark:focus:shadow-white/10 rounded-sm text-sm focus:z-10 focus:outline-0 focus:border-gray-200 dark:focus:border-white/10 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50
                                  file:me-4 file:py-2 file:px-4
                                  file:rounded-s-sm file:border-0
                                  file:text-sm file:font-semibold
                                  file:bg-primary file:text-white
                                  hover:file:bg-primary focus-visible:outline-none
                                "
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12">
            <button type="submit" className="ti-btn ti-btn-primary-full">
              Add New Category
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CategoryForm;
