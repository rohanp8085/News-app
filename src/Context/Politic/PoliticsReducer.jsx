const PoliticsReducer = (state,action) => {

    switch(action.type){
  
        case "GET_POLITICS":
            return{
                ...state,
                PoliticsNews : action.payload
            }
         
        default:
        return state
    }

}
export default PoliticsReducer