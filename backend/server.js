import express from 'express'
import { config } from 'dotenv'
import colors from 'colors'
import { notFound, errorHandler } from './middelware/errorMiddelware.js'
import productRoutes from './routes/productsRoute.js'
import userRoutes from './routes/userRoutes.js'
import connectDB from './config/db.js'
const app = express()

app.use(express.json())

config()

connectDB()

// routes

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT, () =>
  console.log(
    `server running in ${process.env.NODE_ENV} mode on port : ${PORT}`.yellow
      .bold
  )
)
