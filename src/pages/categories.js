import { AdminLayout } from "@/layout/AdminLayout";

const categories = () => {
  return (
    <AdminLayout>
      <div className="mt-5">
        <h1>Category</h1>
        <form className="grid grid-cols-12 gap-4 mt-0">
          <div className="md:col-span-6 col-span-12">
            <label className="form-label">Category Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Category name"
              aria-label="First name"
            />
          </div>
          <div className="md:col-span-6 col-span-12">
            <label className="form-label">Slug</label>
            <input
              type="text"
              className="form-control"
              placeholder="Slug name"
              aria-label="Last name"
            />
          </div>
          <div className="md:col-span-6 col-span-12">
            <label for="inputEmail4" className="form-label">
              Parent category
            </label>
            <select
              class="ti-form-select rounded-sm !py-2 !px-3"
              data-trigger
              name="choices-single-default"
              id="choices-single-default"
            >
              <option value="">Choose category</option>
              <option value="Choice 1">Choice 1</option>
              <option value="Choice 2">Choice 2</option>
              <option value="Choice 3">Choice 3</option>
            </select>
          </div>
          <div className="md:col-span-6 col-span-12">
            <label for="inputPassword4" className="form-label">
              Display type
            </label>
            <select
              class="ti-form-select rounded-sm !py-2 !px-3"
              data-trigger
              name="choices-single-default"
              id="choices-single-default"
            >
              <option value="">Display type</option>
              <option value="Choice 1">Choice 1</option>
              <option value="Choice 2">Choice 2</option>
              <option value="Choice 3">Choice 3</option>
            </select>
          </div>
          <div className="col-span-12 lg:col-span-6 ">
            <label for="inputAddress" className="form-label">
              Description
            </label>
            <textarea
              id="story"
              className="w-full rounded-md"
              name="story"
              rows="12"
              cols="60"
            ></textarea>
          </div>
          <div className="col-span-12 lg:col-span-6 mt-6">
            <div className="box">
              <div class="box-header">
                <h5 className="box-title">Thumbnail</h5>
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
              Add Category
            </button>
          </div>
        </form>
        <div>
        <div class="table-responsive">
        <table class="table whitespace-nowrap table-bordered min-w-full">
            <thead>
                <tr class="border-b border-defaultborder">
                    <th scope="col" class="text-start">Thumbnail </th>
                    <th scope="col" class="text-start">Slug</th>
                    <th scope="col" class="text-start">Parent category</th>
                    <th scope="col" class="text-start">Display type</th>
                    <th scope="col" class="text-start">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-b border-defaultborder">
                    <th scope="row">
                        <div class="flex items-center">
                            <span class="avatar avatar-xs me-2 online avatar-rounded">
                                <img src="../assets/images/faces/13.jpg" alt="img"/>
                            </span>Sukuro Kim
                        </div>
                    </th>
                    <td>Active</td>
                    <td>kimosukuro@gmail.com</td>
                    <td>kimosukuro@gmail.com</td>
                    <td>
                        <div class="hstack gap-2 flex-wrap">
                            <a aria-label="anchor" href="javascript:void(0);" class="text-info text-[.875rem] leading-none"><i
                                    class="ri-edit-line"></i></a>
                            <a aria-label="anchor" href="javascript:void(0);" class="text-danger text-[.875rem] leading-none"><i
                                    class="ri-delete-bin-5-line"></i></a>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default categories;
