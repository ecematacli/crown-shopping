import { Method } from 'axios';
import api from './axios';

interface Props<R> {
  url: string;
  method?: Method;
  onSuccess?: (data: R) => void;
  onError?: (e: any) => void;
  payload?: any;
  headers?: { [key: string]: string };
}

export const makeRequest: <R>({
  url,
  method,
  onSuccess,
  onError,
  payload,
  headers,
}: Props<R>) => Promise<[R | null, any]> = async ({
  url,
  method = 'GET',
  payload,
  onError,
  onSuccess,
  headers,
}) => {
  try {
    const { data } = await api({ url, method, data: payload, headers });
    onSuccess && onSuccess(data);
    return [data, null];
  } catch (e) {
    onError && onError(e.response?.data || e);
    return [null, e.response];
  }
};
