import axios from "axios";

const backendUrl = "https://printlabapi.devtaijul.com/api/v1";

export const getAllMedia = async () =>
  axios.get(`${backendUrl}/media`).then((res) => res.data);
