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
        console.log(response);
        return response.data;
    }catch (error){
        console.log('Error while calling getUsers api', error);
    }
}

export const setConversation = async (data) => {
    try{
        let response = await axios.post(`${URL}/conversation/add`,data);
        console.log(response.data);
        return response.data;
    }catch (error){
        console.log('Error while calling setConversation api', error);
    }
}

export const getConversation = async (data) => {
    try{
        let response = await axios.post(`${URL}/conversation/get`,data);
        console.log(response.data);
        return response.data;
    }catch (error){
        console.log('Error while calling getConversation api', error);
    }
}

export const newMessage = async (data) => {
    try{
        let response = await axios.post(`${URL}/message/add`,data);
        console.log(response.data);

    }catch (error){
        console.log('Error while calling newMessage API', error);
    }
}

export const getMessages = async (id) => {
    try{
        return await axios.get(`${URL}/message/get/${id}`);
    }catch (error){
        console.log('Error while calling getMessage API', error);
    }
}