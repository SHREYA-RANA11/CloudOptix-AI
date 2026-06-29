const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/cost', require('./routes/cost'))
app.use('/api/recommendations', require('./routes/recommendations'))
app.use('/api/alerts', require('./routes/alerts'))

app.get('/', (req, res) => {
  res.json({ message: 'CloudOptix API running' })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))