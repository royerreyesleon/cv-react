import type { Experience } from '../../interfaces/experience.interface';

type Props = {
  item: Experience;
};

export const ExperienceItemBadge = ({ item }: Props) => {
  return (
    <div className="m-1 small">
      {item.tools.map((item, index) => (
        <span key={index} className="badge text-bg-secondary m-1">
          {item}
        </span>
      ))}
    </div>
  );
};
