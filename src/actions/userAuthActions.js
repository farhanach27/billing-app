import axios from '../config/axiosConfig';
import swal from 'sweetalert';
import { startGetAllCustomers } from './customerActions';
import { startGetAllProducts } from './productsActions';
import { startGetAllBills } from './billsActions';

export const startRegisterUser = (userData, history) => {
    return ( 
        axios.post('/api/users/register', userData)
           .then( (res) => {
                const result = res.data
                if(result.hasOwnProperty('errmsg')){
                    swal('Error', result.errmsg ,'error')
                } else {
                    swal('Successfully', 'account created', 'success')
                    history.push('/')
                }
            })
            .catch( (err) => {
                swal('Error', 'some error in data','error')
            })
    )
}


export const startLoginUser = (userData, redirect, handleServerErrors, onSubmitProps) => {
    return (dispatch) => {
        axios.post('/api/users/login', userData)
           .then( (res) => {
                const result = res.data
                console.log(result)
                if(result.hasOwnProperty('errors')){
                    handleServerErrors(result)
                } else {
                   
                    swal('Successfully', 'Logged In', 'success')
                    localStorage.setItem('token', result.token)
                    dispatch(setLoginStatus())
                    dispatch(startGetUserDetails())
                    dispatch(startGetAllCustomers())
                    dispatch(startGetAllProducts())
                    dispatch(startGetAllBills())
                    redirect()
                    onSubmitProps.resetForm()
                    window.location.reload()

                   
                }
            })
            .catch( (err) => {
                 swal('Error', 'some error in data','error')
            })
    }
}

export const startGetUserDetails = () => {
    return(dispatch) => {
        axios.get('api/users/account')
        .then((res) => {
            const userInfo = res.data
            dispatch({ type : 'SET_ACCOUNT_INFO' , payload: userInfo})
            //setUser(result)
        })
        .catch((err) => {
            swal('Error', 'some error in data','error')
        })
    }
}

export const setLoginStatus = () => {
    return {
        type: 'LOGIN_SUCCESS'
    }
}


export const resetLogInStatus = () => {
    return {
        type: 'RESET_LOGIN'
    }
}

export const resetAccountInfo = () => {
    return {
        type : 'RESET_ACCOUNT_INFO'
    }
}
