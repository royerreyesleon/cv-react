import { RingLoader } from 'react-spinners';

import { AboutResumeItem } from './AboutResumeItem';
import { AboutSocialNetwork } from './AboutSocialNetwork';

import { useAboutQuery } from '../../hooks/useAboutQuery';
import { useSocialNetworkQuery } from '../../hooks/useSocialNetworkQuery';
import { useApp } from '../../hooks/useApp';
import { useTranslation } from 'react-i18next';

export const AboutComponent = () => {
  const { query: aboutQuery } = useAboutQuery();
  const { query: socialNetworkQuery } = useSocialNetworkQuery();
  const { loaderCssColor, loaderCssOverride } = useApp();
  const { t } = useTranslation();

  return (
    <section className="resume-section" id="about">
      <div className="resume-section-content">
        <h2 className="mb-5">{t('about-me')}</h2>

        {aboutQuery.isLoading ? (
          <RingLoader color={loaderCssColor} cssOverride={loaderCssOverride} />
        ) : (
          aboutQuery.data?.data.map((item) => <AboutResumeItem key={item.id} item={item} />)
        )}

        <h5>{t('social-media-and-more')}</h5>

        {
          <div className="social-icons">
            {socialNetworkQuery.isLoading ? (
              <RingLoader color={loaderCssColor} cssOverride={loaderCssOverride} />
            ) : (
              socialNetworkQuery.data?.data.map((item, index) => (
                <AboutSocialNetwork
                  key={item.id}
                  item={item}
                  className="social-icon mt-3"
                  data-aos="fade-right"
                  data-aos-delay={`${index * 100}`}
                />
              ))
            )}
          </div>
        }
      </div>
    </section>
  );
};
