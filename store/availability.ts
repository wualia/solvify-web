import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type State = {
  dueDate: any;
};

type Actions = {
  setDueDate: (dueDate: any) => void;
};

const initialState: State = {
  dueDate: null,
};

export const useAvailabilityStore = create<State & Actions>()(
  persist(
    (set, get) => ({
      ...initialState,
      setDueDate: (dueDate: any) => {
        set((state) => ({ dueDate: dueDate }));
      },
    }),
    {
      name: "availability-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
