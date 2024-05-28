import React from "react";

const CombinationTable = ({ table_state, isTableStateLoading }) => {
  return (
    <div>
      <div>
        <div className="flex items-center justify-between">
          <p>Do you want to make configure your products?</p>
          <button
            type="button"
            class="ti-btn ti-btn-primary-full ti-btn-wave"
            disabled={isPending}
            onClick={handleSave}
          >
            {isPending ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CombinationTable;
