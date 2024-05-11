import UploadMedia from "../UploadMedia";
import MediaFile from "./Media/MediaFile";
import { getAllMedia } from "@/resolvers/query";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";

const Media = () => {
  const { data, isPending, isError, error, refetch } = useQuery({
    queryKey: ["get-all-media"],
    queryFn: getAllMedia,
  });

  console.log(data);
  return (
    <div>
      <UploadMedia refetch={refetch} />

      <div className="w-full border border-yellow-400 mt-5 px-5 "></div>
      <div className="py-5 px-5">
        <p className="text-sm md:text-md  font-bold">All Media</p>
      </div>
      <div className="w-full h-full">
        {isPending ? (
          <div className="w-full h-full">
            <div class="rounded-md h-12 w-12 border-4 border-t-4 border-blue-500 animate-spin absolute"></div>
          </div>
        ) : isError ? (
          <div className="text-red-500">{error.message}</div>
        ) : data?.data.length === 0 ? (
          <div className="text-center text-gray-500">No media found</div>
        ) : (
          <div className="  gap-3 py-5  grid-cols-12 grid justify-between">
            {data?.data.map((media) => (
              <MediaFile key={media.id} media={media} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Media;
