import { useState } from 'react'
import axios from 'axios'

export default function AIAnalyzer() {
  const [form, setForm] = useState({ cpu: '', memory: '', cost: '' })
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleAnalyze = async () => {
    if (!form.cpu || !form.memory || !form.cost) {
      setError('Please fill in all fields')
      return
    }
    setError(null)
    setLoading(true)
    setResult(null)
    try {
      const res = await axios.post('http://localhost:5000/api/analyze', {
        cpu: parseFloat(form.cpu),
        memory: parseFloat(form.memory),
        cost: parseFloat(form.cost),
      })
      setResult(res.data.data)
    } catch (err) {
      setError('Could not reach AI engine. Make sure backend + AI servers are running.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 mb-6">
      <h2 className="text-white font-semibold mb-1">Live AI Resource Analyzer</h2>
      <p className="text-xs text-gray-400 mb-4">Enter a resource's stats to get real-time AI analysis</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
        <div>
          <label className="text-xs text-gray-400 block mb-1">CPU Usage (%)</label>
          <input
            type="number"
            name="cpu"
            value={form.cpu}
            onChange={handleChange}
            placeholder="e.g. 8"
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="text-xs text-gray-400 block mb-1">Memory Usage (%)</label>
          <input
            type="number"
            name="memory"
            value={form.memory}
            onChange={handleChange}
            placeholder="e.g. 25"
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="text-xs text-gray-400 block mb-1">Monthly Cost ($)</label>
          <input
            type="number"
            name="cost"
            value={form.cost}
            onChange={handleChange}
            placeholder="e.g. 120"
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      <button
        onClick={handleAnalyze}
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-sm font-medium px-4 py-2 rounded-lg transition"
      >
        {loading ? 'Analyzing...' : 'Run AI Analysis'}
      </button>

      {error && <p className="text-red-400 text-xs mt-3">{error}</p>}

      {result && (
        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className={`rounded-lg p-4 border ${result.anomaly.anomaly ? 'bg-red-500/10 border-red-500/30' : 'bg-green-500/10 border-green-500/30'}`}>
            <p className="text-xs text-gray-400 mb-1">Anomaly Detection</p>
            <p className={`text-sm font-semibold ${result.anomaly.anomaly ? 'text-red-400' : 'text-green-400'}`}>
              {result.anomaly.anomaly ? '⚠ Anomaly Detected' : '✓ Normal Usage'}
            </p>
            <p className="text-xs text-gray-500 mt-1">Score: {result.anomaly.score}</p>
          </div>

          <div className="rounded-lg p-4 border bg-blue-500/10 border-blue-500/30">
            <p className="text-xs text-gray-400 mb-1">Cost Prediction</p>
            <p className="text-sm font-semibold text-blue-400">${result.prediction.predicted_cost}</p>
            <p className="text-xs text-gray-500 mt-1">Next month estimate</p>
          </div>

          <div className="rounded-lg p-4 border bg-purple-500/10 border-purple-500/30">
            <p className="text-xs text-gray-400 mb-1">AI Recommendation</p>
            <p className="text-sm font-semibold text-purple-400">{result.recommendation}</p>
          </div>
        </div>
      )}
    </div>
  )
}