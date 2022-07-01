import styled from 'styled-components';

export const FriendCards = styled.ul`
  margin-top: 24px;
  background-color: gold;
`;
export const Friend = styled.li`
  display: flex;
  width: 540px;
  height: 72px;
  margin: 24px;
  padding: 24px;
  background-color: #37331d57;
  border: 1px solid grey;
  border-radius: 24px;
  box-shadow: -2px 2px 3px 0px rgb(0 0 0 / 20%),
    0px 4px 6px 2px rgb(0 0 0 / 14%), 2px 2px 5px 0px rgb(0 0 0 / 12%);
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;
export const Status = styled.span`
  width: 24px;
  height: 24px;
  border: 1px solid grey;
  border-radius: 50%;
  margin: auto 24px;
  box-shadow: rgb(50 50 35 / 10%) 4px -5px 1px 0px inset,
    rgb(27 27 20 / 20%) 3px -3px 1px 5px inset,
    rgb(10 10 20 / 20%) 3px -3px 1px 8px inset,
    rgb(0 0 0 / 6%) 3px -4px 0px 10px inset;
  background-color: ${props => {
    return props.isFriendOnline ? 'green' : 'red';
  }};
`;
export const Avatar = styled.img`
  width: 60px;

  margin-left: 48px;
  border: 1px solid grey;
  border-radius: 16px;
`;
export const FriendName = styled.p`
  margin-left: auto;
  margin-right: auto;
  font-size: 24px;
  font-style: italic;
`;
