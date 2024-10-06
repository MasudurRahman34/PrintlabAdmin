import CombinationRow from "./CombinationRow";
import { Grid, _ } from "gridjs-react";
import React, { useEffect } from "react";

const ConfigureTable = ({ data }) => {
  // need a radio button for default price combination here i will manage . radio button should be selected only one at a time

  return (
    <div className="py-3">
      <div class="w-full">
        <div class="box-body ">
          <div class="avatar-list-stacked">
            <div class="table-responsive max-h-[800px] overflow-y-auto scrollbar-thin">
              <table class="table whitespace-nowrap min-w-full">
                <thead>
                  <tr class="border-b border-defaultborder">
                    <th scope="row" className="!ps-4 !pe-5">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="checkboxNoLabel1"
                        value=""
                        aria-label="..."
                      />
                    </th>
                    <th scope="col" class="text-start">
                      S/R
                    </th>
                    <th scope="col" class="text-start">
                      SKU
                    </th>
                    <th scope="col" class="text-start">
                      Price
                    </th>

                    <th scope="col" class="text-start">
                      Combination
                    </th>
                    <th scope="col" class="text-start">
                      visibility
                    </th>
                    <th scope="col" class="text-start">
                      Status
                    </th>
                    <th scope="col" class="text-start">
                      Default
                    </th>
                    <th scope="col" class="text-start">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.data.map((row, idx) => {
                    return <CombinationRow key={idx} idx={idx} row={row} />;
                  })}
                </tbody>
              </table>
            </div>
            <div>
              <button>Delete Selected</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigureTable;
