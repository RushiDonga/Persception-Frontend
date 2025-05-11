import {axiosInstance} from './axiosInstance';
import { handleErrorV2 } from './handleError';

export const textToImageApi = async (payload, accessToken, setError) => {

    return await axiosInstance.post(
        '/ai/text-to-image',
        payload,
        {
            headers : {
                Authorization: `Bearer ${accessToken}`
            }
        }
    ).then(res => {

        if(res.status !== 200)
            throw Error('Server Error, Please try again later')

        setError(() => null);
        return res.data;
    }).catch(error => {
        handleErrorV2(error, setError);
    })
}
