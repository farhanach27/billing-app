const customersInitialState = []

const customersReducer = (state = customersInitialState, action) => {
    switch (action.type) {
        case 'GET_ALL_CUSTOMERS' : {
            return [...action.payload]
        }
        case 'ADD_CUSTOMER' : {
            return [...state,{...action.payload}]
        }
        case 'REMOVE_CUSTOMER' : {
             return state.filter((ele) => {
                return ele._id !== action.payload._id
            })
        }
        case 'UPDATE_CUSTOMER' : {
            return state.map((ele) => {
                if(ele._id === action.payload._id){
                    return {...ele, name: action.payload.name, mobile: action.payload.mobile, email: action.payload.email}
                }
                else {
                    return {...ele}
                }
            })
        }
        default : {
            return [...state]
        }
    }
}

export default customersReducer;