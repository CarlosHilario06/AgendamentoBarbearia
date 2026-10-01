import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' })
})

// TODO: Add routes
// app.use('/api/auth', authRoutes)
// app.use('/api/appointments', appointmentRoutes)
// app.use('/api/services', serviceRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
