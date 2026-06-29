import StatCard from '../components/StatCard'
import CostChart from '../components/CostChart'
import RecommendationCard from '../components/RecommendationCard'
import AlertBox from '../components/AlertBox'

const recommendations = [
  { resource: 'EC2-001', issue: 'CPU usage only 8%, Memory 25%', suggestion: 'Downsize to t3.small', saving: '$60/mo' },
  { resource: 'RDS-002', issue: 'Database idle 70% of time', suggestion: 'Switch to reserved instance', saving: '$80/mo' },
  { resource: 'S3-Bucket-05', issue: 'No access in 90 days', suggestion: 'Move to Glacier storage tier', saving: '$30/mo' },
]

const alerts = [
  { service: 'EC2', date: 'Jan 5, 2026', normal: 105, detected: 850 },
  { service: 'Lambda', date: 'Jan 12, 2026', normal: 40, detected: 310 },
]

export default function Dashboard() {
  return (
    <main className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-white mb-6">Dashboard Overview</h1>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <StatCard title="Total Monthly Spend" value="$1,240" subtitle="June 2026" color="blue" />
        <StatCard title="Potential Savings" value="$420" subtitle="AI recommended" color="green" />
        <StatCard title="Anomalies Detected" value="2" subtitle="This month" color="red" />
        <StatCard title="Resources Monitored" value="14" subtitle="Across AWS, GCP" color="purple" />
      </div>

      {/* Chart */}
      <div className="mb-6">
        <CostChart />
      </div>

      {/* Recommendations + Alerts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-white font-semibold mb-3">AI Recommendations</h2>
          <div className="flex flex-col gap-3">
            {recommendations.map((r, i) => (
              <RecommendationCard key={i} {...r} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-white font-semibold mb-3">Anomaly Alerts</h2>
          <div className="flex flex-col gap-3">
            {alerts.map((a, i) => (
              <AlertBox key={i} {...a} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}