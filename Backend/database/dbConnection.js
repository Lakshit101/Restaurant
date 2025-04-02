import mongoose from 'mongoose';
export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName:"RESTAURANT",
    })
    .then(()=>{
        console.log(`Database connected Successfully`);
    })
    .catch((err)=>{
         console.log(`Some error has been occured ${err}`)
    }) ;
};