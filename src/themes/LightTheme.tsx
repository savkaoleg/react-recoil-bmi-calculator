import styles from "./light.theme.less";
import { useApplyStyles } from "./useApplyStyles";

export default function DarkTheme() {
  useApplyStyles(styles);
  return null;
}
