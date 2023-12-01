import AuthPage from '../AuthPage/AuthPage';
import NewPostPage from '../NewPostPage/NewPostPage';
import AllPostPage from '../AllPostPage/AllPostPage';
import NavBar from '../../components/NavBar/NavBar';

import './App.css';
import { useState } from 'react';
import { getUser } from '../../utilities/users-service'
import { Routes, Route } from 'react-router';


function App() {
  
  const [user, setUser] = useState(getUser)

  return (
    <main className='App'>
      MC Materials
      { user ?
      <>
        <NavBar user={ user } setUser={ setUser } />
        <Routes>
          <Route path='posts/new' element={ <NewPostPage /> } />
          <Route path='/' element={ <AllPostPage /> } />
        </Routes>
      </>
          :
          <AuthPage setUser={ setUser } />
      }
    </main>
  );
}

export default App;
