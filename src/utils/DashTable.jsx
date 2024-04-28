import React from "react";
import { Table } from "flowbite-react";

const DashTable = () => {
  return (
    <div>
      <Table striped>
        <Table.Head>
          <Table.HeadCell>Username</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Products</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row>
            <Table.Cell>Hamza</Table.Cell>
            <Table.Cell>hamza@gmail.com</Table.Cell>
            <Table.Cell>Macbook 14 Pro</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Saadullah</Table.Cell>
            <Table.Cell>saadullah@gmail.com</Table.Cell>
            <Table.Cell>Iphone 14 Pro</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Shahzaib</Table.Cell>
            <Table.Cell>shahzaib@gmail.com</Table.Cell>
            <Table.Cell>Samsung 14 Pro</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Muneeb</Table.Cell>
            <Table.Cell>muneeb@gmail.com</Table.Cell>
            <Table.Cell>Refrigerator</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default DashTable;
