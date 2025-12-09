import type { Portfolio } from '../../interfaces/portfolio.interface';
import { PortfolioCardBodyLink } from './PortfolioCardBodyLink';
import { PortfolioCardBodyDescription } from './PortfolioCardBodyDescription';
import { PortfolioCardBodyCategories } from './PortfolioCardBodyCategories';
import { PortfolioCardBodyFotorama } from './PortfolioCardBodyFotorama';

type Props = {
  item: Portfolio;
};

export const PortfolioCardBody = ({ item }: Props) => {
  return (
    <div className="card-body">
      {item.link && <PortfolioCardBodyLink item={item} />}

      {(item.description_es || item.description_en) && <PortfolioCardBodyDescription item={item} />}

      {(item.databases || item.languages || item.tools) && (
        <PortfolioCardBodyCategories item={item} />
      )}

      <PortfolioCardBodyFotorama images={item.portfolio_files || []} />
    </div>
  );
};
