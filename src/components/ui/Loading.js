import Loader from "./Loader";
import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-40 md:min-h-60 lg:min-h-96 ">
      <Loader />
    </div>
  );
};

export default Loading;
