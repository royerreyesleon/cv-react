import { useTranslation } from 'react-i18next';
import { SkillsCategory } from './SkillsCategory';
import { useSkillQuery } from '../../hooks/useSkillQuery';
import { useApp } from '../../hooks/useApp';
import { RingLoader } from 'react-spinners';
import { SkillsIcon } from './SkillsIcon';

export const SkillsComponent = () => {
  const { t } = useTranslation();
  const { query: skillQuery } = useSkillQuery();
  const { loaderCssColor, loaderCssOverride } = useApp();

  return (
    <section className="resume-section" id="skills">
      <div className="resume-section-content">
        <h2 className="mb-5">{t('skills')}</h2>
        <div className="row">
          <div className="col-md-6 mb-5">
            <div className="subheading mb-3">{t('skills-subtitle')}</div>
            <SkillsIcon />
          </div>

          {skillQuery.isLoading ? (
            <RingLoader color={loaderCssColor} cssOverride={loaderCssOverride} />
          ) : (
            skillQuery.data?.data.map((item, index) => {
              return (
                <SkillsCategory
                  key={item.id}
                  category={item}
                  className="col-md-3 mb-5"
                  data-aos="flip-down"
                  data-aos-delay={`${index * 100}`}
                />
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};
