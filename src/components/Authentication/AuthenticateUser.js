import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom";

export default function AuthenticateUser({children}) {

    const { userAuth } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if(userAuth === null){
            navigate('/');
        }
    }, [userAuth, navigate]);

    return (
        <>
            {children}
        </>
    )   
}