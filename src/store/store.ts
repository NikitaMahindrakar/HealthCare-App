import { create } from "zustand";

interface State {
  user: any;
  setUser: (user: any) => void;
}

export const useStore = create<State>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));