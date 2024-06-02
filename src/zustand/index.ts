import { create } from "zustand";
import { createBearSlice } from "./google-account.slice";
import { GoogleSliceType } from "./types/google-slice.type";
import { persist } from "zustand/middleware";

export const useBoundStore = create<GoogleSliceType>()(
  persist(
    (...a) => ({
      ...createBearSlice(...a),
    }),
    {
      name: 'google-credentials-storage',
      getStorage: () => localStorage,
    }
  )
);