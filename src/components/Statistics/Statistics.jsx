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
          {/* {statistics.map(item => {
            return (
              <Item>
                <Label>.mp3</Label>
                <Percentage>14%</Percentage>
              </Item>
            );
          })} */}
          {/* <Item statistics={statistics}></Item> */}
          {/* <Item>
                        <Label>.mp3</Label>
                        <Percentage>14%</Percentage>
                    </Item>
                    <Item>
                        <Label>.pdf</Label>
                        <Percentage>41%</Percentage>
                    </Item>
                    <Item>
                        <Label>.mp4</Label>
                        <Percentage>12%</Percentage>
                    </Item> */}
        </StatList>
      </Container>
    </Centralize>
  );
};
