import Category from "./Category";
import Gallery from "./Gallery";
import ProductLeftLayout from "./ProductLeftLayout";
import ProfileImage from "./ProfileImage";
import Status from "./Status";

const AccordionsCard = ({ data, isLoading, isError, refetch }) => {
  return (
    <div className="bg-white roumded-md">
      <div class="">
        <div class="hs-accordion-group">
          <div
            class="hs-accordion   overflow-hidden !border-b-0"
            id="hs-basic-with-title-and-arrow-stretched-heading-one"
          >
            <ProductLeftLayout title="Category">
              <Category
                product_data={data}
                product_loading={isLoading}
                product_refetch={refetch}
              />
            </ProductLeftLayout>

            <ProductLeftLayout title="Product Profile Image">
              <ProfileImage
                data={data}
                isLoading={isLoading}
                refetch={refetch}
              />
            </ProductLeftLayout>

            <ProductLeftLayout title="Product Gallery">
              <Gallery data={data} isLoading={isLoading} refetch={refetch} />
            </ProductLeftLayout>

            <ProductLeftLayout title="Status">
              <Status
                data={data}
                isLoading={isLoading}
                refetch={refetch}
                isError={isError}
              />
            </ProductLeftLayout>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionsCard;
