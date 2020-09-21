import styled from "styled-components/macro";

export const Content = styled.div`
  width: 40%;
  padding: 10px 20px;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);

  @media only screen and (max-width: 440px) {
    width: 90%;
  }
`;

export const TableComponent = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  border-bottom: 1px solid ${({ theme }) => theme.silver};
`;

export const Tr = styled.tr`
  display: flex;
  justify-content: space-between;
`;

export const Th = styled.th`
  text-align: left;
  padding: 0 0 10px 0;
  vertical-align: baseline;
  color: ${({ theme }) => theme.calypso};
`;
