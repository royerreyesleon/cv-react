import type { SocialNetwork } from '../../interfaces/social-network.interface';

type Props = {
  className?: string;
  'data-aos'?: string;
  'data-aos-delay'?: string;
  item: SocialNetwork;
};

export const AboutSocialNetwork = ({ className, item, ...props }: Props) => {
  return (
    <>
      <a className={className} {...props} href={item.link} target="_blank">
        <i className={item.icon}></i>
      </a>
    </>
  );
};
