import mongoose from "mongoose";
export const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://shreysadhukhan21:shreysadhukhan21@cluster0.p9zodp3.mongodb.net/blog-app-gu"
  );
  console.log("Database connected");
};
