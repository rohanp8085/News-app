const BusinessReducer = (state,action) => {

    switch(action.type){

          case "GET_BUSINESS" :
            return{
                ...state,
                BusinessNews : action.payload
            }

        default:
        return state
    }

}
export default BusinessReducer