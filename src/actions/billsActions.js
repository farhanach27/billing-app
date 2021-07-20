import axios from "../config/axiosConfig"

export const startCreateBill = (billData) => {
    return (dispatch) => {
        axios.post('api/bills', billData)
        .then((response)=>{
            const result = response.data
            if(result.hasOwnProperty('errors')){
                alert(result.message)
            } else {
                dispatch(createBill(result))
            }
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}

export const startGetAllBills = () => {
    return (dispatch) => {
        axios.get('api/bills')
        .then((response)=>{
            const result = response.data
            dispatch(getAllBills(result))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}

export const startDeleteBill = (id) => {
    return (dispatch) => {
        axios.delete(`api/bills/${id}`)
        .then((response)=>{
            const result = response.data
            dispatch(deleteBill(result._id))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}

const deleteBill = (id) => {
    return {
        type: 'DELETE_BILL',
        payload: id
    }
}

const getAllBills = (bills) => {
    return {
        type: 'ALL_BILLS',
        payload: bills
    }
}

const createBill = (bill) => {
    return {
        type: 'CREATE_BILL',
        payload: bill
    }
}