import {
  Table,
  TdStyled,
  TrStyled,
  TheadStyled,
} from './TransactionHistory.styled';

import { Component } from 'react';

const Tr = ({ id, type, amount, currency, index }) => (
  <TrStyled index={index}>
    <TdStyled>{type}</TdStyled>
    <TdStyled>{amount}</TdStyled>
    <TdStyled>{currency}</TdStyled>
  </TrStyled>
);

const Thead = () => (
  <TheadStyled>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </TheadStyled>
);

export const TransactionHistory = ({ items }) => (
  <Table>
    <Thead />
    <tbody>
      {items.map((prop, index) => (
        <Tr
          key={prop.id}
          type={prop.type}
          amount={prop.amount}
          currency={prop.currency}
          index={index}
        ></Tr>
      ))}
    </tbody>
  </Table>
);
