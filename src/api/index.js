import axios from "axios";

const API_URL = "http://localhost:5000";
export const registerUser = async (email, password) => {
  try {
    const response = await axios.post(
      `${API_URL}/auth/register`,
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email,
      password,
    });
    const { token } = response.data;
    localStorage.setItem("token", token);
    return token;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getProducts = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_URL}/products`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const addProduct = async (name, price) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(
      `${API_URL}/products/add`,
      { name, price },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
