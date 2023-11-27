import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';

import './App.css';
import { useState } from 'react';
import { getUser } from '../../utilities/users-service'
import { Routes, Route } from 'react-router';


function App() {
  
  const [user, setUser] = useState(getUser)

  return (
    <main className='App'>
      MERN-L CHEESEBURGER
      { user ?
      <>
        <NavBar user={ user } setUser={ setUser } />
        <Routes>
          <Route path='/orders/new' element={ <NewOrderPage /> } />
          <Route path='/orders' element={ <OrderHistoryPage /> } />
        </Routes>
      </>
          :
          <AuthPage setUser={ setUser } />
      }
    </main>
  );
}

export default App;
