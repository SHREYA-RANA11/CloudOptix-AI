import { useEffect, useState } from 'react'
import StatCard from '../components/StatCard'
import CostChart from '../components/CostChart'
import RecommendationCard from '../components/RecommendationCard'
import AlertBox from '../components/AlertBox'
import AIAnalyzer from '../components/AIAnalyzer'
import { getCostData, getRecommendations, getAlerts } from '../services/api'

export default function Dashboard() {
  const [costData, setCostData] = useState([])
  const [recommendations, setRecommendations] = useState([])
  const [alerts, setAlerts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([getCostData(), getRecommendations(), getAlerts()])
      .then(([cost, recs, alrts]) => {
        setCostData(cost.data.data)
        setRecommendations(recs.data.data)
        setAlerts(alrts.data.data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  const totalSavings = recommendations.reduce((sum, r) => {
    const num = parseInt(r.saving.replace(/[^0-9]/g, ''))
    return sum + num
  }, 0)

  if (loading) return (
    <div className="flex items-center justify-center h-96 text-gray-400">
      Loading CloudOptix data...
    </div>
  )

  return (
    <main className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-white mb-6">Dashboard Overview</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <StatCard title="Total Monthly Spend" value="$1,240" subtitle="June 2026" color="blue" />
        <StatCard title="Potential Savings" value={`$${totalSavings}`} subtitle="AI recommended" color="green" />
        <StatCard title="Anomalies Detected" value={alerts.length} subtitle="This month" color="red" />
        <StatCard title="Resources Monitored" value="14" subtitle="Across AWS, GCP" color="purple" />
      </div>

      <div className="mb-6">
        <AIAnalyzer />
      </div>

      <div className="mb-6">
        <CostChart data={costData} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-white font-semibold mb-3">AI Recommendations</h2>
          <div className="flex flex-col gap-3">
            {recommendations.map((r) => (
              <RecommendationCard key={r.id} {...r} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-white font-semibold mb-3">Anomaly Alerts</h2>
          <div className="flex flex-col gap-3">
            {alerts.map((a) => (
              <AlertBox key={a.id} {...a} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}