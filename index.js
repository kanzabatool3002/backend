const express = require("express");
const userRoute = require("./routes/users");
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
const port = 9000;


// app.get('/', (req, res) => {
//     res.status(200).send('Hello World!')
// })
// app.post('/', (req, res) => {
//     console.log(req.body);
//     res.status(200).send("OK");
// })

app.use("/user", userRoute);

mongoose.connect('mongodb+srv://raza:raza123@cluster0.07dsfdm.mongodb.net/backend')
    .then(() => console.log('Connected!'))



app.listen(9000, () => {
    console.log(`server is running at ${port}`)
})

// mongodb+srv://<username>:<password>@cluster0.07dsfdm.mongodb.net/
// mongodb+srv://raza:raza123@cluster0.07dsfdm.mongodb.net/