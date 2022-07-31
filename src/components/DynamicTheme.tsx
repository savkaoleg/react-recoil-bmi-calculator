import React, { FunctionComponent, Suspense } from "react";
import FullPageLoading from "./FullPageLoading";
import { Theme } from "../themes/types";

interface DynamicThemeProps {
  themes: Theme[];
  value: string;
}

export default function DynamicTheme({ themes, value }: DynamicThemeProps) {
  const ThemeComponent = themes.find((theme) => theme.id === value)
    ?.component as FunctionComponent;

  return (
    <Suspense fallback={<FullPageLoading />}>
      <ThemeComponent />
    </Suspense>
  );
}
