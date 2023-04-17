const IplReducer = (state,action) => {

    switch(action.type){

        case "GET_IPL" :
            return{
                ...state,
                IplNews : action.payload
            }

        default:
        return state
    }

}
export default IplReducer