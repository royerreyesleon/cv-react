import { useCallback } from 'react';
import { useApp } from '../../hooks/useApp';

export const NavbarToggler = () => {
  const { currentHref, lang, links, onCloseMenu } = useApp();

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLLIElement>) => {
      const href = e.currentTarget.getAttribute('data-href')!;
      onCloseMenu(href);
    },
    [onCloseMenu],
  );

  return (
    <>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav text-center">
          {links.map((item, index) => (
            <li className="nav-item" key={index} data-href={item.href} onClick={handleClick}>
              <a
                className={`nav-link ${currentHref == item.href && 'active'}`}
                data-aos="fade-right"
                href={`${item.href}`}
              >
                {lang === 'es' ? item.name_es : item.name_en}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
