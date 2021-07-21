import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setLoginStatus } from './actions/userAuthActions';
import NavBar from './components/commons/NavBar';

const App = () => {

  const dispatch = useDispatch();

  useEffect (() => {
    if(localStorage.getItem('token')){
      dispatch(setLoginStatus())
    }
  })

  return (
        <div className='App'>
          <NavBar />
        </div>
  );
}

export default App;
