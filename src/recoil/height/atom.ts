import { atom } from "recoil";
import recoilPersist from "../recoilPersist";
import { Height } from "./type";

const DEFAULT_VALUE = 0;

const weightAtom = atom<Height>({
  key: "height",
  default: 0,
  effects: [recoilPersist()],
});

export default weightAtom;
