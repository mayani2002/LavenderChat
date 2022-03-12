import User from "../model/user.js";


export const addUser = async (request, response) => {

    try{

        let exist = await User.findOne({googleId: request.body.googleId});

        if(exist){
            response.status(200).json('user already exists!');
            return;
        }
        const newUser = new User( request.body );
        await newUser.save();
        response.status(200).json('user added sucessfully!!');
    
    }catch{
        response.status(500).json(error);
    }

}

export const getUsers = async (request, response) => {
    try {
        // find function is used here to get all the users from db
        const users = await User.find({});
        response.status(200).json(users);
    }catch(error){ 
        // HTTP status code 50bh0 is a generic error response
        response.status(500).json(error);
    }
}