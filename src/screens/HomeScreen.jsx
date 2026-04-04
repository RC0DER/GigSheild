import { Bell, Shield } from 'lucide-react'
import { user, plan, liveAlerts } from '../data/mockData'

function RiskPill({ level }) {
  const map = {
    low: { label: 'Low Risk', className: 'bg-sp-accent/20 text-sp-accent ring-1 ring-sp-accent/40' },
    medium: { label: 'Medium Risk', className: 'bg-sp-warning/20 text-amber-800 ring-1 ring-sp-warning/50' },
    high: { label: 'High Risk', className: 'bg-sp-danger/15 text-sp-danger ring-1 ring-sp-danger/40' },
  }
  const cfg = map[level] || map.medium
  return (
    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${cfg.className}`}>{cfg.label}</span>
  )
}

export default function HomeScreen({ onViewCoverage }) {
  const riskLevel =
    user.riskScore >= 80 ? 'high' : user.riskScore >= 45 ? 'medium' : 'low'
  const actualPct = Math.min(100, Math.round((user.weeklyActual / user.weeklyExpected) * 100))

  return (
    <div className="animate-fade-in pb-28">
      <header className="relative rounded-b-3xl bg-sp-dark px-5 pb-6 pt-safe-pt safe-pt">
        <div className="flex items-start justify-between pt-3">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-lg font-semibold text-white ring-2 ring-sp-accent/40">
              RK
            </div>
            <div>
              <p className="font-poppins text-lg font-semibold text-white">
                Hi {user.firstName}{' '}
                <span role="img" aria-label="wave">
                  👋
                </span>
              </p>
              <div className="mt-2">
                <RiskPill level={riskLevel} />
              </div>
            </div>
          </div>
          <button
            type="button"
            className="rounded-full bg-white/10 p-2.5 text-white transition hover:bg-white/15"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" />
          </button>
        </div>
      </header>

      <div className="space-y-3 px-4 py-4">
        <section
          className="animate-slide-up overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-black/5"
          style={{ animationDelay: '60ms', animationFillMode: 'both' }}
        >
          <div className="border-l-4 border-sp-accent px-4 py-4">
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-sp-accent" />
                <h2 className="font-poppins text-base font-semibold text-sp-dark">Active Plan</h2>
              </div>
              <span className="rounded-full bg-sp-accent/15 px-2.5 py-0.5 text-xs font-semibold text-emerald-800">
                {plan.status} ✅
              </span>
            </div>
            <p className="mt-1 text-sm font-medium text-neutral-600">{plan.name}</p>
            <p className="mt-2 text-sm text-neutral-700">
              Premium: <span className="font-semibold">₹{plan.premium}/week</span>
              <span className="mx-2 text-neutral-300">|</span>
              Coverage: <span className="font-semibold">₹{plan.coverage}</span>
            </p>
          </div>
        </section>

        <section
          className="animate-slide-up rounded-2xl bg-white p-4 shadow-card ring-1 ring-black/5"
          style={{ animationDelay: '120ms', animationFillMode: 'both' }}
        >
          <h2 className="font-poppins text-base font-semibold text-sp-dark">Earnings Tracker</h2>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-sp-page p-3">
              <p className="text-xs text-neutral-500">Expected Income</p>
              <p className="mt-1 font-poppins text-lg font-semibold text-sp-dark">
                ₹{user.weeklyExpected.toLocaleString('en-IN')}
              </p>
            </div>
            <div className="rounded-xl bg-sp-page p-3">
              <p className="text-xs text-neutral-500">Actual Income</p>
              <p className="mt-1 font-poppins text-lg font-semibold text-sp-dark">
                ₹{user.weeklyActual.toLocaleString('en-IN')}
              </p>
            </div>
            <div className="col-span-2 rounded-xl bg-red-50 p-3 ring-1 ring-sp-danger/15">
              <p className="text-sm font-semibold text-sp-danger">
                Loss: {user.lossPct}% ⚠️
              </p>
              <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-neutral-200">
                <div
                  className="h-full rounded-full bg-sp-danger transition-all"
                  style={{ width: `${actualPct}%` }}
                />
              </div>
              <p className="mt-1 text-xs text-neutral-500">Actual vs expected this week</p>
            </div>
          </div>
        </section>

        <section
          className="animate-slide-up"
          style={{ animationDelay: '180ms', animationFillMode: 'both' }}
        >
          <h2 className="mb-2 font-poppins text-base font-semibold text-sp-dark">Live Alerts</h2>
          <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {liveAlerts.map((a) => (
              <div
                key={a.id}
                className={`shrink-0 rounded-2xl px-4 py-3 shadow-card ring-1 ring-black/5 ${
                  a.tone === 'danger' ? 'bg-red-50' : 'bg-amber-50'
                }`}
              >
                <p className="whitespace-nowrap text-sm font-medium text-neutral-800">
                  <span className="mr-1">{a.icon}</span>
                  {a.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <button
          type="button"
          onClick={onViewCoverage}
          className="animate-slide-up h-[52px] w-full rounded-full bg-sp-accent font-poppins text-base font-semibold text-sp-dark shadow-lg shadow-sp-accent/25 transition hover:brightness-105 active:scale-[0.99]"
          style={{ animationDelay: '240ms', animationFillMode: 'both' }}
        >
          View My Coverage
        </button>
      </div>
    </div>
  )
}
