import user from '../myDB/user.json';
import data from '../myDB/data.json';
import friends from '../myDB/friends.json';
import transactions from '../myDB/transactions.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '20px',
        paddingBottom: '30px',
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

      <Statistics data={data} title="upload stats" />

      <FriendList friends={friends}/>

      <TransactionHistory items={transactions} />


    
    </div>
  );
};
