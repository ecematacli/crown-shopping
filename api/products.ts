import axiosInstance from './axios';
import { ProductsAPIResponse } from '../types/products';

export const getProducts = async (
  token: string,
  filters: { [key: string]: string }
) => {
  const objToUrl = Object.keys(filters)
    .map(key => `${key}=${filters[key]}`)
    .join('&');

  const URL = `/product-projections/search?limit=20&${objToUrl}`;

  const response = await axiosInstance.get<ProductsAPIResponse>(URL, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return response;
};
