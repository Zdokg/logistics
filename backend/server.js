const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const signupRoutes = require("./routes/signup");
const loginRoutes = require("./routes/login");
const fleet = require("./routes/Fleet");
const ship = require("./routes/Shipments");

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

connectDB();


app.use("/API", signupRoutes);
app.use("/API", loginRoutes);
app.use("/API", fleet);
app.use("/API", ship);

app.listen(PORT, () => {
  console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});
