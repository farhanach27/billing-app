import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setLoginStatus, startGetUserDetails } from './actions/userAuthActions';
import NavBar from './components/commons/NavBar';
import { startGetAllCustomers } from './actions/customerActions';
import { startGetAllProducts } from './actions/productsActions';
import { startGetAllBills } from './actions/billsActions';

const App = () => {

  const dispatch = useDispatch();

  useEffect (() => {
    if(localStorage.getItem('token')){
      dispatch(setLoginStatus())
      dispatch(startGetUserDetails());
      dispatch(startGetAllCustomers());
      dispatch(startGetAllProducts());
      dispatch(startGetAllBills())
    }
  })

  return (
        <div className='App'>
          <NavBar />
        </div>
  );
}

export default App;
