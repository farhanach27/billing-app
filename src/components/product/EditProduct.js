import React from 'react'
import { Modal } from "react-bootstrap";
import ProductForm from "./ProductForm";

const EditProduct = ({product, ...props}) => {
    return (
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className='text-center'>
            Edit Product
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProductForm product={product} type='editForm' onHide={props.onHide}/>
        </Modal.Body>
      </Modal>
    );
  }
  
  export default EditProduct;