import type { Portfolio } from '../interfaces/portfolio.interface';
import http from './httpClient';

const _endpoint: string = 'portfolio';

async function getAll(params?: unknown) {
  return await http.get<Portfolio[]>(`/${_endpoint}`, {
    params,
  });
}

export default {
  getAll,
};
