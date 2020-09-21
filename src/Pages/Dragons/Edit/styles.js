import styled from "styled-components/macro";

export const Content = styled.div`
  display: flex;
  margin-bottom: 20px;
  flex-direction: column;

  > input {
    :not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;
