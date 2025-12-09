import { useApp } from '../../hooks/useApp';
import { useHelpers } from '../../hooks/useHelpers';

type Props = {
  start_date?: string;
  end_date?: string;
  show_diff?: boolean;
};

export const DateComponent = ({ start_date, end_date, show_diff = true }: Props) => {
  const { getDateByFormat, diffReadable } = useHelpers();
  const { lang } = useApp();
  return (
    <div className="flex-shrink-0 text-primary text-capitalize text-center">
      {getDateByFormat({ date: start_date || '', locale: lang })} -{' '}
      {getDateByFormat({ date: end_date || '', locale: lang })}
      {show_diff && start_date && (
        <>
          <br />
          <small className="text-center">{diffReadable(start_date, end_date, lang)}</small>
        </>
      )}
    </div>
  );
};
