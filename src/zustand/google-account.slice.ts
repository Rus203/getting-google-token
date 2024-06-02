import { StateCreator } from "zustand";
import { GoogleSliceType } from "./types/google-slice.type";

export const createBearSlice: StateCreator<
  GoogleSliceType,
  [],
  [],
  GoogleSliceType
> = (set) => ({
  credentials: null,
  addGoogleCreds: (payload) =>
    set((state) => {
      const hasCandidate = state.credentials

      return hasCandidate
        ? { credentials: state.credentials }
        : { credentials: payload };
    }),
  removeGoogleCreds: () =>
    set(() => {
      return { credentials: null };
    }),
});
