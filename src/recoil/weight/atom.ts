import { atom } from "recoil";
import recoilPersist from "../recoilPersist";
import { Weight } from "./type";

const weightAtom = atom<Weight>({
  key: "weight",
  default: 0,
  effects: [recoilPersist()],
});

export default weightAtom;
