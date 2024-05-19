import React from "react";

export default function UserManagement() {
  return (
    <div>
      <div className="grid grid-cols-12 gap-6">
        <div className="xl:col-span-12 col-span-12">
          <div className="box custom-box">
            <div className="box-header justify-between">
              <div className="box-title">Users</div>
            </div>
            <div className="box-body">
              <div className="table-responsive">
                <table className="table whitespace-nowrap min-w-full">
                  <thead>
                    <tr className="border-b border-defaultborder">
                      <th scope="col">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="checkboxNoLabel"
                          value=""
                          aria-label="..."
                        />
                      </th>
                      <th scope="col" className="text-start">
                    Users
                      </th>
                      <th scope="col" className="text-start">
                        Role
                      </th>
                      <th scope="col" className="text-start">
                        Gmail
                      </th>
                    
                      <th scope="col" className="text-start">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-defaultborder">
                      <th scope="row">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="checkboxNoLabel13"
                          value=""
                          aria-label="..."
                        />
                      </th>
                      <td>
                        <div className="flex items-center">
                          <span className="avatar avatar-xs me-2 online avatar-rounded">
                            <img src="../assets/images/faces/5.jpg" alt="img" />
                          </span>
                          Mirinda Hers
                        </div>
                      </td>
                      <td>
                        <span className="badge bg-danger/10 text-danger">
                          Employee
                        </span>
                      </td>
                      <td>mirindahers@gmail.com</td>
                    
                      <td>
                        <div className="hstack flex gap-3 text-[.9375rem]">
                          <a
                            aria-label="anchor"
                            href="javascript:void(0);"
                            className="ti-btn ti-btn-icon ti-btn-sm ti-btn-success-full"
                          >
                            <i className="ri-download-2-line"></i>
                          </a>
                          <a
                            aria-label="anchor"
                            href="javascript:void(0);"
                            className="ti-btn ti-btn-icon ti-btn-sm ti-btn-info-full"
                          >
                            <i className="ri-edit-line"></i>
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="box-footer hidden border-t-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
