import '../App.css';
import Formulaire from './Formulaire';
import CardGit from './CardGit';
import CardList from './CardList';
import React, { useState } from 'react';
import NavBar from './Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from './Home';


function App() {

  // const Julien42120 = [
  //   {
  //     "login": "Julien42120",
  //     "id": 77976551,
  //     "node_id": "MDQ6VXNlcjc3OTc2NTUx",
  //     "avatar_url": "https://avatars.githubusercontent.com/u/77976551?v=4",
  //     "gravatar_id": "",
  //     "url": "https://api.github.com/users/Julien42120",
  //     "html_url": "https://github.com/Julien42120",
  //     "followers_url": "https://api.github.com/users/Julien42120/followers",
  //     "following_url": "https://api.github.com/users/Julien42120/following{/other_user}",
  //     "gists_url": "https://api.github.com/users/Julien42120/gists{/gist_id}",
  //     "starred_url": "https://api.github.com/users/Julien42120/starred{/owner}{/repo}",
  //     "subscriptions_url": "https://api.github.com/users/Julien42120/subscriptions",
  //     "organizations_url": "https://api.github.com/users/Julien42120/orgs",
  //     "repos_url": "https://api.github.com/users/Julien42120/repos",
  //     "events_url": "https://api.github.com/users/Julien42120/events{/privacy}",
  //     "received_events_url": "https://api.github.com/users/Julien42120/received_events",
  //     "type": "User",
  //     "site_admin": false,
  //     "name": null,
  //     "company": null,
  //     "blog": "",
  //     "location": null,
  //     "email": null,
  //     "hireable": null,
  //     "bio": null,
  //     "twitter_username": null,
  //     "public_repos": 39,
  //     "public_gists": 0,
  //     "followers": 0,
  //     "following": 0,
  //     "created_at": "2021-01-25T14:24:44Z",
  //     "updated_at": "2021-07-26T12:53:57Z"
  //   }
  // ]



  // TEST //

  const [userInput, setUserInput] = useState('');

  // TEST //


  const [login, setLogin] = useState('');
  const [avatar_url, setAvatar] = useState('');
  const [followers, setFollowers] = useState('');
  const [public_repos, setNbRepos] = useState('');
  const [error, setError] = useState(null);

  const setData = (data) => {

    setLogin(data.login)
    setAvatar(data.avatar_url)
    setFollowers(data.followers)
    setNbRepos(data.public_repos)

  };

  const handleSearch = (e) => {
    setUserInput(e.target.value)
  }

  const handleSubmit = () => {

    fetch(`https://api.github.com/users/${userInput}`)
      .then(res => res.json())
      .then(data => {
        if (data.message) {
          setError(data.message)
        } else {
          setData(data)
        }
      })
  }

  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/Home">
            <HomePage />
          </Route>
          <Route path="/CardGit">
            <Formulaire search={handleSearch} submit={handleSubmit} /> <CardGit login={login} avatar={avatar_url} followers={followers} nbRepos={public_repos} userInput={userInput} />
          </Route>
          <Route path="/CardList">
            <CardList />
          </Route>
        </Switch>
      </div>
    </Router >
  );
}


// <div>
//   <div>
//     <NavBar />
//   </div>
//   <div>
//     <Formulaire search={handleSearch} submit={handleSubmit} />
//   </div>
//   {error ? (<h1>{error}</h1>) : (

//     <div>
//       <CardGit login={login} avatar={avatar_url} followers={followers} nbRepos={public_repos} />
//     </div>
//   )}
//   <div>
//     <CardList />
//   </div>
// </div>
//     );


export default App;
