const loginStatusInitialState = false

const loginStatusReducer = (state = loginStatusInitialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS' : {
            return !loginStatusInitialState
        }
        case 'RESET_LOGIN' : {
            return loginStatusInitialState
        }
        default : {
            return state
        }
    }
}

export default loginStatusReducer;