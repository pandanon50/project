import "./db";
import app from "./app";
import dotenv from "dotenv";

dotenv.config();

import "./models/Meet";
import "./models/Member";
import "./models/User";

app.listen(process.env.PORT, () => {
  console.log(`✔ Connected to localhost:${process.env.PORT}`);
});
