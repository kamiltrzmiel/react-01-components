import {Profile} from './Profile';
import user_data from '../utils/mock/user.json';
import { Statistics } from './Statistics';
import data from '../utils/mock/data.json';
import { FriendList } from './FriendList';
import friends from '../utils/mock/friends.json';


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16,
        color: '#010101'
      }}
    >
      <Profile {...user_data}/>
      <Statistics el={data}/>
      <FriendList el={friends}/>
    </div>
  );
};