import { useQuery } from '@tanstack/react-query';
import { API } from '../services';

export const useSocialNetworkQuery = () => {
  const query = useQuery({
    queryKey: ['social-networks'],
    queryFn: () =>
      API.socialNetworkService.getAll({
        select: 'id,icon,link',
        status: 'eq.true',
      }),
  });

  return { query };
};
