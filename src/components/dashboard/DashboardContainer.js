import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { startGetAllBills } from '../../actions/billsActions'
import { startGetAllCustomers } from '../../actions/customerActions'
import { startGetAllProducts } from '../../actions/productsActions'
import { startGetUserDetails } from '../../actions/userAuthActions'
import StatsContainer from './StatsContainer'

const DashboardContainer = (props) => {

    const dispatch = useDispatch();

    useState(() => {
        if(localStorage.getItem('token')){
            dispatch(startGetUserDetails());
            dispatch(startGetAllCustomers());
            dispatch(startGetAllProducts());
            dispatch(startGetAllBills())
        } 
    },[])
    

    const account = useSelector(state=>state.account)
    return (
        <div type='container'>
            <h4 className='text-center'>Dashboard</h4>
            <StatsContainer />
        </div>
    )
}

export default withRouter(DashboardContainer);