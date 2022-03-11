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