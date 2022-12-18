import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

//標準でrecoil-persistというkey名でwebstorageに保存される（オプションで指定可能）
const { persistAtom } = recoilPersist();

export const numAtom = atom({
  key: "numberAtom",
  default: 0,
  // effects_UNSTABLE: [persistAtom],
});

export const selectornum = selector({
  key: "addNumAtom",
  get: ({ get }) => {
    const num = get(numAtom);

    return num + 1;
  },
});
export const numAtom2 = atom({
  key: "number",
  default: 0,
  // effects_UNSTABLE: [persistAtom],
});

export const numAtom3 = atom({
  key: "numberAtom3",
  default: 0,
  // effects_UNSTABLE: [persistAtom],
});

export const numAtom4 = atom({
  key: "numberAtom4",
  default: 0,
  // effects_UNSTABLE: [persistAtom],
});
