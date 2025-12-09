import { useQuery } from '@tanstack/react-query';
import { API } from '../services';

export const useSkillQuery = () => {
  const query = useQuery({
    queryKey: ['skills'],
    queryFn: () =>
      API.categoryService.getAll({
        select: `id,name_es,name_en,skills(id,icon,name_es,name_en,percentage)`,
        order: 'order.asc',
        'skills.order': 'percentage.desc',
        status: 'eq.true',
        type_id: 'eq.1',
      }),
  });

  return { query };
};
