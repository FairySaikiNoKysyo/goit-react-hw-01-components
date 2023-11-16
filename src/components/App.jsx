import { FriendList } from './FriendList/FriendList';
import { Profile } from './Profile/Profile';
import user from './Profile/user.json';
import { Statistic } from './Statistic/Statistic';
import data from './Statistic/data.json';
import friends from './FriendList/friends.json';
import transactions from './TransactionHistory/transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { GlobalStyle } from './GlobalStyles';
import { Layout } from './Layout';
export const App = () => {
  return (
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101',
    //   }}
    // >
    <Layout>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transaction={transactions} />
      <GlobalStyle />
    </Layout>
  );
};
