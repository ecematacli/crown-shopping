import axios from 'axios';

import config from '../config';

export interface Product {
  categories: { id: string; typeId: string }[];
  createdAt: Date;
  lastModifiedAt: Date;
  id: string;
  masterVariant: {
    id: number;
    images: { url: string; dimensions: { w: number; h: number } }[];
  };
}
export interface ProductsResponse {
  results: Product[];
  limit: number;
  total: number;
  count: number;
  offset: number;
}

export const getProducts = async (
  token: string,
  filters: { [key: string]: string }
) => {
  const baseURL = `${config.ct.api}/${config.ct.auth.projectKey}/product-projections/search`;
  const headerConfig = `Bearer ${token}`;

  const objToUrl = Object.keys(filters)
    .map(key => `${key}=${filters[key]}`)
    .join('&');

  const URL = `${baseURL}?limit=20&${objToUrl}`;
  const response = await axios.get<ProductsResponse>(`${URL}`, {
    headers: { Authorization: headerConfig },
  });
  return response;
};
