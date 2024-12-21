import dotenv from "dotenv";
import connectDB from "../db/index.js";
import { app } from "./app.js";
dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });

/*
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
*/
