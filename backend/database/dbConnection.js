import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MOGO_URI, {
        dbName: "RESTAURANT",
    })
    .then(() => {
        console.log("Connected to database succesfully!");
    })
    .catch((err) => {
        console.log(`Some error occured while connedting to database! ${err}`);
    });
};