import Loading from "@/components/ui/Loading";
import { useAuth } from "@/hooks/useAuth";
import { getTopListForProductQuery } from "@/resolvers/query";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import TopListingItemTable from "./TopListingItemTable";
import Link from "next/link";
import AddNewTopList from "./AddNewTopList";

const TopListTab = () => {
  const { session } = useAuth();

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["top-listing"],
    queryFn: () => getTopListForProductQuery({ token: session?.token }),
    enabled: !!session,
  });

  return (
    <>
      <AddNewTopList refetch_top_list={refetch} />
      <div>
        <div className="w-full p-4 mt-3 bg-white min-h-56">
          <h1 className="text-xl font-bold">Top Listing</h1>
          <div className="mt-4">
            {isLoading && <Loading />}
            {isError && <p>Something went wrong</p>}
            {data && data?.data?.length === 0 && <p>No top list found</p>}
            {data && data?.data?.length > 0 && (
              <TopListingItemTable
                items={data?.data}
                refetch_top_list={refetch}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopListTab;
