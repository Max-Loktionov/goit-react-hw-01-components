import styled from 'styled-components';

export const UserCard = styled.div`
  padding: 10px;
  background-color: hwb(68deg 18% 36% / 72%);
  border-radius: 5px;
  border: 1px solid brown;
  box-shadow: -2px 2px 3px 0px rgb(0 0 0 / 20%),
    0px 4px 6px 2px rgb(0 0 0 / 14%), 2px 2px 5px 0px rgb(0 0 0 / 12%);
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5px;
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
  padding: 4px;
  background-color: grey;
  border: 1px solid lightgrey;
  font-size: 14px;
`;
export const Username = styled.p`
  font-weight: 700;
  font-size: 16px;
  margin: 0px;
  padding: 8px;
`;
export const UserInfo = styled.p`
  margin: 0;
  padding: 4px;
  font-size: 14px;
`;
export const StatsLabel = styled.span`
  display: block;
  width: 90px;
  height: 70px;
  padding: 4px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;
export const StatsQuantity = styled.span`
  font-weight: 700;
  margin-left: auto;
  margin-right: auto;
`;
