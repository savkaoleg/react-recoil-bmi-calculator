import { lazy } from "react";
import { Theme } from "./types";

export const DARK = "dark";
export const LIGHT = "light";

export const themes: Theme[] = [
  {
    id: LIGHT, // used as value in the select
    displayName: "Light", // used as label in the select
    filename: "light.theme.less",
    component: lazy(() => import("./LightTheme")),
  },
  {
    id: DARK,
    displayName: "Dark",
    filename: "light.theme.less",
    component: lazy(() => import("./DarkTheme")),
  },
];
