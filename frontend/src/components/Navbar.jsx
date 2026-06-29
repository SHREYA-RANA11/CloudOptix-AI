export default function Navbar() {
  return (
    <nav className="bg-gray-900 border-b border-gray-800 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">C</div>
        <span className="text-xl font-bold text-white">CloudOptix</span>
        <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full ml-1">AI</span>
      </div>
      <div className="text-sm text-gray-400">Cloud Cost Optimizer</div>
    </nav>
  )
}
