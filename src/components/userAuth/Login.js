import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import '../commons/Forms.css'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect} from 'react-router-dom';
import TextField from '../commons/TextField';
import { startLoginUser } from '../../actions/userAuthActions';


const Login  = (props) => {
    const[serverErrors, setServerErrors] = useState({})

    const dispatch = useDispatch();

    useEffect (() => {
        const timeout = setTimeout(() => {
             setServerErrors({})
        }, 15000);
        
    },[serverErrors]);
    


    const validate = Yup.object({
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .required('Password is required')
    })

   

    return (
        <div className='container'>
            <div className='row'>
            <Formik 
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={validate}
                onSubmit={(values, onSubmitProps) => {
                    const handleServerErrors = (err) =>{
                        setServerErrors(err)
                    }
                    dispatch(startLoginUser(values, props.history, handleServerErrors));
                    onSubmitProps.resetForm();
                }}
            >
                {formik => (

                    <div >
                        <div className='col-sm-6'>
                        <h3>Sign Up with Us and find solution for your  Business</h3>
                        </div>
                        
                        <div className='form-group login-form col-sm-6'>
                            <h3><center>Log In</center></h3>

                            <Form>
                                <TextField label='Email' name='email' type='email'/>
                                <TextField label='Password' name='password' type='password'/>
                                <button className='btn btn-primary mt-3' type='submit'> Log in </button>
                                {serverErrors.hasOwnProperty('errors') &&
                                    <>
                                        <p className='mt-3 text-center error'>{serverErrors.errors}</p>  
                                    </>
                                }                       
                            </Form>
                            <br/>
                            <center><p>Don't have an account? <Link to='/register'>Register</Link></p></center>
                        </div>
                    </div>
                )}
            </Formik>
            </div>
            
        </div>  
        
    )
}

export default Login;
