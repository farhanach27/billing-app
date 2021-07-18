import React from 'react';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
import { startRemoveProduct } from '../../actions/productsActions';


const RemoveProduct = ( {id} ) => {
    const dispatch = useDispatch();

    const removeProduct = (id) => {
        swal("Are you sure?","You want to delete the product.",'warning', {
          buttons: {
            yes: {
              text: "Confirm",
              value: "yes"
            },
            no: {
              text: "Cancel",
              value: "no"
            }
          }
        }).then((value) => {
          if (value === "yes") {
            dispatch(startRemoveProduct(id))
          }
          return false;
        })
    }

    return (
        <button className='btn btn-danger' onClick={() => {removeProduct(id)}}>Delete</button>
    )
}

export default RemoveProduct;
