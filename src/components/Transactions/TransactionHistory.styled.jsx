import styled from '@emotion/styled';

export const TdStyled = styled.td`
  text-align: center;
  height: 40px;
  width: 250px;
`;

export const TrStyled = styled.tr`
  height: 30px;
  width: 250px;
  background-color: ${p => (p.index % 2 ? '#edf1f4' : 'white')};
`;

export const TheadStyled = styled.thead`
  height: 40px;
  width: 250px;
  background-color: #00bcd8;
  color: white;
`;
