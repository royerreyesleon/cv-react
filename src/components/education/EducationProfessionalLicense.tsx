import { useTranslation } from 'react-i18next';
import type { Education } from '../../interfaces/education.interface';

type Props = {
  item: Education;
};

export const EducationProfessionalLicense = ({ item: { license } }: Props) => {
  const { t } = useTranslation();
  return (
    <div className="flex-shrink-0 text-primary text-capitalize text-center">
      <a
        className="text-decoration-none"
        href="https://cedulaprofesional.sep.gob.mx/"
        target="_blank"
      >
        {t('professional-license')}
      </a>
      <br />
      <small className="text-center">{license}</small>
    </div>
  );
};
