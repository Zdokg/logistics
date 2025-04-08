const mongoose = require("mongoose");

async function ConnectDB() {
    try {
        await mongoose.connect("mongodb://localhost:27017/", {
              useNewUrlParser: true,
              useUnifiedTopology: true});
            console.log("Connecté à MongoDB");
          } catch (error) {
            console.error("Erreur de connexion à MongoDB :", error);
            process.exit(1);
    }
}

module.exports = ConnectDB;



// mongodb+srv://lailaaouadi1999:0PWHNLxAGWjUtfCP@cluster0.cnct25b.mongodb.net/