import { useEffect } from 'react';
import { useApp } from '../../hooks/useApp';

export const DropdownLanguage = () => {
  const { lang, setLang, loadLang } = useApp();

  useEffect(() => {
    loadLang();
  }, [loadLang]);

  return (
    <div className="dropdown-center">
      <select
        className="form-select form-select-md bg-dark text-white border border-0"
        onChange={(e) => setLang(e.target.value)}
        value={lang}
      >
        <option value="es">es</option>
        <option value="en">en</option>
      </select>
    </div>
  );
};
