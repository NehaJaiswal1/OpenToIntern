
const express = require("express")
const mongoose = require("mongoose")
const app = express()
const route = require('./router/router')


app.use(express.json());


mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://nehajaiswal:neha123@nehadb.pcorgpc.mongodb.net/OpenToIntern", {
    useNewurlParser: true
})
    .then(() => console.log("mongoose is connected"))
    .catch(err => console.log(err))

app.use('/', route)

app.listen(3001, function () {
    console.log("Express app running on port " + (3001))
});






















































