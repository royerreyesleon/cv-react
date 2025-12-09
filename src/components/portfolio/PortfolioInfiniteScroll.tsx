import InfiniteScroll from 'react-infinite-scroll-component';
import { usePortfolioQuery } from '../../hooks/usePortfolioQuery';
import { PortfolioCard } from './PortfolioCard';
import { useTranslation } from 'react-i18next';

export const PortfolioInfiniteScroll = () => {
  const {
    query: { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage },
  } = usePortfolioQuery();

  const { t } = useTranslation();

  if (isLoading) return <p>{t('loading')}</p>;

  // Unimos todas las páginas
  const items = data?.pages.flatMap((page) => page.data) ?? [];

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<p style={{ textAlign: 'center' }}>{t('loading-more')}</p>}
      endMessage={<p style={{ textAlign: 'center' }}>{t('no-more-results')}</p>}
    >
      {items.map((item) => (
        <PortfolioCard key={item.id} item={item} />
      ))}
      {isFetchingNextPage && <p>{t('loading')}</p>}
    </InfiniteScroll>
  );
};
