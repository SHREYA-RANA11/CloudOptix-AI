const express = require('express')
const router = express.Router()

const recommendations = [
  { id: 1, resource: 'EC2-001', cpu: 8, memory: 25, cost: 120, issue: 'CPU usage only 8%, Memory 25%', suggestion: 'Downsize to t3.small', saving: '$60/mo' },
  { id: 2, resource: 'RDS-002', cpu: 5, memory: 18, cost: 200, issue: 'Database idle 70% of time', suggestion: 'Switch to reserved instance', saving: '$80/mo' },
  { id: 3, resource: 'S3-Bucket-05', cpu: 0, memory: 0, cost: 50, issue: 'No access in 90 days', suggestion: 'Move to Glacier storage tier', saving: '$30/mo' },
]

router.get('/', (req, res) => {
  res.json({ success: true, data: recommendations })
})

module.exports = router