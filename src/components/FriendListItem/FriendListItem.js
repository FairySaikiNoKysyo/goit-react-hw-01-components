import { Marker } from './FriendListItemStyled';

export const FriendListItem = ({ friend: { id, avatar, name, isOnline } }) => {
  return (
    <li key={id}>
      <Marker data-status={isOnline.toString()} />
      <img src={avatar} alt="User avatar" width="48" />
      <span>{name}</span>
    </li>
  );
};
