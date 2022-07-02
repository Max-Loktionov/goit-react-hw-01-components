import PropTypes from 'prop-types';
import {
  UserCard,
  Description,
  StatsList,
  StatsItem,
  Username,
  UserInfo,
  StatsLabel,
  StatsQuantity,
} from './Profile.styled';
import defaultImage from '../no-image-icon-23485.png';

export default function Profile({
  username = 'jan',
  tag,
  location,
  avatar = defaultImage,
  followers,
  views,
  likes,
}) {
  return (
    <UserCard>
      <Description>
        <img src={avatar} alt="User avatar" width="200" />
        <Username> {username}</Username>
        <UserInfo> {tag}</UserInfo>
        <UserInfo> {location} </UserInfo>
      </Description>

      <StatsList>
        <StatsItem>
          <StatsLabel>Followers</StatsLabel>
          <StatsQuantity> {followers}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Views</StatsLabel>
          <StatsQuantity> {views} </StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Likes</StatsLabel>
          <StatsQuantity> {likes} </StatsQuantity>
        </StatsItem>
      </StatsList>
    </UserCard>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
