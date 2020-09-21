import styled from "styled-components/macro";

export const Wrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  height: 100%;
  opacity: 0.4;
  position: fixed;
  background-color: ${({ theme }) => theme.black};
`;

export const Content = styled.div`
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
`;
