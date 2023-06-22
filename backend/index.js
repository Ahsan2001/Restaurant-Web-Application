const express = require('express')
const cors = require("cors");
const app = express()

//bodyAllow
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// for cors origin allow all 
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

const dotenv = require("dotenv");
dotenv.config( { path: './config.env'} );



// get database from mongoDB Server 
require("./database/config")

const port =  process.env.PORT ||  4000 ;
// routing call
// const orderRoutes = require("./routes/order")
const foodRouter = require("./routes/food")
const authRouter = require("./routes/auth")


app.use(authRouter);
app.use(foodRouter);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.post('/', (req, res) => {
//   res.send('Got a POST request')
// })

// app.put('/user', (req, res) => {
//   res.send('Got a PUT request at /user')
// })

// app.delete('/user', (req, res) => {
//   res.send('Got a DELETE request at /user')
// })






const server = app.listen(process.env.PORT, () => {
  console.log(`server is running on http://localhost:${process.env.PORT}`);
})

// Handle Unhandled Promise rejections
process.on('unhandledRejection', err => {
  console.log(`ERROR: ${err.stack}`);
  console.log('Shutting down the server due to Unhandled Promise rejection');
  server.close(() => {
      process.exit(1)
  })
})