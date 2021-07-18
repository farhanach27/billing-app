
import { Button, Modal } from "react-bootstrap";
import CustomerForm from "./CustomerForm";

const EditCustomer = ({customer, ...props}) => {
    return (
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className='text-center'>
            Edit Customer
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CustomerForm customer={customer} type='editForm' onHide={props.onHide}/>
        </Modal.Body>
      </Modal>
    );
  }
  
  export default EditCustomer;