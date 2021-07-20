import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InvoiceModal from '../commons/InvoiceModal'
import { startDeleteBill, startGetAllBills } from '../../actions/billsActions'
import BillList from './BillList'

const BillContainer = (props) => {
    const bills = useSelector(state=>state.bills)
    const customers = useSelector(state=>state.customers)
    const [modalShow, setModalShow] = useState(false);
    const [customerDetails, setCustomerDetails] = useState({})

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(startGetAllBills())
    },[])

    const findCustomer = (id, array) => {
        const item = array.find(ele=>{
            return ele._id === id
        })
        return item ? {...item} : {} 
    }

    const dateFormatter = (date) => {
        return date.slice(0,10).split('-').reverse().join('-')
    }

    const handleDelete = (id) => {
        dispatch(startDeleteBill(id))
    }

    const handleInvoice = (ele) => {
        const invoiceData = {
            lineItems: ele.lineItems.map(item=>{
                return {product:item.product, quantity:item.quantity}
            }),
            customer: ele.customer,
            date: dateFormatter(ele.date)
        }
        setCustomerDetails(invoiceData)
        setModalShow(true)
    }

    return (
        <div className='container'>
            <h2 className="mx-2">Manage your bills</h2>
            {bills.length > 0 ? (
                <>
                    <BillList
                        bills={bills} 
                        findCustomer={findCustomer} 
                        customers={customers} 
                        dateFormatter={dateFormatter} 
                        handleInvoice={handleInvoice} 
                        handleDelete={handleDelete} 
                    />
                    <InvoiceModal
                        customer={customerDetails.customer}
                        date={customerDetails.date}
                        lineItems={customerDetails.lineItems}
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    /> 
                </>
            ):(
                <div style={{paddingTop:'100px',paddingLeft:'500px'}}>
                    <h2>No bills found</h2>
                </div>
            )}

        </div>
    )
}

export default BillContainer;