import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom";

export default function RedirectAuthenticatedUser({children}) {

    const { userAuth } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if(userAuth){
            navigate('/dashboard');
        }
    }, [userAuth, navigate]);

    return (
        <>
            {children}
        </>
    )   
}