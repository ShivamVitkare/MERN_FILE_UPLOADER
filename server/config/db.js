import mongoose from "mongoose";

const connectToDb = async () => {
  try {
    const res = await mongoose.connect(
      "mongodb://127.0.0.1:27017/FileUpload"
    );
    if (res) {
      console.log("connected succesfuly");
    }
  } catch (error) {
    console.log(error);
  }
};

export default connectToDb;
