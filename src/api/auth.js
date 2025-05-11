import { axiosInstance } from "./axiosInstance";
import axios from "axios";
import { handleError, handleErrorV2 } from "./handleError";

// createdUsing: email || google
export const signIn = async (email, password, setError, createdUsing) => {

    let payload = {
        email: email,
        signIn_type: createdUsing
    }

    if(createdUsing === 'email'){
        payload.password = password
    }

    return await axiosInstance.post(
        '/auth/signin', 
        payload,
    ).then(res => {

        if(res.status !== 200){
            throw Error('Server Error, Please try again later');
        }
        setError(() => null);
        return res.data;
    }).catch(error => {
        handleErrorV2(error, setError);
    })
}

export const handleSignUp = async (data, createdUsing, setError) => {

    let payload = {
        email: data.email,
        created_using: createdUsing,
    }

    if(createdUsing === "google"){
        payload.name = data.name ? data.name : 
            data.given_name ? data.given_name :
            data.family_name ? data.family_name : 
            data.email ? data.email : ""
    }

    return await axiosInstance.post(
        '/auth/signup',
        payload
    ).then(res => {

        if(res.status !== 200){
            throw Error('Server Error, Please try again later');
        }
        setError((prev) => null);
        return res.data;
    }).catch(error => {
        handleError(error);
    }).catch(error => {
        setError((prev) => error.message);
    })
}

export const googleAuth = async (accessToken) => {
    return await axios.get(
        'https://www.googleapis.com/oauth2/v3/userinfo',
        {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }
    ).then(res => {
        return res.data;
    }).catch(error => {
        handleError(error);
    })
}