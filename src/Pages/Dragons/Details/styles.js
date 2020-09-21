import styled from "styled-components/macro";

export const Content = styled.div`
  width: 40%;
  padding: 10px 20px;
  border-radius: 15px;
  box-sizing: border-box;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.white};

  @media only screen and (max-width: 440px) {
    width: 90%;
  }
`;

export const Title = styled.p`
  font-weight: bold;
  color: ${({ theme }) => theme.calypso};
`;

export const Text = styled.p`
  margin-left: 20px;

  :not(:last-child) {
    margin-bottom: 5px;
  }
`;
