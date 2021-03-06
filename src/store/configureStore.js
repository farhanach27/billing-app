import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import accountInfoReducer from '../reducers/accountInfoReducer';
import billsReducer from '../reducers/billsReducer';
import customersReducer from '../reducers/customersReducer';
import loginStatusReducer from '../reducers/loginStatusReducer';
import productsReducer from '../reducers/productsReducer';

const configureStore = () => {
    const store = createStore(combineReducers({
        loginStatus : loginStatusReducer,
        accountInfo : accountInfoReducer,
        customers : customersReducer,
        products : productsReducer,
        bills : billsReducer
    }), applyMiddleware(thunk))

    return store
}

export default configureStore;