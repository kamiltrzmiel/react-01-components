import propTypes from 'prop-types';

export const FriendList = ({el}) => {
  return (
      <ul className="friend-list">
        {el.map(({avatar, name, isOnline, id}) => {
          return (
            <li className="item-friend" key={id}>
            <span className={isOnline ? 'status-online' : 'status-offline'}></span>
            <img className="avatar-friend" src={avatar} alt={name} width="48" />
            <p className="name-friend">{name}</p>
            </li>
          )
        })}
      </ul>
  )
}

FriendList.propTypes = {
  el: propTypes.array.isRequired,
};
