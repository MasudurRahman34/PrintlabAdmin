import axios from "axios";

const backendUrl = "https://printlabapi.devtaijul.com/api/v1";

export const getAllMedia = async () =>
  axios.get(`${backendUrl}/media`).then((res) => res.data);

export const getMediaById = async (id) =>
  axios.get(`${backendUrl}/media/${id}`).then((res) => res.data);

export const getAllCategories = async () =>
await  axios.get(`${backendUrl}/categories`).then((res) => res.data);

export const getSingleCategoryQuery = async (slug) =>
  axios.get(`${backendUrl}/categories/${slug}`).then((res) => res.data);

export const getAllProducts = async () =>
await axios.get(`${backendUrl}/products`).then((res) => res.data);

export const getAllAttributeQuery = async () =>
  axios.get(`${backendUrl}/attributes`).then((res) => res.data);


export const getSingleProducts = async (slug) =>
    axios.get(`${backendUrl}/products/${slug}`).then((res) => res.data);
  