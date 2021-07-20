import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import EditProduct from './EditProduct';
import RemoveProduct from './RemoveProduct';
import {MdEdit} from 'react-icons/md'

const ProductItem = ({product, index}) => {
    const [editModalShow, setEditModalShow] = useState(false); 

    return(
        <tr>
            <th>{index}</th>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
                <button className='btn' style={{color:'blue'}} onClick={() => setEditModalShow(true)}>
                    <MdEdit size='1.5rem'/>
                </button>

                <EditProduct
                    show={editModalShow}
                    onHide={() => setEditModalShow(false)}
                    product={product}
                />
            </td>
            <td><RemoveProduct id={product._id}/></td>
        </tr>
    )
}

export default ProductItem;