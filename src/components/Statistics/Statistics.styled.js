import styled from 'styled-components';

export const StatList = styled.ul`
  display: flex;
`;
export function GetRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 63px;
  height: 63px;
  margin-top: 24px;
  padding: 4px;
  color: #212121;
  border: solid 1px violet;
  background-color: ${props => {
    return props.backgroundColor;
  }};
`;
