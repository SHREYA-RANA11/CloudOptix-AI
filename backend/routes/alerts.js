const express = require('express')
const router = express.Router()

const alerts = [
  { id: 1, service: 'EC2', date: 'Jan 5, 2026', normal: 105, detected: 850, severity: 'high' },
  { id: 2, service: 'Lambda', date: 'Jan 12, 2026', normal: 40, detected: 310, severity: 'medium' },
]

router.get('/', (req, res) => {
  res.json({ success: true, data: alerts })
})

module.exports = router