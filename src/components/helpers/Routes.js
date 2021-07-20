import { useSelector } from "react-redux";
import { Switch, Route } from "react-router";
import { Link, Redirect } from "react-router-dom";



import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Dashboard from "../dashboard/Dashboard";
import Login from "../userAuth/Login";
import Register from "../userAuth/Register";
import Account from "../Account";
import CustomerContainer from "../customer/CustomerContainer";
import ProductContainer from "../product/ProductContainer";
import CartContainer from "../cart/CartContainer";
import BillContainer from "../bill/BillContainer";


const Routes = () => {

    const loginStatus = useSelector((state) => {
        return state.loginStatus;
    })

    return ( 
        <div>

            <Switch>
                <PublicRoute path='/' component={Login} exact={true} />
                <PublicRoute path='/register' component={Register} exact={true}/>
                <PrivateRoute path='/dashboard' component={Dashboard} exact={true} />                
                <PrivateRoute path='/account' component={Account} exact={true}/>
                <PrivateRoute path='/customers' component={CustomerContainer} exact={true}/>
                <PrivateRoute path='/products' component={ProductContainer} exact={true}/>
                <PrivateRoute path='/cart' component={CartContainer} exact={true}/>
                <PrivateRoute path='/bills' component={BillContainer} exact={true}/>
            </Switch>
        </div>
            
    )
}

export default Routes;