import express, { Application } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import purchaseRoute from './routes/purchases'
import connectDB from './db/connect'
dotenv.config()

const app: Application = express()
const PORT = 5172

const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200,
}
app.use(cors(corsOptions))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/v1/purchases', purchaseRoute)

const start = async () => {
  try {
    if (!process.env.MONGO_URL) return
    await connectDB(process.env.MONGO_URL)
    app.listen(PORT, () => {
      console.log(`dev server running at: http://localhost:${PORT}/`)
    })
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message)
    } else if (typeof error === 'string') {
      console.log(error)
    } else {
      console.log('unexpected error')
    }
  }
}

start()
