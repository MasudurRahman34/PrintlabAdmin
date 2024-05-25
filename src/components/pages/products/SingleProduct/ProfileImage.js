import MediaAttach from "@/components/MediaAttach";
import React from "react";

const ProfileImage = ({ data, isLoading, isError, error, refetch }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [mediaIds, setMediaIds] = React.useState([]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div class="text-gray-800 !py-3 !px-4 dark:text-gray-200">
      <div className="text-sm md:text-base font-normal text-[#2271B1] underline">
        {" "}
        <button onClick={openModal}>Add Product Image Gallery </button>
        <div>
          {data?.media
            .filter((media) => media.is_profile === 1)
            .map((media) => (
              <div key={media.id} className="flex items-center mt-1">
                <img
                  src={media.url}
                  alt={media.name}
                  className="object-cover w-20 h-20"
                />
              </div>
            ))}
        </div>
        <MediaAttach
          selectedMedia={mediaIds}
          multiple={false}
          attachmentable_id={data?.id}
          is_profile={true}
          attachmentable_type="product"
          refetch={refetch}
          modalIsOpen={isModalOpen}
          closeModal={closeModal}
        />
      </div>
    </div>
  );
};

export default ProfileImage;
