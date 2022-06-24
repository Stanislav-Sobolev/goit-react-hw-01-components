import PropTypes from 'prop-types';
import { Children } from 'react';
import statistics from '../Statistics/data.json';
import {
  Container,
  Centralize,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Centralize>
      <Container>
        {title ? <Title>Upload stats</Title> : false}

        <StatList>
          {statistics.map((item, index) => {
            return (
              <Item key={item.id} index={index}>
                <Label>{item.label}</Label>
                <Percentage>{item.percentage}</Percentage>
              </Item>
            );
          })}
        </StatList>
      </Container>
    </Centralize>
  );
};
