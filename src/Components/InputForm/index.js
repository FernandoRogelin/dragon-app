import React from "react";

import { Input } from "./styles";

export default function InputForm({
  name,
  type,
  mask,
  error,
  value,
  testId,
  refInput,
  onChange,
  placeholder,
  ariaLabelledby,
  ...props
}) {
  return (
    <Input
      name={name}
      type={type}
      mask={mask}
      error={error}
      ref={refInput}
      maskPlaceholder=""
      onChange={onChange}
      defaultValue={value}
      data-testid={testId}
      placeholder={placeholder}
      aria-labelledby={ariaLabelledby}
      {...props}
    />
  );
}
