import PropTypes from 'prop-types';
import defaultImage from '../no-image-icon-23485.png';
import { Friend, Status, Avatar, FriendName } from './FriendList.styled';

export default function FriendItem({
  avatar = defaultImage,
  id,
  isOnline,
  name,
}) {
  return (
    <Friend id={id} key={id}>
      <Status isFriendOnline={isOnline}>{isOnline}</Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name} </FriendName>
    </Friend>
  );
}

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
