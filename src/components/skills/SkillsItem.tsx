import { useApp } from '../../hooks/useApp';
import type { Skill } from '../../interfaces/skill.interface';
import { SkillsIconItem } from './SkillsIconItem';

type Props = {
  item: Skill;
};

export const SkillsItem = ({ item }: Props) => {
  const { lang } = useApp();

  return (
    <>
      <SkillsIconItem className={item.icon} />

      {lang === 'es' ? item?.name_es : item?.name_en}

      {item.percentage && (
        <small className="text-primary" v-if="item?.percentage">
          &#8594; {item?.percentage}%
        </small>
      )}
    </>
  );
};
