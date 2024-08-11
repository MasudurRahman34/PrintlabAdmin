import Error401 from "@/components/ErrorPage/Error401";
import MetaData from "@/components/MetaData";

const error = () => {
  return (
    <div>
      <MetaData title="Error 401" />
      <Error401 />
    </div>
  );
};

export default error;
