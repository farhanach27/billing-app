const productsInitialState = []

const productsReducer = (state = productsInitialState, action) => {
    switch (action.type) {
        case 'GET_ALL_PRODUCTS' : {
            return [...action.payload]
        }
        case 'ADD_PRODUCT' : {
            return [...state,{...action.payload}]
        }
        case 'REMOVE_PRODUCT' : {
             return state.filter((ele) => {
                return ele._id !== action.payload._id
            })
        }
        case 'UPDATE_PRODUCT' : {
            return state.map((ele) => {
                if(ele._id === action.payload._id){
                    return {...ele, name: action.payload.name, price: action.payload.price }
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

export default productsReducer;