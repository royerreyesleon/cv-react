import type { Portfolio } from '../../interfaces/portfolio.interface';

type Props = {
  item: Portfolio;
};

export const PortfolioCardBodyLink = ({ item }: Props) => {
  return (
    <p className="mb-3">
      <a href={item.link || '#'} target="_blank" className="text-decoration-none">
        {item.link}
      </a>
    </p>
  );
};
