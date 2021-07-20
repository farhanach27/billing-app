import React from 'react'
import CartBody from './CartBody'
import CartStart from './CartStart'

const CartContainer = () => {

    const formStyle = {
        padding:'10px',
        paddingTop:'30px',
        backgroundColor:'#e7dddd',
        boxShadow: '0 5px 5px -5px #888888'
    }

    return (
        <div className='container' style={{textAlign:'center', position:'relative', ...formStyle}}>
            <h4>Cart</h4>
            <div className="bill-container">
                <CartStart />
                <CartBody />
            </div>
        </div>
    )
}

export default CartContainer