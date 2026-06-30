const express = require('express')
const axios = require('axios')
const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const { cpu, memory, cost, network, storage } = req.body
    const response = await axios.post(`${process.env.AI_ENGINE_URL}/analyze`, {
      cpu, memory, cost,
      network: network || 5,
      storage: storage || 100
    })
    res.json({ success: true, data: response.data })
  } catch (err) {
    console.error(err.message)
    res.status(500).json({ success: false, error: 'AI engine error' })
  }
})

module.exports = router