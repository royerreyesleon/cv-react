import type { AxiosResponse } from 'axios';
import type { About } from '../interfaces/about.interface';
import http from './httpClient';

const _endpoint: string = 'about';

async function getAll(params?: unknown): Promise<AxiosResponse<About[]>> {
  return await http.get<About[]>(`/${_endpoint}`, {
    params,
  });
}

export default {
  getAll,
};
