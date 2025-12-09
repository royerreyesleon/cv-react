import { useSkill } from '../../hooks/useSkill';
import { SkillsIconItem } from './SkillsIconItem';

export const SkillsIcon = () => {
  const { skillIcons } = useSkill();

  return (
    <ul className="list-inline dev-icons">
      {skillIcons.map((item, index) => (
        <li
          key={`skill-icon-item-${index}`}
          className="list-inline-item"
          data-aos="fade-right"
          data-aos-delay={`${index * 100}`}
        >
          <SkillsIconItem className={item.icon} color={item.color} />
        </li>
      ))}
    </ul>
  );
};
