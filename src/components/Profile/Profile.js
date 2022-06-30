import PropTypes from 'prop-types';
import { UserCard, Description, StatsList, StatsItem } from './Profile.styled';
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
        <p className="name"> {username}</p>
        <p className="tag"> {tag}</p>
        <p className="location"> {location} </p>
      </Description>

      <StatsList>
        <StatsItem>
          <span className="label">Followers</span>
          <span className="quantity"> {followers}</span>
        </StatsItem>
        <StatsItem>
          <span className="label">Views</span>
          <span className="quantity"> {views} </span>
        </StatsItem>
        <StatsItem>
          <span className="label">Likes</span>
          <span className="quantity"> {likes} </span>
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
