import PropTypes from 'prop-types';

import {
  Box,
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
      <Box
        bg="bg"
        mt={4}
        display="flex"
        flexDirection="column"
        boxShadow="0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)"
      >
        {title ? <Title>{title}</Title> : false}

        <StatList>
          {stats.map(item => {
            return (
              <Item key={item.id}>
                <Label>{item.label}</Label>
                <Percentage>{item.percentage}</Percentage>
              </Item>
            );
          })}
        </StatList>
      </Box>
    </Centralize>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
