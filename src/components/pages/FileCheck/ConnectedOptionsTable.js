import TableRow from "./TableRow";
import React from "react";

const ConnectedOptionsTable = ({
  connected_check_options,
  connected_check_refetch,
}) => {
  return (
    <div className="py-4 table-responsive">
      {connected_check_options && connected_check_options?.length > 0 ? (
        <>
          {/*  <table className="table min-w-full align-middle">
          <thead>
            <tr>
              <th className="px-4 py-2 text-white border text-start bg-primary">
                File Check Option
              </th>
              <th className="px-4 py-2 text-white border text-start bg-primary">
                Attribute Option
              </th>
              <th className="px-4 py-2 text-white border text-start bg-primary">
                Instruction
              </th>

              <th className="px-4 py-2 text-white border text-start bg-primary">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {connected_check_options.map((option) => (
              <TableRow
                key={option.id}
                option={option}
                connected_check_refetch={connected_check_refetch}
              />
            ))}
          </tbody>
        </table> */}

          <div className="box custom-card">
            <div className="">
              <div className="overflow-x-auto">
                <table className="table min-w-full border whitespace-nowrap table-hover table-bordered">
                  <thead>
                    <tr className="border border-solid border-inherit dark:border-defaultborder/10">
                      <th
                        scope="col"
                        className="!text-start !text-[0.85rem] min-w-[200px]"
                      >
                        File Check Option
                      </th>
                      <th scope="col" className="!text-start !text-[0.85rem]">
                        Attribute Option
                      </th>
                      <th scope="col" className="!text-start !text-[0.85rem]">
                        Instruction
                      </th>

                      <th scope="col" className="!text-start !text-[0.85rem]">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {connected_check_options.map((option) => (
                      <TableRow
                        key={option.id}
                        option={option}
                        connected_check_refetch={connected_check_refetch}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="text-xl font-bold text-center">
          No connected options
        </div>
      )}
    </div>
  );
};

export default ConnectedOptionsTable;
