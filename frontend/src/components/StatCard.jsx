export default function StatCard({ title, value, subtitle, color }) {
  const colors = {
    blue: 'border-blue-500/30 bg-blue-500/10 text-blue-400',
    green: 'border-green-500/30 bg-green-500/10 text-green-400',
    red: 'border-red-500/30 bg-red-500/10 text-red-400',
    purple: 'border-purple-500/30 bg-purple-500/10 text-purple-400',
  }
  return (
    <div className={`rounded-xl border p-5 ${colors[color]}`}>
      <p className="text-sm text-gray-400 mb-1">{title}</p>
      <p className="text-3xl font-bold text-white">{value}</p>
      <p className="text-xs mt-1 opacity-70">{subtitle}</p>
    </div>
  )
}