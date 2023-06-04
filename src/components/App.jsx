import {Profile} from './Profile';
import user_data from '../utils/mock/user_data.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile {...user_data}/>
    </div>
  );
};