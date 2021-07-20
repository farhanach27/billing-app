import React, { useState } from 'react';
import EditCustomer from './EditCustomer';
import RemoveCustomer from './RemoveCustomer';
import {MdEdit} from 'react-icons/md'

const CustomerItem = ({customer, index}) => {
    const [editModalShow, setEditModalShow] = useState(false); 

    return(
        <tr>
            <th>{index}</th>
            <td>{customer.name}</td>
            <td>{customer.mobile}</td>
            <td>
                <button  className='btn' style={{color:'blue'}} onClick={() => setEditModalShow(true)}>
                    <MdEdit size='1.5rem'/>
                </button>

                <EditCustomer
                    show={editModalShow}
                    onHide={() => setEditModalShow(false)}
                    customer={customer}
                />
            </td>
            <td><RemoveCustomer id={customer._id}/></td>
        </tr>
    )
}

export default CustomerItem;