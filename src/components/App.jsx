import { Container } from "./App.styled";
import Section from "./Section";
import Profile from "./Profile/Profile";
import user from './user.json';
import Statistics from "./Statistics/Statistics";
import data from './data.json';
import FriendList from "./FriendList/FriendList";
import friends from './FriendList/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from './transactions.json';



 const App = () => {
  return (
    <Container
    >
      
       <Profile user ={user}
    avatar={user.avatar}
    username={user.username }
    tag={user.tag }
    location={user.location}
    followers={user.stats.followers}
    views={user.stats.views}
    likes={user.stats.likes}
        />
        
      {/* <Section 
      className="statistics" title={data.title}
      > */}
        {/* <Statistics title="Upload stats" items={data} /> */}
        <Statistics items={data}
          id={data.id}
          label= {data.label}
          percentage={data.percentage} 
        />
      {/* </Section> */}
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};

export default App;