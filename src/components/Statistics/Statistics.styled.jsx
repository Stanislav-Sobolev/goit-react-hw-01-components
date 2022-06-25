import styled from '@emotion/styled';

export const Container = styled.section`
  margin-top: 15px;
  display: inline-flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.bg};
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
`;
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
