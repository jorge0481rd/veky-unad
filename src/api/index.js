import axios from "axios";

const API_URL = "http://localhost:5000";

const apiCall = async (url, method = "GET", body = null) => {
  const options = {
    method,
    url: `${API_URL}${url}`,
    headers: { "Content-Type": "application/json" },
    data: body,
  };

  try {
    const response = await axios(options);
    return response.data;
  } catch (error) {
    throw new Error(`Error: ${error.response?.statusText || error.message}`);
  }
};

export const getProducts = () => apiCall("/products");
export const getRecommendations = () => apiCall("/recommendations");
export const getAccount = () => apiCall("/account");
export const getCart = () => apiCall("/cart");
export const getContact = () => apiCall("/contact");
