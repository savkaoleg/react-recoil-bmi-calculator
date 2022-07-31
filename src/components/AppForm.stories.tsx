import React from "react";
import { RecoilRoot } from "recoil";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";

import AppForm from "./AppForm";
import DarkTheme from "../themes/DarkTheme";
import LightTheme from "../themes/LightTheme";

export default {
  title: "Example/App Form",
  decorators: [(storyFn) => <RecoilRoot>{storyFn()}</RecoilRoot>],
  component: AppForm,
} as ComponentMeta<typeof AppForm>;

const Template: ComponentStory<any> = (args) => {
  return (
    <>
      {args.theme}
      <AppForm />
    </>
  );
};

const Play = async ({ canvasElement }) => {
  const measurement = await within(canvasElement).findByTestId("measurement");
  const Standard = await within(canvasElement).findByText("Standard");
  const Metric = await within(canvasElement).findByText("Metric");
  await userEvent.click(Standard);

  // const StandardInput = await within(canvasElement).

  // expect()
  await userEvent.click(Metric);
};

export const Dark = Template.bind({});
Dark.args = {
  theme: <DarkTheme />,
};
Dark.play = Play;

export const Light = Template.bind({});
Light.args = {
  theme: <LightTheme />,
};
Light.play = Play;
