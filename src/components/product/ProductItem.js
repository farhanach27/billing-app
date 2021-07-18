import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import EditProduct from './EditProduct';
import RemoveProduct from './RemoveProduct';


const ProductItem = ({product, index}) => {
    const [editModalShow, setEditModalShow] = useState(false); 

    return(
        <tr>
            <th>{index}</th>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
                <Button  onClick={() => setEditModalShow(true)}>
                    Edit
                </Button>

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