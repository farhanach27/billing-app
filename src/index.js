import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './index.css';
import App from './App';
import { startGetUserDetails } from './actions/userAuthActions';
import { startGetAllCustomers } from './actions/customerActions';
import { startGetAllProducts } from './actions/productsActions';
import { BrowserRouter } from 'react-router-dom';
import { startGetAllBills } from './actions/billsActions';



const store = configureStore();

if(localStorage.getItem('token')){
  store.dispatch(startGetUserDetails());
  store.dispatch(startGetAllCustomers());
  store.dispatch(startGetAllProducts());
  store.dispatch(startGetAllBills())
}

console.log('state', store.getState());

store.subscribe(() => {
  console.log('state updated', store.getState());
})


ReactDOM.render(
    <Provider store = {store}>
      <BrowserRouter forceRefresh={true}>
        <App />
      </BrowserRouter>
    </Provider>
  ,
  document.getElementById('root')
);

