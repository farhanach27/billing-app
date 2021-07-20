import React from 'react';
import { useSelector } from 'react-redux';

const Account = (props) => {

    const accountInfo = useSelector(state => state.accountInfo);

    return (
        <div className='container'>
           <div className='align-self-center'>
                <div className="card text-white bg-success mb-3"  style={{width: '50rem'}}>
                    <div className="card-header text-center"><h2>Account Info</h2></div>
                    <div className="card-body">
                        <span className="card-title"><b>Admin Name : </b></span><span className="card-text">{accountInfo.username}</span><br/><br/>
                        <span className="card-title"><b>Email : </b></span><span className="card-text">{accountInfo.email}</span><br/><br/>
                        <span className="card-title"><b>Business Name : </b></span><span className="card-text">{accountInfo.businessName}</span><br/><br/>
                        <span className="card-title"><b>Address : </b></span><span className="card-text">{accountInfo.address}</span>
                    </div>
                </div>
            </div>
        </div>

        
     )
}

export default Account;