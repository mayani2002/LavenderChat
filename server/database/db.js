import mongoose from "mongoose";



const Connection = async (username, password, databaseName) => {

    const URL=`mongodb+srv://${username}:${password}@cluster0.0ou7w.mongodb.net/${databaseName}?retryWrites=true&w=majority`;
console.log("inside connection")
    try{
        await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
        console.log('DataBase connected Sucessfully');
    }catch(error){
        console.log('error while connecting to mongoDB',error);
    }

}

export default Connection;