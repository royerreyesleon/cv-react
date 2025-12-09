import { create } from 'zustand';
import type { About } from '../interfaces/about.interface';

interface AboutStore {
  items: About[];
  setItems: (link: About[]) => void;
}

export const useAboutStore = create<AboutStore>((set) => ({
  items: [],
  // setItems: (items: About[]) => set((state) => ({ items: [...state.items, ...items] })),
  setItems: (items: About[]) => set(() => ({ items: [...items] })),
}));
