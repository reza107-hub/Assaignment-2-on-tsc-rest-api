import app from "./app";
import mongoose from "mongoose";
import config from "./app/config/index";

// async function main() {
//   try {
//     await mongoose.connect(config.DATABASE_URL as string);
//     app.listen(config.PORT, () => {
//       console.log(`Server is listening on port ${config.PORT}`);
//     });
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   }
// }

// main();

const PORT = process.env.PORT || 3000;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.DATABASE_URL as string);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

//Routes go here
app.all("*", (req, res) => {
  res.json({ "every thing": "is awesome" });
});

//Connect to the database before listening
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("listening for requests");
  });
});
