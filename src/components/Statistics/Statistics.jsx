import PropTypes from 'prop-types';

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
        {title ? <Title>{title}</Title> : false}

        <StatList>
          {stats.map((item, index) => {
            return (
              <Item key={item.id}>
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

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

Item.propTypes = {
  key: PropTypes.number,
  index: PropTypes.number,
};
