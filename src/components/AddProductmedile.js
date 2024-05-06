

const AddProductmedile = () => {
    return (
        <div>
        <div className="flex gap-4">
          <div className="w-full">
            <label className="text-base mb-2 font-semibold text-black">
              Title
            </label>
            <input type="text" className="block w-full rounded-md" />
          </div>
          <div className="w-full">
            <label className="text-base mb-2 font-semibold text-black">
              Slug
            </label>
            <input type="text" className="block w-full rounded-md" />
          </div>
        </div>
        <div className="mt-2">
          <label className="text-base mb-2 font-semibold text-black">
            Description
          </label>
          <textarea
            class="form-control w-full !rounded-md"
            id="product-description-add"
            rows="12"
          ></textarea>
        </div>
        <div className="flex justify-between items-center">
          <div class="box-body">
            <div>
              <label class="block">
                <span class="sr-only">Choose Profile photo</span>
                <input
                  type="file"
                  class="block w-full border border-gray-200 focus:shadow-sm dark:focus:shadow-white/10 rounded-sm text-sm focus:z-10 focus:outline-0 focus:border-gray-200 dark:focus:border-white/10 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50
                                      file:me-4 file:py-2 file:px-4
                                      file:rounded-s-sm file:border-0
                                      file:text-sm file:font-semibold
                                      file:bg-primary file:text-white
                                      hover:file:bg-primary focus-visible:outline-none
                                    "
                />
              </label>
            </div>
          </div>
          <button className="text-base font-medium text-white bg-[#845ADF] px-5 py-2 rounded-md">
            Uplaod
          </button>
        </div>
        </div>
    );
};

export default AddProductmedile;