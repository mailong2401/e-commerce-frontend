import { create } from "zustand";

interface RegisterData {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
}

interface RegisterStore {
  data: RegisterData | null;
  setData: (data: RegisterData) => void;
  clearData: () => void;
}

export const useRegisterStore = create<RegisterStore>((set) => ({
  data: null,
  setData: (data) => set({ data }),
  clearData: () => set({ data: null }),
}));
