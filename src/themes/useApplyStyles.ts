import { useEffect } from "react";
import { LazyStyle } from "./types";

export function useApplyStyles(styles: LazyStyle): void {
  useEffect(() => {
    styles.use();
    return () => styles.unuse();
  });
}
