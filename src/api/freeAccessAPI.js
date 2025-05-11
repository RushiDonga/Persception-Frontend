import {axiosInstance} from './axiosInstance';
import { handleErrorV2 } from './handleError';

export const freeAccessAPI = async (payload, setError) => {

    return await axiosInstance.post(
        '/free/access',
        payload,
    ).then(res => {

        if(res.status !== 200)
            throw Error('Server Error, Please try again later')

        setError(() => null);
        return res.data;
    }).catch(error => {
        handleErrorV2(error, setError);
    })
}
