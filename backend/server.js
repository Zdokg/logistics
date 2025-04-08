const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const app = express();
const Road = require("./routes/signup");
const Route = require("./routes/login");
const authRoutes = require("./routes/authRoutes");


app.use(express.json());
app.use(cors());
connectDB();
app.use("/API" ,Road);
app.use("/API", Route);
app.use("/API", authRoutes);
app.use(cors({ origin: "http://localhost:3000" }));


app.listen(5000, () => console.log("Serveur en écoute sur http://localhost:5000"));