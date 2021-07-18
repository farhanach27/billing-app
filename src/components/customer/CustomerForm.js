import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import '../commons/Forms.css'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect} from 'react-router-dom';
import TextField from '../commons/TextField';
import { startAddCustomer, startUpdateCustomer } from '../../actions/customerActions';
import { Modal } from 'react-bootstrap';


const CustomerForm  = ({type, customer, onHide}) => {

    const dispatch = useDispatch();
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    

    const validate = Yup.object({
        name: Yup.string()
            .max(15,'must be 15 characters or less')
            .required('Required'),
        mobile: Yup.string()
            .required("required")
            .matches(phoneRegExp, 'Phone number is not valid')
            .min(10, "less then 10 digits")
            .max(10, "more then 10 digits")
            .required('Mobile number is required'),
        email: Yup.string()
            .email('Email is invalid'),
    })

   

    return (
        <div>
            { type === 'editForm' ? (
                <Formik 
                    initialValues={{
                        name: customer.name,
                        mobile: customer.mobile,
                        email: customer.email
                    }}
                    validationSchema={validate}
                    onSubmit={(values, onSubmitProps) => {
                        // console.log('CustomerForm', values)
                        dispatch(startUpdateCustomer(customer._id, values));
                        onHide();
                    }}
                >
                    {formik => (
                    
                        <div className='form-group'>
                            <Form>
                                <TextField label='Name' name='name' type='text'/>
                                <TextField label='Mobile' name='mobile' type='text'/>
                                <TextField label='Email' name='email' type='email'/>
                                <br/>
                                <Modal.Footer>
                                    <button className='btn btn-primary' type='submit'> Update </button>
                                    <button className='btn btn-dark' type='reset' onClick={onHide}>Close</button>
                                </Modal.Footer>
                            </Form>
                        </div>
                    )}
                </Formik>
            ) : (
                <div className='row'>
                    <Formik 
                        initialValues={{
                            name: '',
                            mobile: '',
                            email: ''
                        }}
                        validationSchema={validate}
                        onSubmit={(values, onSubmitProps) => {
                            // console.log('CustomerForm', values)
                            dispatch(startAddCustomer(values));
                            onSubmitProps.resetForm();
                        }}
                    >   
                        {formik => (

                            <div className='form-group customer-form'>
                                <Form>
                                    <TextField label='Name' name='name' type='text'/>
                                    <TextField label='Mobile' name='mobile' type='text'/>
                                    <TextField label='Email' name='email' type='email'/>
                                    <button className='btn btn-primary mt-3' type='submit'> Add </button>
                                </Form>
                            </div>
                        )}
                    </Formik>
                </div>
                
            )}
            
        </div>  
        
    )
}

export default CustomerForm;
