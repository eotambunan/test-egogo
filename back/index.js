const express = require("express");
const app = express();
const PORT = 3000;
const cors = require('cors')
 

app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))
// cors
app.use(cors())

// router
const router = require('./router/router')
app.use(router)

// mongoose
const mongoose = require("./config/db.config")
mongoose()



app.listen(PORT, () => {
    console.log(`server running on port : ${PORT}`);
});
