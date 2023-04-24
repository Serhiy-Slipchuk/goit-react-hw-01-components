import user from '../myDB/user.json';
import data from '../myDB/data.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '40px',
        fontSize: 40,
        color: '#010101'
      }}
      >
      <Profile 
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      ></Profile>

      <Statistics
        data={data}
        title="upload stats"

      ></Statistics>
    </div>
  );
};
