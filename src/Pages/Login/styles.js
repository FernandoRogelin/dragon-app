import styled from "styled-components";

export const Wrapper = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 360px;
  padding: 20px;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.pigeonPost};
`;

export const Body = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

export const Error = styled.span`
  left: 0;
  bottom: -15px;
  font-size: 12px;
  position: absolute;
  color: ${({ theme }) => theme.amaranth};
`;
