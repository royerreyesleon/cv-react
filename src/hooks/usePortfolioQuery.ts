import { useInfiniteQuery } from '@tanstack/react-query';
import { API } from '../services';
import type { Portfolio } from '../interfaces/portfolio.interface';

const LIMIT = 3;

type Page = {
  data: Portfolio[];
  nextPage?: number;
};

export const usePortfolioQuery = () => {
  const query = useInfiniteQuery<Page, Error>({
    queryKey: ['portfolio'],
    initialPageParam: 0,

    queryFn: async ({ pageParam = 0 }): Promise<Page> => {
      const offset = Number(pageParam) * LIMIT;
      const { data } = await API.portfolioService.getAll({
        select: '*,portfolio_files(*),categories!inner(*)',
        'categories.id': `in.(6,7,8)`,
        order: 'category_id.asc,start_date.desc,id.desc',
        'portfolio_files.order': 'order.asc',
        offset,
        limit: LIMIT,
      });

      return {
        data,
        nextPage: data.length === LIMIT ? Number(pageParam) + 1 : undefined,
      };
    },

    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  return { query };
};
