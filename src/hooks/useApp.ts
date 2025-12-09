import type { CSSProperties } from 'react';

import { useAppStore } from '../stores/useAppStore';

export const useApp = () => {
  const currentHref = useAppStore((state) => state.currentHref);
  const links = useAppStore((state) => state.links);
  const lang = useAppStore((state) => state.lang);
  const setLang = useAppStore((state) => state.setLang);
  const loadLang = useAppStore((state) => state.loadLang);

  const loaderCssColor = '#00D8FF';
  const loaderCssOverride: CSSProperties = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'red',
  };

  const onCloseMenu = useAppStore((state) => state.onCloseMenu);

  return {
    currentHref,
    links,
    lang,
    setLang,
    loadLang,
    loaderCssColor,
    loaderCssOverride,
    onCloseMenu,
  };
};
