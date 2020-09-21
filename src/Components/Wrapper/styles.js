import styled from "styled-components/macro";

export const WrapperComponent = styled.div`
  display: flex;
  padding-top: 20px;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 1.6rem;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.pigeonPost};
`;
