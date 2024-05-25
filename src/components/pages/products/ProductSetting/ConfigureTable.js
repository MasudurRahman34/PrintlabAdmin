import { getProductCombinationQuery } from "@/resolvers/query";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Grid, _ } from "gridjs-react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const ConfigureTable = () => {
  const [combination, setCombination] = React.useState([]);
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);
  const { data, isError, isLoading } = useQuery({
    queryKey: ["getCombinationTable", slug],
    queryFn: () => getProductCombinationQuery(slug),
    enabled: !!slug,
  });

  useEffect(() => {
    if (data) {
      const temp = [];

      // price should be a input field to edit the price as number
      data.data.forEach((combination) => {
        temp.push([
          combination.id,
          combination.sku,

          _(
            <div className="flex space-x-2">
              <input type="number" className="w-20" value={combination.price} />
            </div>
          ),

          combination.combination_string,

          _(
            <div className="flex space-x-2">
              <button
                type="button"
                class="ti-btn ti-btn-primary-full ti-btn-wave"
              >
                Save
              </button>
            </div>
          ),
        ]);
      });
      setCombination(temp);
    }
  }, [data]);

  return (
    <div className="py-3">
      <div class="w-full">
        <div class="box-body ">
          <div class="avatar-list-stacked">
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              <Grid
                data={combination}
                columns={[
                  {
                    name: "S/N",
                  },
                  { name: "SKU" },
                  {
                    name: "Price",
                  },
                  {
                    name: "Combination String",
                  },

                  {
                    name: "Action",
                  },
                ]}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigureTable;
