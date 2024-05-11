import { AdminLayout } from "@/layout/AdminLayout";

const categories = () => {
  return (
    <AdminLayout>
      <div className=" bg-white px-5 py-5">
        <h1>Category</h1>
        <div className="flex gap-4 ">
          <div className="category-left w-4/12">
            <form>
              <div className="grid grid-cols-12 gap-4 mt-0">
                <div className=" col-span-12">
                  <label className="form-label">Category Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Category name"
                    aria-label="First name"
                  />
                </div>
                <div className=" col-span-12">
                  <label className="form-label">Slug</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Slug name"
                    aria-label="Last name"
                  />
                </div>
                <div className=" col-span-12">
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
                <div className="md col-span-12">
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
                <div className="col-span-12 mt-6">
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
                    Add New Category
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="category-right w-8/12">
            <div class="box custom-box">
              <div class="box-header justify-between">
                <div class="box-title">Category data</div>
                <div class="prism-toggle">
                </div>
              </div>
              <div class="box-body">
                <div class="table-responsive">
                  <table class="table whitespace-nowrap min-w-full">
                    <thead>
                      <tr class="border-b border-defaultborder">
                        <th scope="col" class="text-start">
                          Name
                        </th>
                        <th scope="col" class="text-start">
                        Description
                        </th>
                        <th scope="col" class="text-start">
                          Slug
                        </th>
                        <th scope="col" class="text-start">
                          Count
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="table-active">
                        <th scope="row" class="text-start">
                          Mark
                        </th>
                        <td>21,Dec 2021</td>
                        <td>+1234-12340</td>
                        <td>
                          <span class="badge bg-primary text-white">
                            Completed
                          </span>
                        </td>
                      </tr>
                      <tr class="border-b border-defaultborder">
                        <th scope="row" class="text-start">
                          Monika
                        </th>
                        <td>29,April 2022</td>
                        <td>+1523-12459</td>
                        <td>
                          <span class="badge bg-warning text-white">
                            Failed
                          </span>
                        </td>
                      </tr>
                      <tr class="border-b border-defaultborder">
                        <th scope="row" class="text-start">
                          Madina
                        </th>
                        <td>30,Nov 2022</td>
                        <td class="table-active">+1982-16234</td>
                        <td>
                          <span class="badge bg-success text-white">
                            Successful
                          </span>
                        </td>
                      </tr>
                      <tr class="border-b border-defaultborder">
                        <th scope="row" class="text-start">
                          Bhamako
                        </th>
                        <td>18,Mar 2022</td>
                        <td>+1526-10729</td>
                        <td>
                          <span class="badge bg-secondary text-white">
                            Pending
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="box-footer hidden border-t-0"></div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default categories;
