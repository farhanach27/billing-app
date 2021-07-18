import React from 'react';
import { useSelector } from 'react-redux';
import NavBar from './NavBar';

const Account = (props) => {

    const accountInfo = useSelector(state => state.accountInfo);

    return (
        <div>
            <NavBar />
            <h4>Account Info</h4>
            <p><b>Name: </b> {accountInfo.username}</p>
            <p><b>Email: </b>{accountInfo.email}</p>
            <p><b>Business Name: </b>{accountInfo.businessName}</p>
            <p><b>Address: </b>{accountInfo.address}</p>
        </div>
    )
}

export default Account;