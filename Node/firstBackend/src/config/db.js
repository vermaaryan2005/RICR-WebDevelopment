import mongoose from "mongoose";

const connncetDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI); //connecting the mongoDB database
    console.log(
        `MongoDB Connected at : ${conn.connection.host}: ${conn.connection.port}`
    );
    console.log("Database Name :", conn.connection.name);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connncetDB;
