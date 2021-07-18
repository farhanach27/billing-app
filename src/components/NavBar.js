import React from 'react';
import {FiLogOut} from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { resetAccountInfo, resetLogInStatus } from '../actions/userAuthActions';

const NavBar = () => {

    const dispatch = useDispatch();

    return (
        <header>
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 h1">Billing</span>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/account'>Account</Link>
                <Link to='/customers'>Customers</Link>
                <Link to='/products'>Products</Link>
                <Link to='/bills'>Bills</Link>
                <button className='btn btn-dark' onClick={ () => {
                            localStorage.removeItem('token')
                            swal('Successfully', 'logged out', 'success')
                            dispatch(resetLogInStatus())
                            dispatch(resetAccountInfo())
                }}>
                    LogOut <FiLogOut size='1.4rem'/> 
                </button>     
                
            </nav>    
        </header>      
    )
}


export default NavBar;