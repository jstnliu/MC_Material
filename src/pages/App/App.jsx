import AuthPage from '../AuthPage/AuthPage';
import NewPostPage from '../NewPostPage/NewPostPage';
import AllPostPage from '../AllPostPage/AllPostPage';
import NavBar from '../../components/NavBar/NavBar';
import getCharacter from '../../utilities/jikan-api';

import './App.css';
import { Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { getUser } from '../../utilities/users-service'
import { Routes, Route } from 'react-router';


function App() {
  
  const [user, setUser] = useState(getUser)
  const [posts, setPosts] = useState([])
  const [goToHome, setGoToHome] = useState(false)

  function addPost(post) {
    setPosts([...posts, post])
  }

  // function handleClick() {
  //   setGoToHome(false)
  // }

  useEffect(() => {
    getCharacter(544)
    // setGoToHome(false)
  }, [])

  return (
    <main className='App'>
      {/* {goToHome && <Navigate to='/' /> } */}
        MC Materials
        { user ?
        <>
          <NavBar user={ user } setUser={ setUser } />
          <Routes>
            <Route path='/posts/new' element={ <NewPostPage addPost={ addPost } setGoToHome={ setGoToHome } /> } />
            <Route path='/posts' element={ <AllPostPage posts={ posts } /> } />
            <Route path='/' element={ <Navigate to='/posts' /> } />
          </Routes>
        </>
            :
            <AuthPage setUser={ setUser } />
        }
        {/* <NewPostPage addPost={ addPost } /> */}
    </main>
  );
}

export default App;
