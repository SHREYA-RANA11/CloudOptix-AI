import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { date: 'Jan 1', cost: 100 },
  { date: 'Jan 2', cost: 105 },
  { date: 'Jan 3', cost: 98 },
  { date: 'Jan 4', cost: 110 },
  { date: 'Jan 5', cost: 850 },
  { date: 'Jan 6', cost: 102 },
  { date: 'Jan 7', cost: 95 },
  { date: 'Jan 8', cost: 108 },
  { date: 'Jan 9', cost: 99 },
  { date: 'Jan 10', cost: 115 },
]

export default function CostChart() {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
      <h2 className="text-white font-semibold mb-4">Daily Cloud Spend</h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
          <XAxis dataKey="date" stroke="#6b7280" tick={{ fontSize: 11 }} />
          <YAxis stroke="#6b7280" tick={{ fontSize: 11 }} />
          <Tooltip
            contentStyle={{ backgroundColor: '#111827', border: '1px solid #374151', borderRadius: '8px' }}
            labelStyle={{ color: '#fff' }}
          />
          <Line type="monotone" dataKey="cost" stroke="#3b82f6" strokeWidth={2} dot={{ fill: '#3b82f6', r: 3 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}