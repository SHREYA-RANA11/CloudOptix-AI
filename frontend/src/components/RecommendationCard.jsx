export default function RecommendationCard({ resource, issue, suggestion, saving }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-semibold text-white">{resource}</span>
        <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">Save {saving}</span>
      </div>
      <p className="text-xs text-gray-400 mb-1">⚠ {issue}</p>
      <p className="text-xs text-blue-400">→ {suggestion}</p>
    </div>
  )
}