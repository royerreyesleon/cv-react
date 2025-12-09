import { useApp } from '../../hooks/useApp';
import { useHelpers } from '../../hooks/useHelpers';
import type { Portfolio } from '../../interfaces/portfolio.interface';

type Props = {
  item: Portfolio;
};

export const PortfolioCardHeader = ({ item }: Props) => {
  const { lang } = useApp();
  const { getDateByFormat } = useHelpers();

  return (
    <div className="card-header bg-transparent">
      <b className="h3">{lang === 'es' ? item.name_es : item.name_en}</b>

      <span className="text-primary float-end mt-2">
        <span className="text-capitalize">
          {getDateByFormat({ date: item.start_date || '', locale: lang })}
        </span>{' '}
        -{' '}
        <span className="text-capitalize">
          {getDateByFormat({ date: item.end_date || '', locale: lang })}
        </span>
      </span>
    </div>
  );
};
