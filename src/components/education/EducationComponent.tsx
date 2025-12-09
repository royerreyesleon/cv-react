import { useTranslation } from 'react-i18next';
import { EducationItem } from './EducationItem';
import { useApp } from '../../hooks/useApp';
import { useEducationQuery } from '../../hooks/useEducationQuery';
import { RingLoader } from 'react-spinners';

export const EducationComponent = () => {
  const { t } = useTranslation();
  const { query: educationQuery } = useEducationQuery();
  const { loaderCssColor, loaderCssOverride } = useApp();
  return (
    <section className="resume-section" id="education">
      <div className="resume-section-content">
        <h2 className="mb-5">{t('education')}</h2>

        {educationQuery.isLoading ? (
          <RingLoader color={loaderCssColor} cssOverride={loaderCssOverride} />
        ) : (
          educationQuery.data?.data.map((item) => (
            <EducationItem
              key={item.id}
              item={item}
              className="d-flex flex-column flex-md-row justify-content-between mb-5"
              data-aos="flip-down"
            />
          ))
        )}
      </div>
    </section>
  );
};
