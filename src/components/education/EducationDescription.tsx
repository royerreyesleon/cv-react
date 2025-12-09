import type { Education } from '../../interfaces/education.interface';
import { useApp } from '../../hooks/useApp';

type Props = {
  item: Education;
};

export const EducationDescription = ({ item }: Props) => {
  const { lang } = useApp();
  return (
    <>
      <div className="flex-grow-1">
        <h3 className="mb-0">{lang === 'es' ? item.name_es : item.name_en}</h3>
        <div className="subheading mb-3">
          {item.link ? (
            <a href={item.link} target="_blank" className="text-decoration-none text-muted">
              <span
                dangerouslySetInnerHTML={{
                  __html: lang === 'es' ? item.description_es : item.description_en,
                }}
              ></span>
            </a>
          ) : (
            <span
              dangerouslySetInnerHTML={{
                __html: lang === 'es' ? item.description_es : item.description_en,
              }}
            ></span>
          )}
        </div>
      </div>
    </>
  );
};
