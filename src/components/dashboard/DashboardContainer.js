import React from 'react'
import { useSelector } from 'react-redux'
import StatsContainer from './StatsContainer'

const DashboardContainer = (props) => {
    const account = useSelector(state=>state.account)
    return (
        <div type='container'>
            <h4 className='text-center' style={{color:'#4D7DE3'}}>Dashboard</h4>
            <StatsContainer />
        </div>
    )
}

export default DashboardContainer;