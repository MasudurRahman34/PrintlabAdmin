import { getSingleProductQuery } from "@/resolvers/query";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";

const General = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["getSingleProductQuery", slug],
    queryFn: () => getSingleProductQuery(slug),
    enabled: !!slug,
  });
if(isLoading){
<h1>Loading...</h1>
}
  let TextEditor;
  if (typeof window !== "undefined") { TextEditor = require("@/components/TextEditor").default;
  }
  console.log(data?.data?.specification);
  const { technical_specification_imageUrl, details } = data?.data?.specification;

  return (
    <div className="general">
      <div className="mt-2">
        <label className="text-[#333335] text-sm md:text-base w-[20%] ">
          Technical_specification_imageUrl:
        </label>
        <input
          type="text"
          className="w-[50%] ml-4  rounded-md"
          value={technical_specification_imageUrl}
        />
      </div>
      <div className="mt-2">
        <label className="text-[#333335] text-sm md:text-base w-[20%] ">
          Details
        </label>
        {TextEditor ? <TextEditor text={details} /> : null}
      </div>
    </div>
  );
};

export default General;

