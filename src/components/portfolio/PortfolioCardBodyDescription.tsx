import { useApp } from '../../hooks/useApp';
import type { Portfolio } from '../../interfaces/portfolio.interface';

type Props = {
  item: Portfolio;
};

export const PortfolioCardBodyDescription = ({ item }: Props) => {
  const { lang } = useApp();

  return (
    <p
      className="lead mb-5"
      dangerouslySetInnerHTML={{
        __html: (lang === 'es' ? item.description_es : item.description_en) || '',
      }}
    ></p>
  );
};
