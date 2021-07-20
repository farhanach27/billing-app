import React from 'react';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
import { startRemoveCustomer } from '../../actions/customerActions';
import {MdDelete} from 'react-icons/md'

const RemoveCustomer = ( {id} ) => {
    const dispatch = useDispatch();

    const removeCustomer = (id) => {
        swal("Are you sure?","You want to delete the customer.",'warning', {
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
            dispatch(startRemoveCustomer(id))
          }
          return false;
        })
    }

    return (
        <button style={{color:'red'}} className='btn' onClick={() => {removeCustomer(id)}}><MdDelete/></button>
    )
}

export default RemoveCustomer;
