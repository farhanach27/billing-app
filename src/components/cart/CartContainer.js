import React from 'react'
import CartBody from './CartBody'
import CartStart from './CartStart'

const CartContainer = () => {
    return (
        <div style={{margin:'10px', width:'100%',textAlign:'center', position:'relative'}}>
            <h4>Cart</h4>
            <div className="bill-container">
                <CartStart />
                <CartBody />
            </div>
        </div>
    )
}

export default CartContainer