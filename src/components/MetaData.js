import Head from "next/head";
import React from "react";

const MetaData = ({ title, description }) => {
  return (
    <Head>
      <title>weareprintlab {title && `- ${title}`}</title>
      <meta
        name="description"
        content={`
            ${
              description
                ? description
                : "Weareprintlab is a platform that allows you to create and sell custom print-on-demand products."
            } 
        `}
      />
    </Head>
  );
};

export default MetaData;
