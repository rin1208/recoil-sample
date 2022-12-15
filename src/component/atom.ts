import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

//標準でrecoil-persistというkey名でwebstorageに保存される（オプションで指定可能）
const { persistAtom } = recoilPersist();

export const numAtom = atom({
  key: "numberAtom",
  default: 0,
  // effects_UNSTABLE: [persistAtom],
});
export const numAtom2 = atom({
  key: "number",
  default: 0,
  // effects_UNSTABLE: [persistAtom],
});
