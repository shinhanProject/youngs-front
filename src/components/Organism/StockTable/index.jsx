import React from "react";
import { useTable } from "react-table";
import { Text } from "../../index";
import { Container, TableSheet, TableHead, Header, Th, Td } from "./styled";

const columns = [
  {
    accessor: "name",
    Header: "Name",
  },
  {
    accessor: "price",
    Header: "Price",
  },
  {
    accessor: "profit",
    Header: "Profit",
  },
  {
    accessor: "fluctuationrate",
    Header: "Fluctuation Rate",
  },
];

const data = [
  {
    name: "Company A",
    price: "$100",
    profit: "$20",
    fluctuationrate: "5%",
  },
  {
    name: "Company B",
    price: "$75",
    profit: "$10",
    fluctuationrate: "3%",
  },
  {
    name: "Company C",
    price: "$50",
    profit: "$15",
    fluctuationrate: "7%",
  },
];

const StockTable = () => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <Container>
      <Text>주식 테이블</Text>
      <TableSheet {...getTableProps()}>
        <TableHead>
          {headerGroups.map(header => (
            // getHeaderGroupProps를 통해 header 배열을 호출한다
            <Header {...header.getHeaderGroupProps()}>
              {header.headers.map(col => (
                // getHeaderProps는 각 셀 순서에 맞게 header를 호출한다
                <Th {...col.getHeaderProps()}>{col.render("Header")}</Th>
              ))}
            </Header>
          ))}
        </TableHead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              // getRowProps는 각 row data를 호출해낸다
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  // getCellProps는 각 cell data를 호출해낸다
                  <Td {...cell.getCellProps()}>{cell.render("Cell")}</Td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </TableSheet>
    </Container>
  );
};

export default StockTable;
