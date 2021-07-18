const accountInfoInitialState = {}

const accountInfoReducer = (state = accountInfoInitialState, action) => {
    switch (action.type) {
        case 'SET_ACCOUNT_INFO' : {
            return {...action.payload}
        }
        case 'RESET_ACCOUNT_INFO' : {
            return accountInfoInitialState
        }
        default : {
            return {...state}
        }
    }
}

export default accountInfoReducer;