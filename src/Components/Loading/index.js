import React, { Fragment } from "react";
import ClipLoader from "react-spinners/ClipLoader";

import { Wrapper, Content } from "./styles";

export default function Loading({ isLoading }) {
  return (
    <Fragment>
      {isLoading && (
        <Wrapper>
          <Content>
            <ClipLoader size={60} color={"#006eb5"} loading={isLoading} />
          </Content>
        </Wrapper>
      )}
    </Fragment>
  );
}
