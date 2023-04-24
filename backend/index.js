const express = require('express')
const app = express()
const port = 9000

// get database from mongoDB Server 
require("./database/config")


// security intailizing 
const dotenv = require("dotenv");
dotenv.config( { path: './config.env'} );

//bodyAllow
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// routing call
// const foodRoutes = require("./routes/food")
// const orderRoutes = require("./routes/order")
const userRoutes = require("./routes/user")

// app.use('/food', foodRoutes)
// app.use('/order', orderRoutes)
app.use('/user', userRoutes)





// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.post('/', (req, res) => {
//   res.send('Got a POST request')
// })

// app.put('/user', (req, res) => {
//   res.send('Got a PUT request at /user')
// })

// app.delete('/user', (req, res) => {
//   res.send('Got a DELETE request at /user')
// })




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})