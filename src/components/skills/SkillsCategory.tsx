import { useApp } from '../../hooks/useApp';
import type { Category } from '../../interfaces/category.interface';
import { SkillsItem } from './SkillsItem';

type Props = {
  category: Category;
  className: string;
  'data-aos'?: string;
  'data-aos-delay'?: string;
};

export const SkillsCategory = ({
  category: { name_es, name_en, skills },
  className,
  ...props
}: Props) => {
  const { lang } = useApp();

  return (
    <div className={className} {...props}>
      <div className="subheading mb-3">{lang === 'es' ? name_es : name_en}</div>
      <ul className="fa-ul">
        {skills?.map((item, index) => (
          <li key={index}>
            <SkillsItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};
