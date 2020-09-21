import styled, { css } from "styled-components/macro";
import InputMask from "react-input-mask";

export const Input = styled(InputMask)`
  width: 100%;
  padding: 4px;
  font-size: 14px;
  max-width: 280px;
  line-height: 20px;
  border-radius: 3px;
  box-sizing: border-box;
  outline-color: ${({ theme }) => theme.malibu};
  background-color: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme.mystic};

  ${({ error }) =>
    error &&
    css`
      border: 1px solid ${({ theme }) => theme.amaranth};
    `}

  ::placeholder {
    color: ${({ theme }) => theme.regentGray};
  }
`;
