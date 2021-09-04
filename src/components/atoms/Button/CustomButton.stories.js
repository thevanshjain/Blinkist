import React from "react";
import CustomButton from "./CustomButton";

export default {
  title: "atom/button/simpleButton",
  component: CustomButton,
  args: {
    value: "Stories",
  },
};
const Template = (args) => <CustomButton {...args} />;

export const simpleButton = Template.bind({});

simpleButton.args = {
  color: "secondary",
};
