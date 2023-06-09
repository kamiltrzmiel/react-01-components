import propTypes from 'prop-types';

export const FriendList = ({el}) => {
  return (
      <ul className="friend-list">
        {el.map(({avatar, name, isOnline, id}) => {
          return (
            <li className="item2" key={id}>
            <span className={isOnline ? 'status-online' : 'status-offline'}>O</span>
            <img className="avatar2" src={avatar} alt={name} width="48" />
            <p className="name2">{name}</p>
            </li>
          )
        })}
      </ul>
  )
}

FriendList.propTypes = {
  el: propTypes.array.isRequired,
};
