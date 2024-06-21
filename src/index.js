import mongoose from "mongoose";
import { DB_NAME } from "./constant";
import express from "express";

const app = express(); //22:41
(async () => {
  //IFEE function
  try {
    await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
    app.on("error", (err) => {
      console.log("Error app on", err);
      throw err;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is running on PORT ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("ERROR", error);
  }
})();
