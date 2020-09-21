import React from "react";

import { Content, TableComponent, Thead, Th, Tr } from "./styles";

export default function Table({ children, thead, ...props }) {
  return (
    <Content {...props}>
      <TableComponent>
        <Thead>
          <Tr>{thead && thead.map((head) => <Th key={head}>{head}</Th>)}</Tr>
        </Thead>
        <tbody>{children}</tbody>
      </TableComponent>
    </Content>
  );
}
