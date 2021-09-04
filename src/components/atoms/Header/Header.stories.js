import React from "react";
import Header from "./Header";

export default {
  title: "atom/Header",
  component: Header,
};
const Template = (args) => <Header {...args} />;

export const Heading = Template.bind({});

Heading.args = {
    heading:"My Stories"
}