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
   
      <div>
       
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
