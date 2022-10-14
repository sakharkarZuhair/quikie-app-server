import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cryptoRoutes from "./routes/crypto.js";
import cors from "cors";

const app = express();
app.use(bodyParser.json({ limit: "30mb", extented: true }));
app.use(cors());
dotenv.config();

app.use("/crypto", cryptoRoutes);
app.get("/", (req, res) => {
  res.send("Hello Server is Running");
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(
    "mongodb+srv://zuhairSakharkar:captainamerica55443@cluster0.dr6ixll.mongodb.net/crypto",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));

// mongodb://localhost:27017
