import React from 'react';
// import './App.css';
import Home from './Pages/Home';
// import SignUp from './pages/SignUp'
// import SignIn from './pages/SignIn'
import UserDashboard from './Pages/UserDashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AdminCreateProduct from './Pages/CreateMenu';
import AdminAddBanner from './Pages/AddBanner';
import AdminDashboard from './Pages/AdminDashboard';

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/signin" element={<SignIn />} /> */}
          <Route exact path="/user/dashboard" element={<UserDashboard />} />
          <Route exact path="/admin/dashboard" element={<AdminDashboard />} />
          <Route exact path="/admin/dashboard/product/create" element={<AdminCreateProduct />} />
          <Route exact path="/admin/dashboard/banner/create" element={<AdminAddBanner />} />
        </Routes>
      </BrowserRouter>
    </>
   
  );
}

export default App;
