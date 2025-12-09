import dayjs from 'dayjs';
import 'dayjs/locale/es';
import 'dayjs/locale/en';
import datetimeDifference from 'datetime-difference';

type GetDateByFormat = {
  date: string;
  locale?: string;
  format?: string;
};

export const useHelpers = () => {
  const calculateAge = (birthDate: string): number => dayjs().diff(birthDate, 'year');

  const getDateByFormat = (params: GetDateByFormat): string => {
    if (!params.date) return '';

    return dayjs(params.date)
      .locale(params.locale || 'es')
      .format(params.format || 'MMMM YYYY');
  };

  const diffReadable = (startDate: string, endDate?: string, lang = 'es') => {
    const end = endDate ? new Date(endDate) : new Date();
    const diff = datetimeDifference(new Date(startDate), end);

    const isES = lang === 'es';

    const parts = [];

    // AÑOS
    if (diff.years > 0) {
      parts.push(
        isES
          ? `${diff.years} año${diff.years > 1 ? 's' : ''}`
          : `${diff.years} year${diff.years > 1 ? 's' : ''}`,
      );
    }

    // MESES
    if (diff.months > 0) {
      parts.push(
        isES
          ? `${diff.months} mes${diff.months > 1 ? 'es' : ''}`
          : `${diff.months} month${diff.months > 1 ? 's' : ''}`,
      );
    }

    // Si no hay años ni meses → “0 meses”
    if (parts.length === 0) {
      return isES ? '0 meses' : '0 months';
    }

    return parts.join(' ');
  };

  return {
    calculateAge,
    getDateByFormat,
    diffReadable,
  };
};
