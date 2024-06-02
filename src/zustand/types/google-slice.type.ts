import { GoogleAccessToken } from "./google-access-token";

export type GoogleSliceType = {
  credentials: GoogleAccessToken | null;
  addGoogleCreds: (payload: GoogleAccessToken) => void;
  removeGoogleCreds: () => void;
}