import { color, space, layout, flexbox, shadow } from 'styled-system';
import styled from '@emotion/styled';

export const Box = styled('div')(color, space, layout, flexbox, shadow);

export const Centralize = styled.div`
  display: flex;
  justify-content: center;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Label = styled.span`
  color: white;
  font-size: 12px;
`;

export const Percentage = styled.span`
  color: white;
  margin-top: 5px;
  font-weight: 500;
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60px;
  height: 60px;
  align-items: center;
  background-color: ${props => getRandomHexColor()};
`;
