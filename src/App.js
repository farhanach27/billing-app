import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Routes from './components/helpers/Routes';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setLoginStatus } from './actions/userAuthActions';


const App = () => {

  const dispatch = useDispatch();

  useEffect (() => {
    if(localStorage.getItem('token')){
      dispatch(setLoginStatus())
    }
  })

  return (
    <BrowserRouter>
        <div className='App'>
          <Routes />
        </div>
    </BrowserRouter>
    
  );
}

export default App;
