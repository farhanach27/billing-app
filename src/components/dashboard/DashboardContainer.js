import React from 'react'
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import StatsContainer from './StatsContainer'

const DashboardContainer = (props) => {
    const account = useSelector(state=>state.account)
    return (
        <div type='container'>
            <h4 className='text-center'>Dashboard</h4>
            <StatsContainer />
        </div>
    )
}

export default withRouter(DashboardContainer);