import React from 'react';
import { useSelector } from 'react-redux';
import CustomerForm from './CustomerForm';
import CustomerListing from './CustomerListing';

const CustomerContainer = (props) => {

    const customers = useSelector(state => state.customers)

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-3'>
                    <h4>Add new customer</h4>
                    <CustomerForm />
                </div>
                <div className='col-md-6'>
                    {customers.length === 0 ? (
                        <div>
                            <h4>No customer's present.</h4>
                            <p>Add your first customer now.</p>
                        </div>
                    ) : (
                        <CustomerListing />
                    )}
                </div>
            </div>
            
            
            

        </div>

    )
}

export default CustomerContainer;