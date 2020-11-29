import axios from 'axios';

import config from '../../config';
import store from '../../store/store';

interface ProductsResponse {
  results: [];
  offset: number;
}

export const getProducts = async (filters: { [key: string]: string }) => {
  const state = store.getState();
  const baseURL = `${config.ct.api}/${config.ct.auth.projectKey}/product-projections/search`;
  const headerConfig = `Bearer ${state.token.access_token}`;

  const objToUrl = Object.keys(filters)
    .map(key => `${key}=${filters[key]}`)
    .join('&');

  const URL = `${baseURL}?limit=75&${objToUrl}`;
  const response = await axios.get<ProductsResponse>(`${URL}`, {
    headers: { Authorization: headerConfig },
  });
  return response;
};
