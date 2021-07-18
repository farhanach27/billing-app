import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import '../commons/Forms.css'
import { useDispatch} from 'react-redux';
import { Link} from 'react-router-dom';
import { startRegisterUser } from '../../actions/userAuthActions';
import TextField from '../commons/TextField';
import TextArea from '../commons/TextArea';



const Register  = (props) => {

    const dispatch = useDispatch();

    const validate = Yup.object({
        username: Yup.string()
            .max(15,'must be 15 characters or less')
            .required('Required'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .required('Password is required')
    })

   

    return (
        <div className='register-form'>
            <Formik 
                initialValues={{
                    username: '',
                    email: '',
                    password: '',
                    businessName: '',
                    address: ''
                }}
                validationSchema={validate}
                onSubmit={values => {
                    dispatch(startRegisterUser(values, props.history))
                    console.log('Register Form', values)
                }}
            >
                {formik => (

                    <div className='form-group'>
                        <h3><center>Sign Up</center></h3>
                        <Form>
                            <TextField label='UserName' name='username' type='text'/>
                            <TextField label='Email' name='email' type='email'/>
                            <TextField label='Password' name='password' type='password'/>
                            <TextField label='Business Name' name='businessName' type='text'/>
                            <TextArea label='Address' name='address'/>
                            <button className='btn btn-primary mt-3' type='submit'> Register </button>
                        </Form>
                        <br/>
                        <center><p>Already have an account? <Link to='/'>Log in</Link></p></center>
                    </div>
                )}
            </Formik>
        </div>  
        
    )
}

export default Register;
