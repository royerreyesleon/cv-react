import type { Portfolio } from '../../interfaces/portfolio.interface';
import { PortfolioCardBodyCategory } from './PortfolioCardBodyCategory';

type Props = {
  item: Portfolio;
};

export const PortfolioCardBodyCategories = ({ item }: Props) => {
  return (
    <div className="container mb-3">
      <div className="row justify-content-around small">
        {item.databases && (
          <PortfolioCardBodyCategory
            category={item.databases}
            icon="fa fa-database"
            title="databases"
          />
        )}

        {item.languages && (
          <PortfolioCardBodyCategory
            category={item.languages}
            icon="fa fa-code"
            title="languages"
          />
        )}

        {item.tools && (
          <PortfolioCardBodyCategory category={item.tools} icon="fa fa-tools" title="tools" />
        )}
      </div>
    </div>
  );
};
