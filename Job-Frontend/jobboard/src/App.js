
import './App.css';
import LoginPage from './components/LoginPage';
import MainPage from './components/MainPage';
import {Routes,Route} from 'react-router-dom';
import SignupPage from './components/SignupPage';
import { UserContextProvider } from './components/UseContext';
import { useState } from 'react';

function App() {
  const [token,setToken]=useState(null)
  return (
    <UserContextProvider value={{token,setToken}}>
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
    </Routes>
    </UserContextProvider>
    
  );
}

export default App;
