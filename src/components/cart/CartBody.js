import React, { useState } from 'react'
import { Hint } from 'react-autocomplete-hint'
import { useSelector, useDispatch } from 'react-redux'
import { AiOutlineUsergroupAdd} from 'react-icons/ai'
import { withRouter } from 'react-router'
import { Button } from 'react-bootstrap'
import AddProducts from './AddProducts'
import { startCreateBill } from '../../actions/billsActions'
import InvoiceModal from '../commons/InvoiceModal'


const CartBody = (props) => {
    const customers = useSelector(state=>state.customers)
    const [mobile, setMobile] = useState('')
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [lineItems, setLineItems] = useState([])
    const [displayBillData, setDisplayBillData] = useState({})
    const [modalShow, setModalShow] = useState(false);

    const dispatch = useDispatch()

    const date = new Date().toISOString().split('T')[0]  //date format yyyy-mm-dd
    const mobileNumbers = customers.map(ele=>ele.mobile)

    const handleAutoFill = (e) => {
        const mobileNumber = e.target.value
        const customer = customers.find(ele=>ele.mobile===mobileNumber)
        if(customer){
            setId(customer._id)
            setName(customer.name)
        } else {
            alert('customer does not exist')
            setMobile('')
            props.history.push('/customers')
        }
    }

    const addLineItem = (allLineItems) => {
        setLineItems(allLineItems)
    }

    const handleSubmit = (e) => {
        e.stopPropagation();
        const billData = {
            date: date,
            customer: id,
            lineItems: lineItems
        }
        if(billData.customer && billData.lineItems.length > 0){
            dispatch(startCreateBill(billData))
            setDisplayBillData(billData)
            setModalShow(true)
            setName('')
            setMobile('')
        } else {
            alert('empty fields')
        }
    }

    return (
        <div className="m-3 pt-3">
            <form className="row mx-3">
                <div className="form-group col-4">
                    <label>Add by Mobile No</label>
                    <Hint options={mobileNumbers}>
                        <input className="form-control" type="text" value={mobile} placeholder="phone number" onBlur={handleAutoFill} onFocus={()=>setName()} onChange={(e)=>setMobile(e.target.value)} /> 
                    </Hint>
                </div>
                <div className="form-group col-4">
                    <label>Name</label>
                    <input className="form-control" type="text" defaultValue={name} disabled={true}/>
                </div>
            </form>

            <AddProducts
                addLineItem={addLineItem} modalShow={modalShow}
            />

            <div className="row justify-content-end mx-3">
                <Button onClick={handleSubmit}>Create</Button>
            </div>

            <InvoiceModal
                {...displayBillData}
                show={modalShow}
                onHide={() => setModalShow(false)}
            /> 

        </div>
    )
}

export default withRouter(CartBody)