import React from 'react';
import {FiLogOut} from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { resetAccountInfo, resetLogInStatus } from '../actions/userAuthActions';
import Routes from './helpers/Routes';
import {MdShoppingCart, MdAccountCircle, MdGridOn} from 'react-icons/md';
import {FaReceipt, FaUsers, FaMoneyBillWave, FaShoppingBasket} from 'react-icons/fa';

const NavBar = () => {

    const loginStatus = useSelector(state => state.loginStatus)

    const dispatch = useDispatch();

    return (
        <>
            {
            loginStatus ? (
                <div>
                <header>
                    <nav className="navbar navbar-light bg-light">
                        <span className="navbar-brand mb-0 h1"><i>BillingApp</i></span>
                        <Link className='nav' to='/dashboard'><MdGridOn size='1.5rem' color='#800080'/></Link>
                        <Link to='/customers'><FaUsers size='1.5rem' color='#0D4F8B'/></Link>
                        <Link to='/products'><FaShoppingBasket size='1.5rem' color='#DAA520'/></Link>
                        <Link to='/cart'><MdShoppingCart size='1.5rem' color='green'/></Link>
                        <Link to='/bills'><FaReceipt size='1.5rem' color='#E9DCC9'/></Link>
                        <Link to='/account'><MdAccountCircle size='1.5rem' color='#581845'/></Link>
                        <button className='btn' style={{color: '#AA4A44'}} onClick={ () => {
                                    localStorage.removeItem('token')
                                    swal('Successfully', 'logged out', 'success')
                                    dispatch(resetLogInStatus())
                                    dispatch(resetAccountInfo())
                        }}>
                            <FiLogOut size='1.5rem'/> 
                        </button>     
                        
                    </nav>    
                </header>    
                
                </div>
            ) : (
                <div>
                    <Link to='/'></Link>
                    <Link to='/register'></Link>
                </div>
                
            )
        }

        <Routes />
        </>     
    )
}


export default NavBar;