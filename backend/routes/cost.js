const express = require('express')
const router = express.Router()

const costData = [
  { date: 'Jan 1', cost: 100, service: 'EC2' },
  { date: 'Jan 2', cost: 105, service: 'EC2' },
  { date: 'Jan 3', cost: 98,  service: 'EC2' },
  { date: 'Jan 4', cost: 110, service: 'EC2' },
  { date: 'Jan 5', cost: 850, service: 'EC2' },
  { date: 'Jan 6', cost: 102, service: 'EC2' },
  { date: 'Jan 7', cost: 95,  service: 'EC2' },
  { date: 'Jan 8', cost: 108, service: 'EC2' },
  { date: 'Jan 9', cost: 99,  service: 'EC2' },
  { date: 'Jan 10', cost: 115, service: 'EC2' },
]

router.get('/', (req, res) => {
  res.json({ success: true, data: costData })
})

module.exports = router