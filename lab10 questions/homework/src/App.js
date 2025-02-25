import {useState, useEffect} from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import LoginPage from './LoginPage';
import Products from './Products';
import SnackBar from './components/SnackBar';
import {auth} from './Service'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={auth() ? <Navigate to="/products" /> : <LoginPage />} />
        <Route path="/products" element={ auth() ? <Products /> : <Navigate to="/" />} />
      </Routes>
      <SnackBar />
    </>
  );
}

export default App;
