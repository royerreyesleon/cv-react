import type { Experience } from '../interfaces/experience.interface';
import http from './httpClient';

const _endpoint: string = 'experience';

async function getAll(params?: unknown) {
  return await http.get<Experience[]>(`/${_endpoint}`, {
    params,
  });
}

export default {
  getAll,
};
