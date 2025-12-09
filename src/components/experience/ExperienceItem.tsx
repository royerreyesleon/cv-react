import type { Experience } from '../../interfaces/experience.interface';
import { DateComponent } from '../shared/DateComponent';
import { ExperienceItemDescription } from './ExperienceItemDescription';

type Props = {
  className?: string;
  'data-aos'?: string;
  item: Experience;
};

export const ExperienceItem = ({ className, item, ...props }: Props) => {
  return (
    <>
      <div className={className} {...props}>
        <ExperienceItemDescription item={item} />
        <DateComponent start_date={item.start_date} end_date={item.end_date} />
      </div>
    </>
  );
};
