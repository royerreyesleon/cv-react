import { useQuery } from '@tanstack/react-query';
import { API } from '../services';

export const useAboutQuery = () => {
  const query = useQuery({
    queryKey: ['about'],
    queryFn: () =>
      API.aboutService.getAll({
        select: 'id,address,birth,curp,description_en,description_es,email,name,phone,rfc',
        status: 'eq.true',
      }),
  });

  return { query };
};
