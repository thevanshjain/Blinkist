import React from "react";
import Image from "./Image";

export default {
  title: "atom/image",
  component: Image,
};

const Template = (args) => <Image {...args} />;

export const Logo = Template.bind({});

Logo.args = {
  src:
    "https://images.unsplash.com/photo-1612810806563-4cb8265db55f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGxvZ298ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  alt: "Tesla",
  height: "300px",
  width: "200px",
};