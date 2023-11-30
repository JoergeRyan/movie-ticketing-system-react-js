import { async } from "q";

const {axiosInstance } = require("axios");

// //Register new user
 function RegisterUser(payload){
    const register = async() => {
        try {
            const response = await axiosInstance.post("http://localhost:5000/api/users/register",payload);
            return response.data;
          } catch(error) {
             return error.response;
          }
    }
  register();
};

// //Login a user

// export const LoginUser = async(payload) =>{
//   try{
//    const response = await axiosInstance.post("/api/users/login", payload);
//    return response.data;
//   } catch(error) {
//      return error.response;
//   }
// }

// // Get current user
// export const GetCurrentUser = async () => {
//   try {
//       const response = await axiosInstance.get("/api/users/get-current-user");
//       return response.data;
//   } catch (error) {
//       return error;
//   }
// }

export default RegisterUser;