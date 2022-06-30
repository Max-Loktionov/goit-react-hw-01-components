import styled from 'styled-components';

export const UserCard = styled.div`
  height: 450px;
  width: 350px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid brown;
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightgrey;
`;
export const StatsList = styled.ul`
  display: flex;
  align-content: center;
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60px;
  gap: 10px;
  flex-grow: 1;
  background-color: grey;
  border: 1px solid lightgrey;
  font-size: 14px;
`;
