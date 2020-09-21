import { memo } from "react";
import styled, { css } from "styled-components/macro";

const button = styled.button`
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  line-height: 20px;
  padding: 6px 16px;
  text-align: center;
  border-radius: 100px;
  color: ${({ theme }) => theme.white};
  outline-color: ${({ theme }) => theme.malibu};
  background-color: ${({ theme }) => theme.dodgerBlue};
  border: 1px solid ${({ theme }) => theme.dodgerBlue};

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      background-color: ${({ theme }) => theme.silver};
      border: 1px solid ${({ theme }) => theme.silver};
    `}
`;

export default memo(button);
