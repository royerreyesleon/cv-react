import { useQuery } from '@tanstack/react-query';
import { API } from '../services';

export const useExperienceQuery = () => {
  const query = useQuery({
    queryKey: ['experience'],
    queryFn: () =>
      API.experienceService.getAll({
        select:
          'id,company,department_en,department_es,description_en,description_es,end_date,position_en,position_es,public,start_date,website,is_remote,tools,show_tools,attitudes,show_attitudes,aptitudes,show_aptitudes,categories(name_es,name_en)',
        // order: 'start_date.desc',
        order: 'order.desc',
        status: 'eq.true',
      }),
  });

  return { query };
};
