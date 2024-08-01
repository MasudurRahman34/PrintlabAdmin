import Pagination from "../Pagination";
import UploadMedia from "../UploadMedia";
import MediaFile from "./Media/MediaFile";
import { getAllMedia } from "@/resolvers/query";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const Media = () => {
  const [current_page, set_current_page] = useState(1);
  const { data, isPending, isError, error, refetch, isFetching } = useQuery({
    queryKey: ["get-all-media", current_page],
    queryFn: () => getAllMedia({ current_page }),
    enabled: !!current_page,
  });

  const paginateFn = ({ page }) => {
    set_current_page(page);
    refetch();
  };

  return (
    <div>
      <UploadMedia refetch={refetch} />
      <div className="w-full px-5 mt-5 border border-yellow-400 "></div>
      <div className="px-5 py-5">
        <p className="text-sm font-bold md:text-md">All Media</p>
      </div>
      <div className="w-full h-full">
        {isPending || isFetching ? (
          <div className="w-full h-full">
            <div class="rounded-md h-12 w-12 border-4 border-t-4 border-blue-500 animate-spin absolute"></div>
          </div>
        ) : isError ? (
          <div className="text-red-500">{error.message}</div>
        ) : data?.data.length === 0 ? (
          <div className="text-center text-gray-500">No media found</div>
        ) : (
          <>
            <div className="flex flex-wrap gap-3 py-5 ">
              {data?.data.map((media) => (
                <MediaFile key={media.id} media={media} refetch={refetch} />
              ))}
            </div>
            <div>
              <Pagination meta={data?.meta} paginationFn={paginateFn} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Media;
