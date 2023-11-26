import React from "react";
import { Button as RButton } from "antd";
const Button = ({ title, style, type }) => {
  return (
    <RButton style={style} type={type}>
      {title}
    </RButton>
  );
};

export default Button;
