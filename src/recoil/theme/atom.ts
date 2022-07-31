import { atom } from "recoil";
import recoilPersist from "../recoilPersist";
import { themes } from "../../themes";
const defaultTheme = themes[1]; // Dark by default

const themeAtom = atom({
  key: "theme",
  default: defaultTheme.id,
  effects: [recoilPersist()],
});

export default themeAtom;
