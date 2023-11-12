

const reducer = (state, action) => {
    switch (action.type) {
        case "CLOSE":
            return {
                ...state,
                menuflag: action.payload.menuflag
            }
        case "OPEN":
            return {
                ...state,
                menuflag: action.payload.menuflag
            }
        case "FETCHSERVICES":
            return {
                ...state,
                services: action.payload.services
            }
        default:
            return state
    }
}

export default reducer;