import type { Education } from '../interfaces/education.interface';
import http from './httpClient';

const _endpoint: string = 'education';

async function getAll(params?: unknown) {
  return await http.get<Education[]>(`/${_endpoint}`, {
    params,
  });
}

export default {
  getAll,
};
