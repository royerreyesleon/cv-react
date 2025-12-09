import type { SocialNetwork } from '../interfaces/social-network.interface';
import http from './httpClient';

const _endpoint: string = 'social_networks';

async function getAll(params?: unknown) {
  return await http.get<SocialNetwork[]>(`/${_endpoint}`, {
    params,
  });
}

export default {
  getAll,
};
