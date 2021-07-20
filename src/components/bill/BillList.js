import React from 'react';
import {MdDelete} from 'react-icons/md';

const BillList = ({bills, dateFormatter, findCustomer, customers, handleInvoice, handleDelete}) => {

    const tableStyle = {
        padding:'10px',
        paddingTop:'30px',
        backgroundColor:'white',
        width:'90vw',
        minHeight:'80vh',
        boxShadow: '0 5px 5px -5px #888888'
    }

    return (
        <div style={tableStyle}>
            <table border={1} className='table table-striped text-center' size="sm">
                <thead>
                    <tr>
                        <th>SlNo</th>
                        <th>Date</th>
                        <th>Customer(Name)</th>
                        <th>Customer(Mobile)</th>
                        <th>Total</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {bills.map((ele,i)=>{
                        return (
                            <tr key={ele._id}>
                                <td>{i+1}</td>
                                <td>{dateFormatter(ele.date)}</td>
                                <td>{findCustomer(ele.customer, customers).name}</td>
                                <td>{findCustomer(ele.customer, customers).mobile}</td>
                                <td>{ele.total}</td>
                                <td style={{textAlign:'center'}}><a href="#" onClick={()=>handleInvoice(ele)}> invoice</a>&nbsp;<button style={{color:'red'}} className='btn' onClick={()=>handleDelete(ele._id)}><MdDelete size='1.5rem'/></button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>            
        </div>
    )
}

export default BillList;