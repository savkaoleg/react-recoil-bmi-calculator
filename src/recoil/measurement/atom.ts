import { atom, AtomEffect } from "recoil";
import recoilPersist from "../recoilPersist";
import Measurements from "../../static/measurements";

const measurementAtom = atom<Measurements>({
  key: "measurement",
  default: Measurements.metric,
  effects: [recoilPersist()],
});

export default measurementAtom;
