import React, { useState } from "react";

const ArtworkTabNav = ({ row, activeArtwork, setActiveArtwork }) => {
  const [showId, setShowId] = useState(row.id);

  return (
    <>
      <div
        key={row.id}
        className={`flex items-center px-3 cursor-pointer rounded-sm hover:text-white justify-between py-2 mt-2 border-b border-defaultborder hover:bg-primary ${
          activeArtwork?.id === row?.id && "bg-primary text-white"
        }`}
      >
        <div
          className="flex-1"
          onClick={() => {
            setActiveArtwork(row);
          }}
        >
          <p className="text-sm font-semibold">{row.title}</p>
        </div>
        {row?.children.length > 0 && (
          <button
            type="button"
            aria-label="button"
            onClick={() => {
              if (showId === row.id) {
                setShowId(null);
              } else {
                setShowId(row.id);
              }
            }}
          >
            {
              showId === row.id ? (
                <i className="ri-arrow-up-s-line"></i>
              ) : (
                <i className="ri-arrow-down-s-line"></i>
              ) // This is the issue
            }
          </button>
        )}
      </div>
      {row?.children.length > 0 &&
        row?.children.map((child) => (
          <div
            key={child.id}
            className={` flex items-center px-3 cursor-pointer rounded-sm hover:text-white justify-between py-2 mt-2 border-b border-defaultborder hover:bg-primary ${
              activeArtwork?.id === child.id && "bg-primary text-white"
            } ${showId === row.id ? "flex " : "hidden"}`}
            onClick={() => {
              setActiveArtwork(child);
            }}
          >
            <p className="text-sm font-semibold">__{child.title}</p>
          </div>
        ))}
    </>
  );
};

export default ArtworkTabNav;
