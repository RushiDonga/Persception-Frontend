const setErrorData = (statusCode, message, setError) => {
    setError(() => (
        {
            status: statusCode,
            message: message
        }
    ));
}

export const handleError = (error) => {

    if(error.response){
        const status = error.response.status;

        if(status >= 400 && status <500){
            throw Error(error.response.data);
        }else if(status >= 500){
            throw Error('Server Error, Please try again later!')
        }
    }else if(error.request){
        throw Error('No response from Server. Please check your Internet Connection.');
    }else{
        throw Error('An Unexpected Error Occurred');
    }
}

export const handleErrorV2= (error, setError) => {
    if(error.response){
        const statusCode = error.response.status;

        if(statusCode >= 400 && statusCode < 500){
            setErrorData(statusCode, error.response.data.message, setError);
        }else if(statusCode >= 500){
            setErrorData(500, 'Server Error, Please try again later!', setError);
        }
    }else if(error.request){
        setErrorData(503, 'No response from Server. Please check your Internet Connection.', setError)
    }else{
        setErrorData(520, 'An Unexpected Error Occurred', setError)
    }
}