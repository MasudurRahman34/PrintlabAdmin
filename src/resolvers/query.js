import axios from "axios";

const backendUrl =
  process.env.NEXT_PUBLIC_BACKEND_URL ||
  "https://printlabapi.devtaijul.com/api/v1";

export const getAllMedia = async ({ current_page = 1 }) =>
  axios.get(`${backendUrl}/media?page=${current_page}`).then((res) => res.data);

export const getMediaById = async (id) =>
  axios.get(`${backendUrl}/media/${id}`).then((res) => res.data);

export const getAllCategories = async ({ page = 1 }) =>
  await axios
    .get(`${backendUrl}/categories?page=${page}`)
    .then((res) => res.data);

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

export const getProductDeliveryServiceQuery = async (product_id) =>
  axios
    .get(`${backendUrl}/product/${product_id}/services/delivery`)
    .then((res) => res.data);

export const getProductArtworkServiceQuery = async () =>
  axios.get(`${backendUrl}/services/artworks`).then((res) => res.data);

export const getAllAttributeOptionsQuery = async ({ token }) =>
  axios
    .get(`${backendUrl}/attribute-options`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);

export const getAllFileCheckOptionsQuery = async ({ token }) =>
  axios
    .get(`${backendUrl}/file-check-options`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);

export const getAllConnectedFileCheckOptionsQuery = async ({ token }) =>
  axios
    .get(`${backendUrl}/file-checks`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);

export const getAllOrders = async ({ page = 1, token, start_date, end_date }) =>
  axios
    .get(
      `${backendUrl}/orders?page=${page}&start_date=${start_date}&end_date=${end_date}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => res.data);

export const getAllOrderItems = async ({
  page = 1,
  token,
  start_date,
  end_date,
}) =>
  axios
    .get(
      `${backendUrl}/order-items?page=${page}&start_date=${start_date}&end_date=${end_date}`,
      { headers: { Authorization: `Bearer ${token}` } }
    )
    .then((res) => res.data);

export const getAllCarts = async ({ page = 1, token, start_date, end_date }) =>
  axios
    .get(
      `${backendUrl}/carts?page=${page}&start_date=${start_date}&end_date=${end_date}`,
      { headers: { Authorization: `Bearer ${token}` } }
    )
    .then((res) => res.data);

export const getOrderById = async ({ id, token }) =>
  axios
    .get(`${backendUrl}/orders/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);

export const getOrderItemById = async ({ id, token }) =>
  axios
    .get(`${backendUrl}/order-items/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);

export const getBannersQuery = async ({ token }) =>
  axios
    .get(`${backendUrl}/banners`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);

export const getQuantityOptionsQuery = async ({ product_id }) =>
  axios
    .get(`${backendUrl}/quantity-options/product/${product_id}`)
    .then((res) => res.data);

export const getAllRefunds = async ({ page = 1, token }) =>
  axios
    .get(`${backendUrl}/refund?page=${page}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);

export const getAllCustomers = async ({ page = 1, token }) =>
  axios
    .get(`${backendUrl}/customers?page=${page}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);

export const getTopListForProductQuery = async ({ token }) =>
  axios
    .get(`${backendUrl}/top-listing`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);

export const getSingleTopListForProductQuery = async ({ id, token }) => {
  return axios
    .get(`${backendUrl}/top-listing/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);
};

export const getAllProductsWithoutPageQuery = async ({ token }) =>
  axios
    .get(`${backendUrl}/products?show_per_page=1000`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);

export const getAllCategoriesWithoutPageQuery = async ({ token }) =>
  axios
    .get(`${backendUrl}/categories?show_per_page=1000`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);
