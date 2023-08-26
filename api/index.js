const express = require("express");
const app =express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");
const User = require("./models/User");
const UserService = require("./service/service"); 
const cors = require("cors")
module.exports = UserService(User);

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
   
}).then(()=>console.log("DB Connection Successful!"))
.catch((err) => console.error(err));


app(cors());
app.use(express.json());
  
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);

app.listen(7700, ()=> {
    console.log("Backend server is running!");
});