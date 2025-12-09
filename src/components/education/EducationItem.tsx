import type { Education } from '../../interfaces/education.interface';
import { EducationDescription } from './EducationDescription';
import { EducationProfessionalLicense } from './EducationProfessionalLicense';

type Props = {
  className?: string;
  'data-aos'?: string;
  item: Education;
};

export const EducationItem = ({ className, item, ...props }: Props) => {
  return (
    <>
      <div className={className} {...props}>
        <EducationDescription item={item} />
        <EducationProfessionalLicense item={item} />
        {/* <DateComponent start_date={item.start_date} end_date={item.end_date} show_diff={false} /> */}
      </div>
    </>
  );
};
