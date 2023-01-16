import * as userTypes from './user.types';

const USER_INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state= USER_INITIAL_STATE, action) => {
    const {type , payload} = action;

    switch(type) {
        case userTypes.SET_CURRENT_USER: 
            return {...state, currentUser: payload};
        default: 
            return state;
    }
}

export default userReducer;
