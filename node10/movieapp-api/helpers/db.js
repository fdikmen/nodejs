const mongoose = require("mongoose");
module.exports = () => {
  mongoose.connect(
    "mongodb+srv://dbUser:dbUserPass@clusternodejs.i0tbc.mongodb.net/movieappdbUSA",
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  mongoose.connection.on("open", () => {
    console.log("MongoDB: Connected Success!");
  });
  mongoose.connection.on("error", (err) => {
    console.log("MongoDB: Connection Failed:", err);
  });
};
