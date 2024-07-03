import mongoose from "mongoose";

export const connectDatabase = async () => {
  await mongoose
    .connect(
      "mongodb+srv://foodDelivary:tbIDI6Fuy2aQeggv@gql.oxxl7ma.mongodb.net/?retryWrites=true&w=majority&appName=gql"
    )
    .then(console.log("Database connect"));
};
