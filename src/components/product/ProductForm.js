import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import '../commons/Forms.css'
import { useDispatch } from 'react-redux';
import TextField from '../commons/TextField';
import { Modal } from 'react-bootstrap';
import { startAddProduct, startUpdateProduct } from '../../actions/productsActions';


const ProductForm  = ({type, product, onHide}) => {

    const dispatch = useDispatch();
    
    const validate = Yup.object({
        name: Yup.string()
            .max(15,'must be 15 characters or less')
            .required('Required'),
        price: Yup.string()
            .required('Price is required. Must be more than 0'),
    })

   

    return (
        <div>
            { type === 'editForm' ? (
                <Formik 
                    initialValues={{
                        name: product.name,
                        price: product.price,
                    }}
                    validationSchema={validate}
                    onSubmit={(values, onSubmitProps) => {
                        // console.log('CustomerForm', values)
                        dispatch(startUpdateProduct(product._id, values));
                        onHide();
                    }}
                >
                    {formik => (
                    
                        <div className='form-group'>
                            <Form>
                                <TextField label='Name' name='name' type='text'/>
                                <TextField label='Price' name='price' type='number'/>
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
                            price: ''
                        }}
                        validationSchema={validate}
                        onSubmit={(values, onSubmitProps) => {
                            // console.log('CustomerForm', values)
                            dispatch(startAddProduct(values));
                            onSubmitProps.resetForm();
                        }}
                    >   
                        {formik => (

                            <div className='form-group product-form'>
                                <Form>
                                    <TextField label='Name' name='name' type='text'/>
                                    <TextField label='Price' name='price' type='number'/>
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

export default ProductForm;
