import { Component } from ".";

export default {
  title: "Components/Component",
  component: Component,
  argTypes: {
    property1: {
      options: ["component-12", "component-13"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "component-12",
    className: {},
  },
};
