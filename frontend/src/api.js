import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';

export const fetchProducts = () => {
    return axios.get(`${API_URL}/products`);
};

export const addProduct = (products) => {
    return axios.post(`${API_URL}/products`, products);
};

export const removeProduct = (id) => {
    return axios.delete(`${API_URL}/products/${id}`);
};

export const updateProduct = (id, products) => {
    return axios.put(`${API_URL}/products/${id}`, products);
};
