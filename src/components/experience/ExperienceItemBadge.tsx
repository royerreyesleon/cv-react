import { useApp } from '../../hooks/useApp';

type Props = {
  items: { es: string; en: string }[];
  type: 'tools' | 'attitudes' | 'aptitudes';
};

export const ExperienceItemBadge = ({ items, type }: Props) => {
  const { lang } = useApp();
  return (
    <>
      {items.map((item, index) => (
        <span key={index} className="badge text-bg-secondary m-1">
          {type === 'attitudes' && <i className="fa fa-circle-check text-info"></i>}
          {type === 'aptitudes' && <i className="fa fa-star text-warning"></i>}
          {type !== 'tools' && ' '}
          {lang === 'es' ? item.es : item.en}
        </span>
      ))}
    </>
  );
};
