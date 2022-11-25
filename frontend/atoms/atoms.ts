import { atom } from "recoil";

export const accessTokenAtom = atom({
  key: "access_token",
  default: undefined,
});
