import { useTranslation } from 'react-i18next';
import { PortfolioInfiniteScroll } from './PortfolioInfiniteScroll';

export const PortfolioComponent = () => {
  const { t } = useTranslation();
  return (
    <section className="resume-section" id="portfolio">
      <div className="resume-section-content">
        <h2 className="mb-5">{t('portfolio')}</h2>
        <PortfolioInfiniteScroll />
      </div>
    </section>
  );
};
