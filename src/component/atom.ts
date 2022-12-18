import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

//標準でrecoil-persistというkey名でwebstorageに保存される（オプションで指定可能）
const { persistAtom } = recoilPersist();

export const parent1Atom = atom({
  key: "parent1Atom",
  default: 0,
  // effects_UNSTABLE: [persistAtom],
});

export const parent2Atom = atom({
  key: "parent2Atom",
  default: 0,
  // effects_UNSTABLE: [persistAtom],
});

export const children1Atom = atom({
  key: "children1Atom",
  default: 0,
  // effects_UNSTABLE: [persistAtom],
});

export const children2Atom = atom({
  key: "children2Atom",
  default: 0,
  // effects_UNSTABLE: [persistAtom],
});
