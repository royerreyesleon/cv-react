import { useEffect } from 'react';
import { AboutResumeItem } from './AboutResumeItem';
import { AboutSocialNetwork } from './AboutSocialNetwork';
import { useAbout } from '../../hooks/useAbout';
import { useSocialNetwork } from '../../hooks/useSocialNetwork';

export const AboutComponentUseEffect = () => {

  const { items: about, getAll: getAbout } = useAbout()
  const { items: socialNetworks, getAll: getSocialNetwork } = useSocialNetwork()

  useEffect(() => {
    getAbout();
    getSocialNetwork();
  }, []);

  return (
    <section className="resume-section" id="about">
      <div className="resume-section-content">

        { about.map((item) => <AboutResumeItem key={item.id} item={item} />) }
        
        <div className="social-icons">
          {socialNetworks.map((item) => (
            <AboutSocialNetwork
            key={item.id}
            item={item}
            className="social-icon"
            data-aos="fade-right"
            data-aos-delay="100"
          />  
          ))}
        </div>
      </div>
    </section>
  );
};
