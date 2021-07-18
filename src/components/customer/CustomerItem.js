import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import EditCustomer from './EditCustomer';
import RemoveCustomer from './RemoveCustomer';

const CustomerItem = ({customer, index}) => {
    const [editModalShow, setEditModalShow] = useState(false); 

    return(
        <tr>
            <th>{index}</th>
            <td>{customer.name}</td>
            <td>{customer.mobile}</td>
            <td>
                <Button  onClick={() => setEditModalShow(true)}>
                    Edit
                </Button>

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