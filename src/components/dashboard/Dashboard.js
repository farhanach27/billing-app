import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Dashboard = (props) => {

    const loginStatus = useSelector((state) => state.loginStatus );

    const dispatch = useDispatch();
    

    return (
            <div>
                Dashboard
            </div>
    )
}


export default Dashboard;