import axios from "axios";
import { AppError } from "../utils/AppError";
import { View, Button } from "react-native";

const SERVER_URL = "192.168.1.14"
const api = axios.create({
    baseURL: SERVER_URL
});

api.interceptors.response.use(
    (response) => {
        if(response.data.status !== undefined && response.data.status !== 200){
            return Promise.reject(new AppError(response.data.message))
        }
        return response
    },
    (error) => {
        if (error.response && error.response.data){
            console.log(error.message)
            return Promise.reject(new AppError(error.data.message))
        } else {
            return Promise.reject(new AppError(error))
        }
    }
)

export { api }