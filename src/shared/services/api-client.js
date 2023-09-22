//Backend calls
//CRUD
import axios from "axios"


export const apiClient={
    async get(URL,data){
        //Promise state --> pending, fullfilled, rejected
        try {
            const response=await axios.post(URL,data)
            return response;
         } catch (error) {
             console.log("Error in client-login",error)
         }
    },
    async post(URL,data){
        try {
            const response=await axios.post(URL,data)
            return response;
         } catch (error) {
             console.log("Error in client-register",error)
         }
    },
    put(){

    },
    delete(){

    }
}