import axios from 'axios';

const URL ='http://localhost:8000';

export const addUser = async (data) => {
    try{
        console.log('reached inside addUser function!');
        return await axios.post(`${URL}/add`,data);
    }catch (error){
        console.log('Error while calling addUser api', error);
    }
}
