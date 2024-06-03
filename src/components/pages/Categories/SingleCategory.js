import CategorySelect from "@/components/CategorySelect";
import MediaAttach from "@/components/MediaAttach";
import { updateCategoryMutation } from "@/resolvers/mutation";
import { getSingleCategoryQuery } from "@/resolvers/query";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";
import toast from "react-hot-toast";

const SingleCategory = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const { data, isPending, isError, error, refetch } = useQuery({
    queryKey: ["get-single-categories", slug],
    queryFn: () => getSingleCategoryQuery(slug),
    enabled: !!slug,
  });

  const [formState, setFormState] = React.useState({
    category_name: "",
    parent_category: "",
    description: "",
    media_ids: [],
  });
  const { mutate, isPending: updating } = useMutation({
    mutationKey: "update-category",
    mutationFn: updateCategoryMutation,
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formState.category_name === "") {
      toast.error("Category name is required");
      return;
    }

    const variables = {};

    if (formState.category_name) variables.title = formState.category_name;
    if (formState.description) variables.description = formState.description;
    if (formState.parent_category)
      variables.category_id = formState.parent_category;

    mutate(
      {
        variables,
      },
      {
        onSuccess: () => {
          refetch();
          toast.success("Category added successfully");
          setFormState({
            category_name: "",
            parent_category: "",
            description: "",
            media_ids: [],
          });
        },
        onError: (error) => {
          const keys = Object.keys(error.response.data.message);

          keys.map((key) => {
            toast.error(error.response.data.message[key][0]);
          });
        },
      }
    );
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="px-5 py-5 bg-white ">
      <div className="flex gap-4 ">
        <div className="w-4/12 category-left">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-12 gap-4 mt-0">
              <div className="col-span-12 ">
                <label className="form-label">Category Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Category name"
                  name="category_name"
                  value={formState.category_name}
                  onChange={handleChange}
                  aria-label="First name"
                />
              </div>

              <div className="col-span-12 ">
                <label for="inputEmail4" className="form-label">
                  Parent category
                </label>
                <CategorySelect
                  value={formState.parent_category}
                  onChange={handleChange}
                  name="parent_category"
                />
              </div>
              <div className="col-span-12 ">
                <label for="inputAddress" className="form-label">
                  Description
                </label>
                <textarea
                  id="description"
                  className="w-full rounded-md"
                  name="description"
                  value={formState.description}
                  onChange={handleChange}
                  rows="6"
                  cols="60"
                ></textarea>
              </div>

              <div className="col-span-12 mt-6">
                <div className="box">
                  <div class="box-header">
                    <h5 className="box-title">Profile Image</h5>
                  </div>
                  <div className="box-body">
                    <div>
                      <label className="block">
                        <span className="sr-only">Choose Profile photo</span>
                        <button
                          className="btn btn-primary"
                          type="button"
                          onClick={openModal}
                        >
                          Choose Profile photo
                        </button>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <MediaAttach
                selectedMedia={formState.media_ids}
                multiple={false}
                attachmentable_id={data?.data.id}
                is_profile={true}
                attachmentable_type="category"
                refetch={refetch}
                closeModal={closeModal}
                modalIsOpen={modalIsOpen}
              />

              {data?.data.media.length > 0 &&
                data?.data.media.map((media) => (
                  <div key={media.id} className="col-span-12">
                    <img src={media.url} alt={media.name} />
                  </div>
                ))}

              <div className="col-span-12">
                <button type="submit" className="ti-btn ti-btn-primary-full">
                  {updating ? "Updating..." : "Update"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingleCategory;
