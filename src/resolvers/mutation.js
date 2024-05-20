import axios from "axios";

const backendUrl = "https://printlabapi.devtaijul.com/api/v1";

export const updateMediaMutation = async ({ variables, media_id }) =>
  axios
    .put(`${backendUrl}/media/${media_id}`, variables)
    .then((res) => res.data);

export const addCategoryMutation = async ({ variables }) =>
  axios.post(`${backendUrl}/categories`, variables).then((res) => res.data);

export const attachMediaMutation = async ({ variables }) =>
  axios.post(`${backendUrl}/attachment`, variables).then((res) => res.data);

export const updateCategoryMutation = async ({ variables, category_id }) =>
  axios
    .put(`${backendUrl}/categories/${category_id}`, variables)
    .then((res) => res.data);

export const addProductMutation = async ({ variables }) =>
  axios.post(`${backendUrl}/products`, variables).then((res) => res.data);

export const deleteCategoryMutation = async ({ category_id }) =>
  axios
    .delete(`${backendUrl}/categories/${category_id}`)
    .then((res) => res.data);

export const addAttributeMutation = async ({ variables }) =>
  axios.post(`${backendUrl}/attributes`, variables).then((res) => res.data);

export const addAttributeOptionMutation = async ({ variables }) =>
  axios
    .post(`${backendUrl}/attribute-options`, variables)
    .then((res) => res.data);
