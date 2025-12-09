import { create } from 'zustand';
import i18n from './../i18n';
import type { Link } from '../interfaces/navbar.interface';

interface AppStore {
  currentHref: string;
  links: Link[];
  lang: string;
  setLang: (lang: string) => void;
  loadLang: () => void;
  onCloseMenu: (link: string) => void;
}

export const useAppStore = create<AppStore>((set) => ({
  currentHref: '#about',
  links: [
    {
      href: '#about',
      name_es: 'acerca de mí',
      name_en: 'about me',
    },
    {
      href: '#experience',
      name_es: 'experiencia',
      name_en: 'experience',
    },
    {
      href: '#education',
      name_es: 'educación',
      name_en: 'education',
    },
    {
      href: '#skills',
      name_es: 'habilidades',
      name_en: 'skills',
    },
    {
      href: '#portfolio',
      name_es: 'Portafolio',
      name_en: 'Portfolio',
    },
  ],
  lang: i18n.language || 'es',
  setLang: (lang) => {
    i18n.changeLanguage(lang);
    set({ lang });
    localStorage.setItem('lang', lang);
  },
  loadLang: () => {
    const stored = localStorage.getItem('lang');
    if (stored) {
      i18n.changeLanguage(stored);
      set({ lang: stored });
    }
  },
  onCloseMenu: (href: string) => {
    const navbarResponsive = document.getElementById('navbarResponsive') as HTMLElement;
    navbarResponsive.classList.remove('show');
    set({ currentHref: href });
  },
}));
