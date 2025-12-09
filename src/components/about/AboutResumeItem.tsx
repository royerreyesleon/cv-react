import { useTranslation } from 'react-i18next';

import type { About } from '../../interfaces/about.interface';

import { useApp } from '../../hooks/useApp';
import { useHelpers } from '../../hooks/useHelpers';

type Props = {
  item: About;
};

export const AboutResumeItem = ({ item }: Props) => {
  const { lang } = useApp();
  const { t } = useTranslation();
  const { calculateAge } = useHelpers();

  return (
    <>
      <h3 className="mb-0">{item.name}</h3>
      <div className="subheading mb-5">
        {calculateAge(item.birth)} {t('age')} · {item.address} · {item.phone} ·{' '}
        <span className="text-lowercase">{item.email}</span>
      </div>
      <p
        className="lead mb-5"
        dangerouslySetInnerHTML={{
          __html: lang === 'es' ? item.description_es : item.description_en,
        }}
      ></p>
    </>
  );
};
