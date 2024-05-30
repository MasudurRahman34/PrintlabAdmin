import axios from "axios";

const backendUrl = "https://printlabapi.devtaijul.com/api/v1";

export const getAllMedia = async () =>
  axios.get(`${backendUrl}/media`).then((res) => res.data);

export const getMediaById = async (id) =>
  axios.get(`${backendUrl}/media/${id}`).then((res) => res.data);

export const getAllCategories = async () =>
  await axios.get(`${backendUrl}/categories`).then((res) => res.data);

export const getSingleCategoryQuery = async (slug) =>
  axios.get(`${backendUrl}/categories/${slug}`).then((res) => res.data);

export const getAllProducts = async ({ page = 1 }) =>
  await axios
    .get(`${backendUrl}/products?page=${page}`)
    .then((res) => res.data);

export const getAllAttributeQuery = async () =>
  axios.get(`${backendUrl}/attributes`).then((res) => res.data);

export const getSingleProductQuery = async (slug) =>
  axios.get(`${backendUrl}/products/${slug}`).then((res) => res.data);

export const getProductAttributeExistanceQuery = async (product_id) =>
  axios
    .get(`${backendUrl}/product/${product_id}/attribute-options`)
    .then((res) => res.data);

export const getProductCombinationQuery = async (product_id) =>
  axios
    .get(`${backendUrl}/product/${product_id}/combinations`)
    .then((res) => res.data);
export const getAllDeliveryServiceQuery = async () =>
  axios.get(`${backendUrl}/services/deliveries`).then((res) => res.data);
