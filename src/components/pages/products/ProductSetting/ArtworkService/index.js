import ActiveTabArtwork from "./ActiveTabArtwork";
import ArtworkTabNav from "./ArtworkTabNav";
import { getProductArtworkServiceQuery } from "@/resolvers/query";
import { useQuery } from "@tanstack/react-query";
import React, { memo, useEffect, useState } from "react";

const ArtworkService = ({
  product_id,
  product_data,
  product_isLoading,
  product_error,
  product_isError,
  product_refetch,
  combination_refetch,
}) => {
  const [activeArtwork, setActiveArtwork] = useState(null);
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["getProductArtworkServiceQuery"],
    queryFn: getProductArtworkServiceQuery,
  });

  useEffect(() => {
    if (data?.data.length > 0) {
      setActiveArtwork(data?.data[0]);
    }
  }, [data]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <section className="w-full py-3">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Delivery Service</h3>
        {/* <button
          type="button"
          aria-label="button"
          className="ti-btn ti-btn-icon ti-btn-primary-full ti-btn-wave"
        >
          <i className="bi bi-plus-lg "></i>
        </button> */}
      </div>
      <div className="grid grid-cols-12 mt-4 ">
        <div className="col-span-12 lg:col-span-4 ">
          {!isError &&
            data?.data.length > 0 &&
            data?.data.map((row) => (
              <ArtworkTabNav
                key={row.id}
                activeArtwork={activeArtwork}
                row={row}
                setActiveArtwork={setActiveArtwork}
              />
            ))}
        </div>
        <div className="col-span-12 lg:col-span-8">
          {activeArtwork && (
            <ActiveTabArtwork
              artwork={activeArtwork}
              product_id={product_id}
              product_data={product_data}
              product_isLoading={product_isLoading}
              product_error={product_error}
              product_isError={product_isError}
              product_refetch={product_refetch}
              activeArtwork={activeArtwork}
              combination_refetch={combination_refetch}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default ArtworkService;
