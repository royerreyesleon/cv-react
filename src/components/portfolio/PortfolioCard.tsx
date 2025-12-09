import type { Portfolio } from '../../interfaces/portfolio.interface';
import { PortfolioCardBody } from './PortfolioCardBody';
import { PortfolioCardHeader } from './PortfolioCardHeader';

type Props = {
  item: Portfolio;
};
export const PortfolioCard = ({ item }: Props) => {
  return (
    <div className="card mt-5 mb-5" data-aos="flip-down">
      <PortfolioCardHeader item={item} />
      <PortfolioCardBody item={item} />
    </div>
  );
};
