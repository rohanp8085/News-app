import { createContext, useReducer } from "react";
import BusinessReducer from "./BusinessReducer";


const BusinessContext = createContext()

export const BusinessProvider = ({ children }) => {

    const initialState = {
        BusinessNews : [{"source":{"id":"the-times-of-india",
        "name":"The Times of India"},
        "author":"ET Online",
        "title":"Festive mood: Malti Marie enjoys 1st Easter with mum Priyanka Chopra; Upasana Kamineni shares glimpse of celebration",
        "description":"Kareena Kapoor Khan also shared a glimpse of her Easter bunnies.",
        "url":"https://economictimes.indiatimes.com/magazines/panache/festive-mood-malti-marie-enjoys-1st-easter-with-mum-priyanka-chopra-upasana-kamineni-shares-glimpse-of-celebration/articleshow/99369324.cms",
        "urlToImage":"https://img.etimg.com/thumb/msid-99370256,width-1070,height-580,imgsize-88746,overlay-etpanache/photo.jpg",
        "publishedAt":"2023-04-10T05:10:39Z",
        "content":"Sunday marked Easter, the resurrection of Jesus Christ. Many thronged the churches and offer prayers on this auspicious day. People love indulging in special food made with eggs, ham and buns on East… [+2558 chars]"
       }]
    }
    
    const [state,dispatch] = useReducer(BusinessReducer , initialState)

    return (
        <BusinessContext.Provider value={{
            ...state,
            dispatch
            }}>
            {children}
        </BusinessContext.Provider>
    )

}
export default BusinessContext