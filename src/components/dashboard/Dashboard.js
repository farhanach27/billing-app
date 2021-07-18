import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../NavBar';



const Dashboard = (props) => {

    const loginStatus = useSelector((state) => state.loginStatus );

    const dispatch = useDispatch();
    

    return (
            <div>
                <NavBar />
                Dashboard
            </div>
    )
}


export default Dashboard;