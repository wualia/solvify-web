import { create } from "zustand";

type State = {
  actualQuestion: any;
  type: any;
  progress: number;
  source: any;
};

type Actions = {
  setActualQuestion: (question: any) => void;
  setType: (type: any) => void;
  setProgress: (progress: number) => void;
  setSource: (source: any) => void;
};

const initialState: State = {
  actualQuestion: null,
  type: null,
  progress: 0,
  source: null,
};

export const useFormStore = create<State & Actions>()((set, get) => ({
  ...initialState,
  setActualQuestion: (question: any) => {
    set((state) => ({ actualQuestion: question }));
  },
  setType: (type: any) => {
    set((state) => ({ type: type }));
  },
  setProgress: (progress: number) => {
    set((state) => ({ progress: progress }));
  },
  setSource: (source: any) => {
    set((state) => ({ source: source }));
  },
}));
