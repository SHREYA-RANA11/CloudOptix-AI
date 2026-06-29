export default function AlertBox({ service, date, normal, detected }) {
  return (
    <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-red-400 text-sm">🔴</span>
        <span className="text-sm font-semibold text-white">Anomaly Detected — {service}</span>
      </div>
      <p className="text-xs text-gray-400">Date: {date}</p>
      <p className="text-xs text-gray-400">Normal spend: <span className="text-white">${normal}</span></p>
      <p className="text-xs text-red-400">Detected: <span className="text-white font-bold">${detected}</span></p>
    </div>
  )
}