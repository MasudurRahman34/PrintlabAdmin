import ConnectedOptionsTable from "./ConnectedOptionsTable";
import FileCheckOption from "./FileCheckOption";
import FileConnect from "./FileConnect";
import { useAuth } from "@/hooks/useAuth";
import {
  getAllAttributeOptionsQuery,
  getAllConnectedFileCheckOptionsQuery,
  getAllFileCheckOptionsQuery,
} from "@/resolvers/query";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const FileCheckComponent = () => {
  const { session } = useAuth();

  // get all connected file check options and attribute options from the database

  const {
    data: connected_check_options,
    isLoading: connected_check_loading,
    isError: connected_check_isError,
    refetch: connected_check_refetch,
  } = useQuery({
    queryKey: ["get_all_connected_file_check_options", session?.token],
    queryFn: () =>
      getAllConnectedFileCheckOptionsQuery({ token: session?.token }),
    enabled: !!session?.token,
  });

  // get all attribute options and file check options
  const {
    data: attribute_options,
    isLoading: attribute_loading,
    refetch: attribute_refetch,
  } = useQuery({
    queryKey: ["get_all_attributes", session?.token],
    queryFn: () => getAllAttributeOptionsQuery({ token: session?.token }),
    enabled: !!session?.token,
  });

  // get all file check options
  const {
    data: file_check_options,
    isLoading: file_check_loading,
    refetch: file_check_refetch,
  } = useQuery({
    queryKey: ["get_all_file_check_options", session?.token],
    queryFn: () => getAllFileCheckOptionsQuery({ token: session?.token }),
    enabled: !!session?.token,
  });

  return (
    <section className="bg-white">
      <div className="px-4 py-8">
        <div className="mb-4">
          <h1 className="text-2xl font-bold">Manage File Check</h1>
          <p>
            File check is a process to verify the file before sending it to the
            printer.
          </p>
        </div>
        <div>
          <FileCheckOption file_check_refetch={file_check_refetch} />
        </div>
        <div>
          {file_check_loading || attribute_loading ? (
            <div>Loading...</div>
          ) : (
            <FileConnect
              file_check_options={file_check_options?.data}
              attribute_options={attribute_options?.data}
              connected_check_refetch={connected_check_refetch}
            />
          )}
        </div>
        <div>
          {connected_check_loading ? (
            <div>Loading...</div>
          ) : (
            <ConnectedOptionsTable
              connected_check_options={connected_check_options?.data}
              connected_check_refetch={connected_check_refetch}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default FileCheckComponent;
