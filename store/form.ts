import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type State = {
  actualQuestion: any;
  type: any;
  progress: number;
  source: any;
  lead: any;
  deal: any;
  reason: any;
  creditors: any;
  deudaTotal: number;
  deudaTotalNegociada: number;
  comisionNegociacion: number;
  cuotaNegociacion: any;
  numCuotasNegociacion: any;
};

type Actions = {
  setActualQuestion: (question: any) => void;
  setType: (type: any) => void;
  setProgress: (progress: number) => void;
  setSource: (source: any) => void;
  setLead: (lead: any) => void;
  setDeal: (deal: any) => void;
  setReason: (reason: any) => void;
  setCreditors: (creditors: any) => void;
  addCreditor: (creditor: any) => void;
  removeCreditor: (index: number) => void;
  setCuotaNegociacion: (cuotaNegociacion: any) => void;
  setNumCuotasNegociacion: (numCuotasNegociacion: any) => void;
  setDeudaTotal: (deudaTotal: number) => void;
  setDeudaTotalNegociada: (deudaTotalNegociada: number) => void;
  clearForm: () => void;
};

const initialState: State = {
  actualQuestion: null,
  type: null,
  progress: 0,
  source: null,
  lead: null,
  deal: null,
  reason: null,
  creditors: [],
  comisionNegociacion: 20,
  cuotaNegociacion: null,
  numCuotasNegociacion: null,
  deudaTotal: 0,
  deudaTotalNegociada: 0,
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
      setReason: (reason: any) => {
        set((state) => ({ reason: reason }));
      },
      setCreditors: (creditors: any) => {
        set((state) => ({ creditors: creditors }));
      },
      addCreditor: (creditor) => {
        const oldCreditors = get().creditors;
        let newCreditors = [...oldCreditors, creditor];
        set(() => ({ creditors: newCreditors }));
      },
      removeCreditor: (index) => {
        const oldCreditors = get().creditors;
        let newCreditors = oldCreditors.filter(
          (item: any, i: any) => i !== index
        );
        set(() => ({ creditors: newCreditors }));
      },
      setCuotaNegociacion: (cuotaNegociacion) => {
        set((state) => ({ cuotaNegociacion }));
      },
      setNumCuotasNegociacion: (numCuotasNegociacion) => {
        set((state) => ({ numCuotasNegociacion }));
      },
      setDeudaTotal: (deudaTotal: number) => {
        set((state) => ({ deudaTotal }));
      },
      setDeudaTotalNegociada: (deudaTotalNegociada: number) => {
        set((state) => ({ deudaTotalNegociada }));
      },
      clearForm: () => {
        set(() => ({ ...initialState }));
      },
    }),
    {
      name: "form-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
