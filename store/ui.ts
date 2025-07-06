import { create } from "zustand";

type State = {
  webMobileOpen: boolean;
  bigMenuOpen: boolean;
};

type Actions = {
  setBigMenuOpen: () => void;
  setWebMobileOpen: () => void;
};

const initialState: State = {
  webMobileOpen: false,
  bigMenuOpen: false,
};

export const useUiStore = create<State & Actions>()((set, get) => ({
  ...initialState,
  setBigMenuOpen: () => {
    set((state) => ({ bigMenuOpen: !state.bigMenuOpen }));
  },
  setWebMobileOpen: () => {
    set((state) => ({ webMobileOpen: !state.webMobileOpen }));
  },
}));
