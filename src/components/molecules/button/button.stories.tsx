import React from "react";
import Button from './index';

export default {
  title: "Button"
};

export const Primary = () => <Button onClick={() => {}}>Click me</Button>;
export const Outline = () => <Button outline onClick={() => {}}>Click me</Button>;
export const Disabled = () => <Button disabled onClick={() => {}}>Click me</Button>;
