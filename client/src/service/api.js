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

export const getUsers = async () => {
    try{
        let response = await axios.get(`${URL}/users`);
        console.log(response.data);
        return response.data;
    }catch (error){
        console.log('Error while calling getUsers api', error);
    }
}