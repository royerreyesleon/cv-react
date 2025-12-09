import { useTranslation } from 'react-i18next';

type Props = {
  category: { item: string }[];
  icon: string;
  title: string;
};

export const PortfolioCardBodyCategory = ({ category, icon, title }: Props) => {
  const { t } = useTranslation();
  return (
    <div className="col-md-4 col-sm-12 mb-3">
      <div className="subheading">
        <i className={icon}></i> {t(title)}
      </div>
      <ul className="fa-ul">
        {category.map((item, index) => (
          <li key={index}>{item.item}</li>
        ))}
      </ul>
    </div>
  );
};
