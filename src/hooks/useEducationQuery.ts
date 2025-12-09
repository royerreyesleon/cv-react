import { useQuery } from '@tanstack/react-query';
import { API } from '../services';

export const useEducationQuery = () => {
  const query = useQuery({
    queryKey: ['education'],
    queryFn: () =>
      API.educationService.getAll({
        select: 'id,description_en,description_es,end_date,link,name_en,name_es,start_date,license',
        order: 'start_date.desc',
        status: 'eq.true',
      }),
  });

  return { query };
};
