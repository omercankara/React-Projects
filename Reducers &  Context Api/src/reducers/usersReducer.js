// state işlemlerim
//state içindeki userslara action içinden gelen dataları aktar
//arama  bittikten sonra loading işlemini false yap
const UsersReducer = (state, action) => {
    switch (action.type) {
        case "SEARCH_USERS":
            return {
                ...state,
                users: action.users,
                loading: false
            }
        case "SET_LOADING":
            return {
                ...state,
                loading: true
            }
        case "CLEAR_USERS":
            return {
                ...state,
                users: [],
                loading: false
            }
        default:
            return state;
    }
}

export default UsersReducer;
