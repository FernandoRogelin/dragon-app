import styled from "styled-components/macro";

export const Form = styled.form`
  width: 40%;
  padding: 10px 20px;
  border-radius: 15px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.white};

  @media only screen and (max-width: 440px) {
    width: 90%;
  }
`;

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
