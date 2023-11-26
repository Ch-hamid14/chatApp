import React from "react";
import { Input as RInput } from "antd";
const Input = ({
  placeholder,
  rows,
  maxLength,
  icon,
  style,
  onChange,
  icon1,
}) => {
  return (
    <RInput
      placeholder={placeholder}
      style={style}
      rows={rows}
      maxLength={maxLength}
      prefix={icon1}
      suffix={icon}
      onChange={onChange}
    />
  );
};

export default Input;