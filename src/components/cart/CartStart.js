import React from 'react'
import { useSelector } from 'react-redux'
import { dateFormatter } from '../helpers/helperFunctions'

const CartStart = (props) => {
    const accountInfo = useSelector(state=>state.accountInfo)
    const date = dateFormatter(new Date().toISOString())
    return (
        <div className='container' style={{display:'flex', justifyContent:'space-between',margin:'20px'}}>
            
            <div className="form-group  justify-content-start">
                <label>Business-Name:</label>
                <input type="text" defaultValue={`${accountInfo.businessName} - ${accountInfo.address}`} disabled={true}/>
            </div>
                    
                    
            <div className="form-group  justify-content-end">
                <label >Date:</label>
                <input type="text" defaultValue={date} disabled={true}/>
            </div>
        </div>
    )
}

export default CartStart;