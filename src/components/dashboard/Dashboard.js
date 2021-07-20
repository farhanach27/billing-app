import React from 'react'
import { useSelector } from 'react-redux'
import StatsContainer from './StatsContainer'

const Dashboard = (props) => {
    const account = useSelector(state=>state.account)
    return (
        <div type='container'>
            <h2 style={{color:'#4D7DE3'}}>Dashboard</h2>
            <StatsContainer />
        </div>
    )
}

export default Dashboard;