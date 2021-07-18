import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";


const ProductListing = () => {

    const products = useSelector(state => state.products);

    return (
        <div>
            <h4>No of product's - {products.length} </h4>
            <div className='table-responsive'>
                <table border={1} className='table table-striped'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                       </thead>
                       <tbody>
                            {products.map((product, i) => {
                                return <ProductItem key={i} index={i+1} product={product} />
                            })}
                       </tbody>
                </table>
                </div>
            
        </div>
    )
}

export default ProductListing;