export const initialState = {
    currentUser: null,
    currentUserLoading: true,
    currentUserData: null
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload,
                currentUserLoading: false,
            }
        case 'SET_USER_DATA':
            return {
                ...state,
                currentUserData: action.payload,
            }
        default:
            return state;
    }
}
export default reducer