import React from 'react';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
import { startRemoveProduct } from '../../actions/productsActions';
import {MdDelete} from 'react-icons/md'


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
        <button style={{color:'red'}} className='btn' onClick={() => {removeProduct(id)}}><MdDelete size='1.5rem'/></button>
    )
}

export default RemoveProduct;
