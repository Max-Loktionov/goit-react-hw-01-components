import { Container } from "./App.styled";
import Section from "./Section";
import Profile from "./Profile/Profile";
import user from './user.json';
import Statistics from "./Statistics";
import data from './data.json'




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
        
      <Section 
      className="statistics" title={data.title}
      >
      <Statistics  items={data} />
        </Section>
    </Container>
  );
};

export default App;