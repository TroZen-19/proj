/*const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./db/connectDB")
const cloudinary = require("cloudinary");

// Handling Uncaught Execption => anything not defind Uncaught Execption 

process.on("uncaughtException" , (err) =>{
    console.log(`Error , ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
})


//config =>
 dotenv.config({path : "backend/config/config.env"})
// Connect With MongoDB
connectDB();


// conncet with cloudinary

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${process.env.PORT}`);
});

// Unhandled Promise Rejection  => server issue
process.on("unhandledRejection" , (err) =>{ 
    console.log(`Error : ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
// if there any issue occures eg : broken host link eg : then return msg and server will close
server.close(() =>{
    process.exit(1);
})
    
})
*/
const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./db/connectDB");
const cloudinary = require("cloudinary");

// Handling Uncaught Exceptions
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
});

// Load environment variables
dotenv.config({ path: "backend/config/.env" });

// Connect to MongoDB
connectDB();

// Connect with Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

const PORT = 80;

const server = app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});

// Unhandled Promise Rejections
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
    server.close(() => {
        process.exit(1);
    });
});
