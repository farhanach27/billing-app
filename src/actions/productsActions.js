
import swal from "sweetalert";
import axios from "../config/axiosConfig";

export const startGetAllProducts = () => {
    return (dispatch) => {
        axios.get('/api/products' )
        .then( (res) => {
            const result = res.data
            if(result.hasOwnProperty('message')){
                swal('Error', result.message ,'error')
            } else {
                dispatch(getAllProducts(result))
                // props.history.push('/')
            }
        })
        .catch( (err) => {
            swal('Error', 'some error in data','error')
            
        })
    }
}

export const getAllProducts = (products) => {
    return {
        type :'GET_ALL_PRODUCTS', 
        payload: products
    }
}


export const startAddProduct = (productData) => {
    return (dispatch) => {
        axios.post('/api/products',productData)
        .then( (res) => {
            const result = res.data
            if(result.hasOwnProperty('message')){
                swal('Error', result.message ,'error')
            } else {
                dispatch({type :'ADD_PRODUCT', payload: result})
            }
        })
        .catch( (err) => {
            swal('Error', 'some error in data','error')   
        })
    }
}

export const startUpdateProduct = (id, productData) => {
    return (dispatch) => {
        axios.put(`/api/products/${id}`,productData)
        .then( (res) => {
            const result = res.data
            if(result.hasOwnProperty('message')){
                swal('Error', result.message ,'error')
            } else {
                dispatch({type :'UPDATE_PRODUCT', payload: result})
            }
        })
        .catch( (err) => {
            swal('Error', 'some error in data','error')   
        })
    }
}

export const startRemoveProduct = (id) => {
    return (dispatch) => {
        axios.delete(`/api/products/${id}`)
        .then( (res) => {
            console.log(id)
            const result = res.data
            console.log()
            if(result.hasOwnProperty('message')){
                swal('Error', result.message ,'error')
            } else {
                dispatch({type :'REMOVE_PRODUCT', payload: result})
            }
        })
        .catch( (err) => {
            swal('Error', 'some error in data','error')
            
        })
    }
}


