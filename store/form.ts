import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type State = {
  actualQuestion: any;
  type: any;
  progress: number;
  source: any;
  lead: any;
  deal: any;
};

type Actions = {
  setActualQuestion: (question: any) => void;
  setType: (type: any) => void;
  setProgress: (progress: number) => void;
  setSource: (source: any) => void;
  setLead: (lead: any) => void;
  setDeal: (deal: any) => void;
};

const initialState: State = {
  actualQuestion: null,
  type: null,
  progress: 0,
  source: null,
  lead: null,
  deal: null,
};

export const useFormStore = create<State & Actions>()(
  persist(
    (set, get) => ({
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
      setLead: (lead: any) => {
        set((state) => ({ lead: lead }));
      },
      setDeal: (deal: any) => {
        set((state) => ({ deal: deal }));
      },
    }),
    {
      name: "form-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
