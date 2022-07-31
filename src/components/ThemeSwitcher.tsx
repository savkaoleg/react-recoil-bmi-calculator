import React from "react";
import { Switch, Typography } from "antd";
const { Text } = Typography;
import DynamicTheme from "./DynamicTheme";
import { themes, DARK, LIGHT } from "../themes";

import { useRecoilState } from "recoil";
import theme from "../recoil/theme";

const ThemeSwitcher: React.FC = () => {
  const [themeId, setThemeId] = useRecoilState(theme);

  const onChange = () => {
    let newThemeId = themeId === DARK ? LIGHT : DARK;

    setThemeId(newThemeId);
  };

  return (
    <>
      <DynamicTheme themes={themes} value={themeId} />
      <Text className='ant-typography-white'>Light</Text>{" "}
      <Switch checked={DARK === themeId} onChange={onChange} />{" "}
      <Text className='ant-typography-white'>Dark</Text>
    </>
  );
};

export default ThemeSwitcher;
