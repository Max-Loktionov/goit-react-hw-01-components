import PropTypes from 'prop-types';
import FriendItem from './FriendItem';

import { FriendCards } from './FriendList.styled';

function FriendList({ friends }) {
  return (
    <FriendCards>
      {friends.map(friend => (
        <FriendItem
          avatar={friend.avatar}
          id={friend.id}
          key={friend.id}
          isOnline={friend.isOnline}
          name={friend.name}
        />
      ))}
    </FriendCards>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array,
};
export default FriendList;
