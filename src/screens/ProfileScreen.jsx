import { ChevronRight, LogOut } from 'lucide-react'
import { user, plan } from '../data/mockData'

function RiskRing({ score }) {
  const r = 44
  const c = 2 * Math.PI * r
  const pct = Math.min(100, Math.max(0, score)) / 100
  const offset = c * (1 - pct)
  return (
    <div className="relative mx-auto h-36 w-36">
      <svg className="-rotate-90 transform" width="144" height="144" viewBox="0 0 144 144">
        <circle cx="72" cy="72" r={r} fill="none" stroke="#e5e7eb" strokeWidth="10" />
        <circle
          cx="72"
          cy="72"
          r={r}
          fill="none"
          stroke="#F59E0B"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-poppins text-2xl font-bold text-sp-dark">{score}</span>
        <span className="text-xs text-neutral-500">/ 100</span>
      </div>
    </div>
  )
}

const settingsRows = [
  'UPI Payment Settings',
  'Notification Preferences',
  'Help & Support',
  'Terms & Privacy',
]

export default function ProfileScreen({ onLogout }) {
  return (
    <div className="animate-fade-in space-y-4 px-4 pb-28 pt-4">
      <div className="flex flex-col items-center text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-sp-dark text-2xl font-bold text-white ring-4 ring-sp-accent/30">
          RK
        </div>
        <h1 className="mt-3 font-poppins text-xl font-bold text-sp-dark">{user.name}</h1>
        <p className="text-sm text-neutral-600">{user.phone}</p>
        <p className="mt-1 text-sm text-neutral-700">
          Platform: {user.platform} {user.platformEmoji}
        </p>
        <p className="text-sm text-neutral-600">City: {user.city}</p>
      </div>

      <section
        className="animate-slide-up rounded-2xl bg-white p-4 text-center shadow-card ring-1 ring-black/5"
        style={{ animationDelay: '80ms', animationFillMode: 'both' }}
      >
        <h2 className="font-poppins text-sm font-semibold text-neutral-600">Risk Score</h2>
        <RiskRing score={user.riskScore} />
        <p className="font-poppins font-semibold text-sp-warning">{user.riskLabel}</p>
      </section>

      <section
        className="animate-slide-up rounded-2xl border-l-4 border-sp-accent bg-white p-4 shadow-card ring-1 ring-black/5"
        style={{ animationDelay: '140ms', animationFillMode: 'both' }}
      >
        <h2 className="font-poppins text-base font-semibold text-sp-dark">Active Plan Summary</h2>
        <p className="mt-2 text-sm text-neutral-700">
          Premium: <span className="font-semibold">₹{plan.premium}/week</span>
          <span className="mx-2 text-neutral-300">|</span>
          Coverage: <span className="font-semibold">₹{plan.coverage}</span>
        </p>
        <p className="mt-1 text-sm text-neutral-600">
          Renews: <span className="font-medium">{plan.renews}</span>
        </p>
      </section>

      <div
        className="animate-slide-up overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-black/5"
        style={{ animationDelay: '200ms', animationFillMode: 'both' }}
      >
        {settingsRows.map((label) => (
          <button
            key={label}
            type="button"
            className="flex w-full items-center justify-between border-b border-neutral-100 px-4 py-4 text-left last:border-0 active:bg-neutral-50"
          >
            <span className="text-sm font-medium text-neutral-900">{label}</span>
            <ChevronRight className="h-5 w-5 text-neutral-400" />
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={onLogout}
        className="animate-slide-up flex h-[52px] w-full items-center justify-center gap-2 rounded-full border-2 border-sp-danger font-poppins font-semibold text-sp-danger transition hover:bg-red-50"
        style={{ animationDelay: '260ms', animationFillMode: 'both' }}
      >
        <LogOut className="h-5 w-5" />
        Logout
      </button>
    </div>
  )
}
