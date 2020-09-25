import React from "react";

import { Wrapper } from "./styles";

export default function NotFound() {
  return (
    <Wrapper>
      404 Página não encontrada{" "}
      <span role="img" aria-label="Emoji dedo para baixo">
        😕👎
      </span>
    </Wrapper>
  );
}
