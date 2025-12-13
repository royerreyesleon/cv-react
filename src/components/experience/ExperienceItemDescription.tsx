import { useTranslation } from 'react-i18next';
import { useApp } from '../../hooks/useApp';
import type { Experience } from '../../interfaces/experience.interface';
import { ExperienceItemBadge } from './ExperienceItemBadge';

type Props = {
  item: Experience;
};

export const ExperienceItemDescription = ({ item }: Props) => {
  const { lang } = useApp();
  const { t } = useTranslation();
  return (
    <div className="flex-grow-1">
      <h3 className="mb-0">
        {lang === 'es' ? item?.position_es : item?.position_en}{' '}
        {item?.is_remote ? '| ' + t('remote') : ''}
      </h3>
      <div className="subheading mb-3">
        {item.website ? (
          <a href={item?.website} target="_blank" className="text-decoration-none text-muted">
            {item?.company}

            {(item.department_es || item.department_en) && (
              <span> &#8594; {lang === 'es' ? item?.department_es : item?.department_en}</span>
            )}
          </a>
        ) : (
          <span>{item?.company}</span>
        )}
      </div>
      <p
        dangerouslySetInnerHTML={{
          __html: lang === 'es' ? (item.description_es ?? '') : (item.description_en ?? ''),
        }}
      ></p>

      <div className="small">
        {item.show_tools && item.tools.length > 0 && (
          <ExperienceItemBadge items={item.tools} type="tools" />
        )}
        {item.show_attitudes && item.attitudes.length > 0 && (
          <ExperienceItemBadge items={item.attitudes} type="attitudes" />
        )}
        {item.show_aptitudes && item.aptitudes.length > 0 && (
          <ExperienceItemBadge items={item.aptitudes} type="aptitudes" />
        )}
      </div>
    </div>
  );
};
