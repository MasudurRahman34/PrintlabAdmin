import { useAuth } from "@/hooks/useAuth";
import useToastMessage from "@/hooks/useToastMessage";
import { addBannerMutation } from "@/resolvers/mutation";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";

const BannerImg = ({ refetch }) => {
  const showToastMessage = useToastMessage();
  const { session } = useAuth();
  const [open, setopen] = useState(false);

  const { mutate, isPending } = useMutation({
    mutationKey: "add-banner",
    mutationFn: addBannerMutation,
  });

  const [addBannerState, setAddBannerState] = useState({
    title: "",
    description: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    setAddBannerState({
      ...addBannerState,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const { title, description, imageUrl } = addBannerState;
    if (!title || !description || !imageUrl) {
      return toast.error("Please fill all the fields");
    }

    const variables = {
      title,
      description,
      imageUrl,
    };

    mutate(
      {
        variables,
        token: session?.token,
      },
      {
        onSuccess: () => {
          toast.success("Banner added successfully");
          setAddBannerState({
            title: "",
            description: "",
            imageUrl: "",
          });
          refetch();
        },
        onError: (error) => {
          showToastMessage(error);
        },
      }
    );
  };

  return (
    <div>
      <div className="grid grid-cols-12 gap-6 mb-5 ">
        <div className="col-span-3">
          <button
            type="button"
            className=" ti-btn ti-btn-primary-full ti-btn-wave"
            onClick={() => setopen(!open)}
          >
            {open ? (
              <span className="me-2">Hide Add Banner Form</span>
            ) : (
              <span className="me-2">Show Add Banner Form</span>
            )}
          </button>
        </div>
      </div>
      {open && (
        <div className="p-4 box">
          <form onSubmit={onSubmit}>
            <div className="">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  onChange={handleChange}
                  value={addBannerState.title}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  type="text"
                  name="description"
                  onChange={handleChange}
                  value={addBannerState.description}
                  id="description"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Image Url
                </label>
                <input
                  type="text"
                  name="imageUrl"
                  id="imageUrl"
                  onChange={handleChange}
                  value={addBannerState.imageUrl}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isPending}
                  className="m-2 ti-btn ti-btn-primary-full ti-btn-loader"
                >
                  <span className="me-2">Add Banner</span>
                  {isPending && (
                    <span className="loading">
                      <i className="ri-loader-2-fill text-[1rem] animate-spin"></i>
                    </span>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default BannerImg;
