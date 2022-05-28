/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { 
  HomeUser, Login, Register, HomeAdmin, NotFound, CarsAdmin, CarsAdminService, CarsAdminServiceDetail, CarsAdminServicePayment
} from './Pages'
import AuthRoute from './Auth/AuthRoute';
import { SidebarAdmin } from './Components';
import './App.css';
import { 
  authActions, selectRole, selectToken 
} from './Redux/slice/authSlice';
import CarsFormAdd from './Pages/HomeAdmin/CarsFormAdd';

function App() {
  const dispatch = useDispatch();
  const role = useSelector(selectRole)
  const token = useSelector(selectToken)

  useEffect(() => {
    const sessionToken = sessionStorage.getItem('user')
    if(sessionToken){
      dispatch(authActions.setToken(sessionToken))
    }
  }, [token])

  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
       {/* admin */}
       { 
        role === 'admin' && (
          <Route path='/' element={
            <AuthRoute>
                <SidebarAdmin active='1'>
                  <HomeAdmin/>
                </SidebarAdmin>
            </AuthRoute>
          }/>
        )
      }
      <Route  path='/admin/cars' element={
         <AuthRoute>
          <SidebarAdmin active='2'>
            <CarsAdmin />
          </SidebarAdmin>
        </AuthRoute>
      } />
      <Route  path='/admin/cars/create' element={
         <AuthRoute>
          <SidebarAdmin active='2'>
            <CarsFormAdd />
          </SidebarAdmin>
        </AuthRoute>
      } />
      {/* user */}
      <Route path='/' element={
        <AuthRoute>
            <HomeUser/>
        </AuthRoute>
      }/>
      <Route path='/service' element={
        <AuthRoute>
            <CarsAdminService />
        </AuthRoute>
      }/>
      <Route path='/service/car/:id' element={
        <AuthRoute>
            <CarsAdminServiceDetail />
        </AuthRoute>
      }/>
      <Route path='/service/car/payment' element={
        <AuthRoute>
            <CarsAdminServicePayment />
        </AuthRoute> 
      }/>
     
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;