import axios from 'axios';

import { ProductsAPIResponse } from '../types/productsApi';
import config from '../config';

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
  const response = await axios.get<ProductsAPIResponse>(`${URL}`, {
    headers: { Authorization: headerConfig },
  });
  return response;
};
