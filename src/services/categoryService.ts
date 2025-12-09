import type { Category } from '../interfaces/category.interface';
import http from './httpClient';

const _endpoint: string = 'categories';

async function getAll(params?: unknown) {
  return await http.get<Category[]>(`/${_endpoint}`, {
    params,
  });
}

export default {
  getAll,
};
