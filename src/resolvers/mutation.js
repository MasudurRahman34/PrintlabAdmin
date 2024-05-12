import axios from "axios";

const backendUrl = "https://printlabapi.devtaijul.com/api/v1";

export const updateMediaMutation = async ({ variables, media_id }) =>
  axios
    .put(`${backendUrl}/media/${media_id}`, variables)
    .then((res) => res.data);
