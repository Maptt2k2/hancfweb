import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import productRouter from './routers/productRouter.js'
import userRouter from './routers/userRouter.js'
import 'dotenv/config'
import categoryRouter from './routers/categoryRouter.js'
import cartItemsRouter from './routers/cartItemsRouter.js'
import User from './models/userModel.js'

// app connfig
const app = express()
const port = 8888

//middelware
app.use(express.json())
app.use(cors())

//db connect
connectDB();

//api endpoints
app.use("/api/product",productRouter)
app.use("/api/user",userRouter)
app.use("/api/category",categoryRouter)
app.use("/api/cartItem", cartItemsRouter)
app.use("/images", express.static('uploads'))

// app router
app.get("/", (req,res)=> {
    res.send("Initial Success")
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})

