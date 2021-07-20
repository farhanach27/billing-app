import { useSelector } from "react-redux";
import CustomerItem from "./CustomerItem";


const CustomerListing = () => {

    const customers = useSelector(state => state.customers);

    const tableStyle = {
        padding:'10px',
        paddingTop:'30px',
        backgroundColor:'white',
        boxShadow: '0 5px 5px -5px #888888'
    }

    return (
        <div>
            <h4 className='text-center'>No of Customer's - {customers.length} </h4>
            <div className='table-responsive' style={tableStyle}>
                <table border={1} className='table table-striped'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                       </thead>
                       <tbody>
                            {customers.map((customer, i) => {
                                return <CustomerItem key={i} index={i+1} customer={customer} />
                            })}
                       </tbody>
                </table>
                </div>
            
        </div>
    )
}

export default CustomerListing;