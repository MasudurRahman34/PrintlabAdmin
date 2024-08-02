import axios from "axios";

const backendUrl =
  process.env.NEXT_PUBLIC_BACKEND_URL ||
  "https://printlabapi.devtaijul.com/api/v1";

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

export const addProductMutation = async ({ variables, token }) =>
  axios
    .post(`${backendUrl}/products`, variables, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);

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

export const updateDeliveryServiceMutation = async ({
  delivery_service_id,
  variables,
}) =>
  axios
    .put(`${backendUrl}/services/${delivery_service_id}`, variables)
    .then((res) => res.data);

export const createDeliveryServiceMutation = async ({ variables }) =>
  axios.post(`${backendUrl}/services`, variables).then((res) => res.data);

export const updateProductDeliveryServiceMutation = async ({
  product_id,
  variables,
}) =>
  axios
    .post(`${backendUrl}/product/${product_id}/services/delivery`, variables)
    .then((res) => res.data);

export const updateProductArtworkServiceMutation = async ({
  artwork_id,
  variables,
}) =>
  axios
    .put(`${backendUrl}/services/${artwork_id}`, variables)
    .then((res) => res.data);

export const deleteProductMutation = async ({ product_id, token }) =>
  axios.delete(`${backendUrl}/products/${product_id}`).then((res) => res.data);

export const deleteMediaMutation = async ({ media_id }) =>
  axios.delete(`${backendUrl}/media/${media_id}`).then((res) => res.data);

export const createFileCheckOptionMutation = async ({ variables, token }) =>
  axios
    .post(`${backendUrl}/file-check-options`, variables, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);

export const connectFileCheckOptionAttributeOptionMutation = async ({
  variables,
  token,
}) =>
  axios
    .post(`${backendUrl}/file-checks`, variables, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);

export const disconnectFileCheckOptionAttributeOptionMutation = async ({
  id,
  token,
}) =>
  axios
    .delete(`${backendUrl}/file-checks/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);

export const addBannerMutation = async ({ variables, token }) =>
  axios
    .post(`${backendUrl}/banners`, variables, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);

export const updateOrderItemStatus = async ({
  order_item_id,
  variables,
  token,
}) =>
  axios
    .put(`${backendUrl}/order-items/${order_item_id}`, variables, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);

export const deleteBannerMutation = async ({ banner_id, token }) =>
  axios
    .delete(`${backendUrl}/banners/${banner_id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);
