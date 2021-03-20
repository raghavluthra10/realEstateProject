
export default ( state, action ) => {
    switch(action.type) {
        case 'searchInfo':
            return {
                ...state,
                info: action.payload
            }
        default:
            return state;
    }
}