const initialState = {user: null}

export default function mainReducer(state = initialState, action) {
    if(action.type  === "addUserInfo"){
        state.user.push(action.user);
        console.log("Action: " + action.type + " , data: " + action.user)}
    return state;
}