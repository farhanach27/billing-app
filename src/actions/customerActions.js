
import swal from "sweetalert";
import axios from "../config/axiosConfig";

export const startGetAllCustomers = () => {
    return (dispatch) => {
        axios.get('/api/customers' )
        .then( (res) => {
            const result = res.data
            if(result.hasOwnProperty('message')){
                swal('Error', result.message ,'error')
            } else {
                
                dispatch(getAllCustomers(result))
                // props.history.push('/')
            }
        })
        .catch( (err) => {
            swal('Error', 'some error in data','error')
            
        })
    }
}

export const getAllCustomers = (customers) => {
    return {
        type :'GET_ALL_CUSTOMERS', 
        payload: customers
    }
}

export const startAddCustomer = (customerData) => {
    return (dispatch) => {
        axios.post('/api/customers',customerData)
        .then( (res) => {
            const result = res.data
            if(result.hasOwnProperty('message')){
                swal('Error', result.message ,'error')
            } else {
                dispatch({type :'ADD_CUSTOMER', payload: result})
            }
        })
        .catch( (err) => {
            swal('Error', 'some error in data','error')   
        })
    }
}

export const startUpdateCustomer = (id, customerData) => {
    return (dispatch) => {
        axios.put(`/api/customers/${id}`,customerData)
        .then( (res) => {
            const result = res.data
            if(result.hasOwnProperty('message')){
                swal('Error', result.message ,'error')
            } else {
                dispatch({type :'UPDATE_CUSTOMER', payload: result})
            }
        })
        .catch( (err) => {
            swal('Error', 'some error in data','error')   
        })
    }
}

export const startRemoveCustomer = (id) => {
    return (dispatch) => {
        axios.delete(`/api/customers/${id}`)
        .then( (res) => {
            console.log(id)
            const result = res.data
            console.log()
            if(result.hasOwnProperty('message')){
                swal('Error', result.message ,'error')
            } else {
                dispatch({type :'REMOVE_CUSTOMER', payload: result})
            }
        })
        .catch( (err) => {
            swal('Error', 'some error in data','error')
            
        })
    }
}


