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

export const updateProductMutation = async ({ variables, product_id }) =>
  axios
    .put(`${backendUrl}/products/${product_id}`, variables)
    .then((res) => res.data);
export const updateArtworkMutation = async ({ variables, product_id }) =>
  axios
    .put(`${backendUrl}/product/artwork/${product_id}`, variables)
    .then((res) => res.data);

export const createArtworkMutation = async ({ variables }) =>
  axios
    .post(`${backendUrl}/product/artwork`, variables)
    .then((res) => res.data);

export const saveAttributeMutation = async ({ variables, product_id }) => {
  return axios
    .post(`${backendUrl}/product/${product_id}/attribute-options`, variables)
    .then((res) => res.data);
};

export const productAttributeOptionMutation = async ({
  variables,
  product_id,
}) =>
  axios
    .post(`${backendUrl}/product/${product_id}/attribute-options`, variables)
    .then((res) => res.data);

export const getCombinationTableMutation = async ({ product_id, variables }) =>
  axios
    .post(`${backendUrl}/product/${product_id}/combinations`, variables)
    .then((res) => res.data);

export const updateCombinationMutation = async ({
  combination_id,
  variables,
}) =>
  axios
    .put(`${backendUrl}/combinations/${combination_id}`, variables)
    .then((res) => res.data);

export const createSpecificationMutation = async ({ variables }) =>
  axios
    .post(`${backendUrl}/product/specification`, variables)
    .then((res) => res.data);

export const updateSpecificationMutation = async ({
  variables,
  specification_id,
}) =>
  axios
    .put(`${backendUrl}/product/specification/${specification_id}`, variables)
    .then((res) => res.data);

export const saveProductCategoryMutation = async ({ variables, product_id }) =>
  axios.post(`${backendUrl}/product/${product_id}/categories`, variables);

export const deleteMediaAttachmentMutation = async ({ attachmentId }) =>
  axios
    .delete(`${backendUrl}/attachment/${attachmentId}`)
    .then((res) => res.data);
export const deleteAttributeOptionMutation = async ({ attribute_option_id }) =>
  axios
    .delete(`${backendUrl}/attribute-options/${attribute_option_id}`)
    .then((res) => res.data);

export const deleteAttributeMutation = async ({ attribute_id }) =>
  axios
    .delete(`${backendUrl}/attributes/${attribute_id}`)
    .then((res) => res.data);

export const updateAttributeMutation = async ({ attribute_id, variables }) =>
  axios
    .put(`${backendUrl}/attributes/${attribute_id}`, variables)
    .then((res) => res.data);

export const updateAttributeOptionMutation = async ({
  attribute_option_id,
  variables,
}) =>
  axios
    .put(`${backendUrl}/attribute-options/${attribute_option_id}`, variables)
    .then((res) => res.data);
