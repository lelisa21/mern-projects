import express from "express"
import dotenv from 'dotenv'
dotenv.config()
import cors from "cors"
import path from 'path'
import { fileURLToPath } from "url"
import  connectDB  from "./config/db.js"
import errorHandler from "./middleware/errorHandler.js"
import authRoute from "./routes/authRoute.js"
import documentRoutes from "./routes/documentRoute.js"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 8000;



connectDB();

// middleware to handle CORS
app.use(
    cors({
        origin:"*",
        methods:["GET" , "POST" , "PUT" , "DELETE"],
        allowedHeaders:["Content-Type" , "Authorization"],
        credentials:true
    })
)
app.use(express.json());
app.use(express.urlencoded({extended:true}))


// static folders for uploads 
app.use('/uploads' , express.static(path.join(__dirname, "uploads")))

// routes
app.use("/api/auth" , authRoute)
app.use("/api/documents" , documentRoutes)


app.use(errorHandler)

// 404 handler
app.use((req, res) => {
   res.status(404).json({
    success: false,
    error:"Route not found",
    statusCode: 404
   }) 
})

app.listen(PORT, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} on port http://localhost:${PORT}/api/auth`)
})

process.on("unhandledRejection" , (err) => {
    console.error(err.message);
    process.exit(1)
})
