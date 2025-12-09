import { create } from 'zustand';
import type { Category } from '../interfaces/category.interface';

interface SkillStore {
  items: Category[];
  setItems: (item: Category[]) => void;
  skillIcons: { icon: string; color?: string }[];
}

export const useSkillStore = create<SkillStore>((set) => ({
  items: [],
  setItems: (items: Category[]) => set(() => ({ items: [...items] })),
  skillIcons: [
    { icon: 'fab fa-html5' },
    { icon: 'fab fa-css3-alt' },
    { icon: 'fab fa-js-square' },
    { icon: 'fab fa-bootstrap' },
    { icon: 'fab fa-angular' },
    { icon: 'fab fa-react', color: '#00D8FF' },
    { icon: 'fab fa-vuejs' },
    { icon: 'fab fa-node-js' },
    { icon: 'fab fa-npm' },
    { icon: 'fab fa-php' },
    { icon: 'fab fa-java' },
  ],
}));
