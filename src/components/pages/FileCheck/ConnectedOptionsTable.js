import TableRow from "./TableRow";
import React from "react";

const ConnectedOptionsTable = ({
  connected_check_options,
  connected_check_refetch,
}) => {
  return (
    <div className="py-4 table-responsive">
      {connected_check_options && connected_check_options?.length > 0 ? (
        <table className="table min-w-full align-middle">
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
        </table>
      ) : (
        <div className="text-xl font-bold text-center">
          No connected options
        </div>
      )}
    </div>
  );
};

export default ConnectedOptionsTable;
