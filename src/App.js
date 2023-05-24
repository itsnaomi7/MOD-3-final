import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from './utilities/users-service';
// pages
import NewOrderPage from './pages/NewOrderPage/NewOrderPage.js';
import AuthPage from './pages/AuthPage/AuthPage.js';
import OrderHistoryPage from './pages/OrderHistoryPage/OrderHistoryPage.js';
// components
import NavBar from './components/NavBar/NavBar';

function App() {
  const [user, setUser] = useState(getUser);
  // console.log('current user', user)

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;




// test console log
// async function testCall() {
//   const res = await fetch('/test');
//   const data = await res.json();
//   console.log(data);
// }

// useEffect(() => { 
//  testCall();
  
// },  []); 