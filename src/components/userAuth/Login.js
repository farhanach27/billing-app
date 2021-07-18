import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import '../commons/Forms.css'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect} from 'react-router-dom';
import TextField from '../commons/TextField';
import { startLoginUser } from '../../actions/userAuthActions';


const Login  = (props) => {

    const dispatch = useDispatch();

    

    const validate = Yup.object({
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .required('Password is required')
    })

   

    return (
        <div className='login-form'>
            <Formik 
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={validate}
                onSubmit={values => {
                    dispatch(startLoginUser(values, props.history));
                }}
            >
                {formik => (

                    <div className='form-group'>
                        <h3><center>Log In</center></h3>
                        <Form>
                            <TextField label='Email' name='email' type='email'/>
                            <TextField label='Password' name='password' type='password'/>
                            <button className='btn btn-primary mt-3' type='submit'> Log in </button>
                        </Form>
                        <br/>
                        <center><p>Don't have an account? <Link to='/register'>Register</Link></p></center>
                    </div>
                )}
            </Formik>
        </div>  
        
    )
}

export default Login;
