import React from "react";

import Button from "../Button";
import { WrapperComponent, Title } from "./styles";

export default function Wrapper({ title, children, onClick, nameButton }) {
  return (
    <WrapperComponent>
      <Title>
        {nameButton && <Button onClick={onClick}>{nameButton}</Button>}
        {title}
      </Title>
      {children}
    </WrapperComponent>
  );
}
