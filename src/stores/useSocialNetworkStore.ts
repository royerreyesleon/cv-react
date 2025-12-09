import { create } from 'zustand';
import type { SocialNetwork } from '../interfaces/social-network.interface';

interface SocialNetworkStore {
  items: SocialNetwork[];
  setItems: (link: SocialNetwork[]) => void;
}

export const useSocialNetworkStore = create<SocialNetworkStore>((set) => ({
  items: [],
  // setItems: (items: SocialNetwork[]) => set((state) => ({ items: [...state.items, ...items] })),
  setItems: (items: SocialNetwork[]) => set(() => ({ items: [...items] })),
}));
