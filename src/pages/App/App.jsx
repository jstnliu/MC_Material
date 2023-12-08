import AuthPage from '../AuthPage/AuthPage';
import NewPostPage from '../NewPostPage/NewPostPage';
import AllPostPage from '../AllPostPage/AllPostPage';
import PostDetailPage from '../PostDetailPage/PostDetailPage'
import NavBar from '../../components/NavBar/NavBar';
import SearchAnimePage from '../SearchAnimePage/SearchAnimePage';

import { Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { getUser } from '../../utilities/users-service'
import { Routes, Route } from 'react-router';
import * as jikanAPI from '../../utilities/jikan-api'
import './App.css';


function App() {
  
  const [user, setUser] = useState(getUser)
  const [posts, setPosts] = useState([])

  function addPost(post) {
    setPosts([...posts, post])
  }

  // useEffect(() => {
  // jikanAPI.searchAnimeResults('naruto')
  //   jikanAPI.getAnime(1)
  // }, [])

  return (
    <main className='App'>
        <h1>MC Material</h1>
        { user ?
        <>
          <NavBar user={ user } setUser={ setUser } />
          <Routes>
            {/* search page */}
            <Route path='/search' element={ <SearchAnimePage /> } />
            {/* create page */}
            <Route path='/posts/new' element={ <NewPostPage addPost={ addPost } /> } />
            {/* index page */}
            <Route path='/posts' element={ <AllPostPage user={ user } /> } />
            <Route path='/' element={ <Navigate to='/posts' /> } />
            {/* detail page */}
            <Route path='/posts/:id' element={ <PostDetailPage posts={ posts } setPosts={ setPosts } /> } />
          </Routes>
        </>
            :
            <AuthPage setUser={ setUser } />
        }
    </main>
  );
}

export default App;
