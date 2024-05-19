export default function UserProfile() {
  return (
    <div>
      <div classNameName="px-5 py-5">
        <div className="main-content">
          <div className="block justify-between page-header md:flex">
            <div>
              <h3 className="!text-defaulttextcolor dark:!text-defaulttextcolor/70 dark:text-white dark:hover:text-white text-[1.125rem] font-semibold">
                {" "}
                Profile
              </h3>
            </div>
            <ol className="flex items-center whitespace-nowrap min-w-0">
              <li className="text-[0.813rem] ps-[0.5rem]">
                <a
                  className="flex items-center text-primary hover:text-primary dark:text-primary truncate"
                  href="javascript:void(0);"
                >
                  Pages
                  <i className="ti ti-chevrons-right flex-shrink-0 text-[#8c9097] dark:text-white/50 px-[0.5rem] overflow-visible rtl:rotate-180"></i>
                </a>
              </li>
              <li
                className="text-[0.813rem] text-defaulttextcolor font-semibold hover:text-primary dark:text-[#8c9097] dark:text-white/50 "
                aria-current="page"
              >
                Profile
              </li>
            </ol>
          </div>
          <div className="grid grid-cols-12 gap-x-6">
            <div className="xxl:col-span-4 xl:col-span-12 col-span-12">
              <div className="box overflow-hidden">
                <div className="box-body !p-0">
                  <div className="sm:flex items-start p-6      main-profile-cover">
                    <div>
                      <span className="avatar avatar-xxl avatar-rounded online me-4">
                        <img src="../assets/images/faces/9.jpg" alt="" />
                      </span>
                    </div>
                    <div className="flex-grow main-profile-info">
                      <div className="">
                        <h6 className="font-semibold mb-1 text-white text-[1rem]">
                          Hassan Mahumd
                        </h6>
                      </div>
                      <p className="mb-1 !text-white  opacity-[0.7]">Users</p>
                      <p className="text-[0.75rem] text-white mb-6 opacity-[0.5]">
                        <a href="#" className="me-4 inline-flex !text-white">
                          Edit Profile
                        </a>
                        <a href="#" className="inline-flex">
                          Reset Password
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="p-6 border-b border-dashed dark:border-defaultborder/10">
                    <p className="text-[.9375rem] mb-2 me-6 font-semibold">
                      Personal Information :
                    </p>
                    <div className="text-[#8c9097] dark:text-white/50">
                      <div className="">
                        <p className="mb-2">
                          
                          <b className="mr-2">First Name</b>Hassan
                        </p>
                        <p className="mb-2">
                          <b className="mr-2">Last Name</b>Mahmud
                        </p>
                      </div>
                      <p className="mb-2">
                        <span className="avatar avatar-sm avatar-rounded me-2 bg-light text-[#8c9097] dark:text-white/50">
                          <i className="ri-mail-line align-middle text-[.875rem] text-[#8c9097] dark:text-white/50"></i>
                        </span>
                        sonyataylor2531@gmail.com
                      </p>
                      <p className="mb-2">
                        <span className="avatar avatar-sm avatar-rounded me-2 bg-light text-[#8c9097] dark:text-white/50">
                          <i className="ri-phone-line align-middle text-[.875rem] text-[#8c9097] dark:text-white/50"></i>
                        </span>
                        +(555) 555-1234
                      </p>
                      <p className="mb-0">
                        <span className="avatar avatar-sm avatar-rounded me-2 bg-light text-[#8c9097] dark:text-white/50">
                          <i className="ri-map-pin-line align-middle text-[.875rem] text-[#8c9097] dark:text-white/50"></i>
                        </span>
                        MIG-1-11, Monroe Street, Georgetown, Washington D.C,
                        USA,20071
                      </p>
                    </div>
                  </div>
                  <div className="p-6 border-b border-dashed dark:border-defaultborder/10">
                    <p className="text-[.9375rem] mb-2 font-semibold">
                      Address:
                    </p>
                    <div className="box">
                      <div className="box-body !p-0">
                        <ul className="list-group">
                          <li className="list-group-item">
                            <div className="flex flex-wrap items-center">
                              <div className="me-2 font-semibold">
                                Country :
                              </div>
                              <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">
                                Bangladesh
                              </span>
                            </div>
                          </li>
                          <li className="list-group-item">
                            <div className="flex flex-wrap items-center">
                              <div className="me-2 font-semibold">
                                Pin Code :
                              </div>
                              <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">
                                23564
                              </span>
                            </div>
                          </li>
                          <li className="list-group-item">
                            <div className="flex flex-wrap items-center">
                              <div className="me-2 font-semibold">
                                City/State:
                              </div>
                              <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">
                                Jashore
                              </span>
                            </div>
                          </li>
                          <li className="list-group-item">
                            <div className="flex flex-wrap items-center">
                              <div className="me-2  font-semibold">
                                Street Address
                              </div>
                              <span className="text-[0.75rem] mt-1 text-[#8c9097] dark:text-white/50">
                                MIG-1-11, Monroe Street, Georgetown, Washington
                                D.C, USA,20071
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xxl:col-span-8 xl:col-span-12 col-span-12">
              <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-12 col-span-12">
                  <div className="box">
                    <div className="box-body !p-0">
                      <div className="!p-4 border-b dark:border-defaultborder/10 border-dashed md:flex items-center justify-between">
                        <nav className="-mb-0.5 sm:flex md:space-x-6 rtl:space-x-reverse pb-2">
                          <p className="w-full text-xl sm:text-base md:text-lg font-bold  ">
                            Orders
                          </p>
                        </nav>
                      </div>
                      <div class="box-body">
                        <div class="table-responsive">
                          <table class="table whitespace-nowrap min-w-full">
                            <thead>
                              <tr class="border-b border-defaultborder">
                                <th scope="col">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="checkboxNoLabel"
                                    value=""
                                    aria-label="..."
                                  />
                                </th>
                                <th scope="col" class="text-start">
                                  Product Name
                                </th>
                                <th scope="col" class="text-start">
                                  Transaction Id
                                </th>
                                <th scope="col" class="text-start">
                                  Quantity
                                </th>
                                <th scope="col" class="text-start">
                                  Price
                                </th>
                                <th scope="col" class="text-start">
                                  Status
                                </th>
                                <th scope="col" class="text-start">
                                  Created
                                </th>
                                <th scope="col" class="text-start">
                                  Action
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr class="border-b border-defaultborder">
                                <th scope="row">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="checkboxNoLabel1"
                                    value=""
                                    aria-label="..."
                                  />
                                </th>
                                <td>
                                  <div class="flex items-center">
                                    <span class="avatar avatar-xs me-2 online avatar-rounded">
                                      <img
                                        src="../assets/images/faces/3.jpg"
                                        alt="img"
                                      />
                                    </span>
                                    Mayor Kelly
                                  </div>
                                </td>
                                <td>2456fkdskd4</td>
                                <td>2</td>
                                <td>$202</td>
                                <td>
                                  <button
                                    type="button"
                                    class="ti-btn !py-1 !px-2 !text-[0.75rem] ti-btn-primary"
                                  >
                                    Pending
                                  </button>
                                </td>

                                <td>Mar 14,2022</td>
                                <td>
                                  <div class="hstack flex gap-3 text-[.9375rem]">
                                    <a
                                      aria-label="anchor"
                                      href="javascript:void(0);"
                                      class="ti-btn ti-btn-sm ti-btn-success !rounded-full"
                                    >
                                      <i class="ri-download-2-line"></i>
                                    </a>
                                    <a
                                      aria-label="anchor"
                                      href="javascript:void(0);"
                                      class="ti-btn ti-btn-sm ti-btn-info !rounded-full"
                                    >
                                      <i class="ri-edit-line"></i>
                                    </a>
                                    <a
                                      aria-label="anchor"
                                      href="javascript:void(0);"
                                      class="ti-btn ti-btn-sm ti-btn-danger !rounded-full"
                                    >
                                      <i class="ri-delete-bin-line"></i>
                                    </a>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
