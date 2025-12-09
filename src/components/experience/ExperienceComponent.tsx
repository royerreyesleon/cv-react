import { RingLoader } from 'react-spinners';

import { useExperienceQuery } from '../../hooks/useExperienceQuery';
import { useApp } from '../../hooks/useApp';

import { useTranslation } from 'react-i18next';
import { ExperienceItem } from './ExperienceItem';

export const ExperienceComponent = () => {
  const { t } = useTranslation();
  const { query: experienceQuery } = useExperienceQuery();
  const { loaderCssColor, loaderCssOverride } = useApp();
  return (
    <>
      <section className="resume-section" id="experience">
        <div className="resume-section-content">
          <h2 className="mb-5">{t('experience')}</h2>

          {experienceQuery.isLoading ? (
            <RingLoader color={loaderCssColor} cssOverride={loaderCssOverride} />
          ) : (
            experienceQuery.data?.data.map((item) => (
              <ExperienceItem
                key={item.id}
                item={item}
                className="d-flex flex-column flex-md-row justify-content-between mb-5"
                data-aos="flip-down"
              />
            ))
          )}
        </div>
      </section>
    </>
  );
};
