import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { user, weeklyChart } from '../data/mockData'

export default function EarningsScreen() {
  return (
    <div className="animate-fade-in space-y-4 px-4 pb-28 pt-4">
      <h1 className="font-poppins text-xl font-bold text-sp-dark">Earnings Overview</h1>

      <div
        className="animate-slide-up rounded-2xl bg-white p-4 shadow-card ring-1 ring-black/5"
        style={{ animationDelay: '80ms', animationFillMode: 'both' }}
      >
        <p className="mb-3 text-sm font-medium text-neutral-600">Weekly comparison</p>
        <div className="h-56 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={weeklyChart}
              margin={{ top: 8, right: 8, left: -20, bottom: 0 }}
              barGap={4}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
              <XAxis dataKey="day" tick={{ fontSize: 11, fill: '#6b7280' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#6b7280' }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{ borderRadius: 12, border: 'none', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}
              />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Bar dataKey="expected" name="Expected" fill="#BBF7D0" radius={[6, 6, 0, 0]} maxBarSize={14} />
              <Bar dataKey="actual" name="Actual" fill="#166534" radius={[6, 6, 0, 0]} maxBarSize={14} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div
        className="animate-slide-up grid grid-cols-2 gap-3"
        style={{ animationDelay: '140ms', animationFillMode: 'both' }}
      >
        <div className="rounded-2xl bg-white p-4 shadow-card ring-1 ring-black/5">
          <p className="text-xs text-neutral-500">This Week Earned</p>
          <p className="mt-1 font-poppins text-lg font-bold text-sp-dark">
            ₹{user.weeklyActual.toLocaleString('en-IN')}
          </p>
        </div>
        <div className="rounded-2xl bg-white p-4 shadow-card ring-1 ring-black/5">
          <p className="text-xs text-neutral-500">Expected</p>
          <p className="mt-1 font-poppins text-lg font-bold text-sp-dark">
            ₹{user.weeklyExpected.toLocaleString('en-IN')}
          </p>
        </div>
        <div className="rounded-2xl bg-white p-4 shadow-card ring-1 ring-red-100">
          <p className="text-xs text-neutral-500">Loss</p>
          <p className="mt-1 font-poppins text-lg font-bold text-sp-danger">
            ₹{user.lossAmount.toLocaleString('en-IN')} ({user.lossPct}%)
          </p>
        </div>
        <div className="rounded-2xl bg-amber-50 p-4 shadow-card ring-1 ring-amber-100">
          <p className="text-xs text-amber-900/80">AI Prediction</p>
          <p className="mt-1 text-sm font-semibold text-amber-950">⚠️ 20% drop expected tomorrow</p>
        </div>
      </div>

      <div
        className="animate-slide-up rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 shadow-card"
        style={{ animationDelay: '200ms', animationFillMode: 'both' }}
      >
        <p className="text-sm font-medium text-amber-950">
          🤖 Rain forecast for tomorrow may reduce your income by ₹600
        </p>
      </div>
    </div>
  )
}
