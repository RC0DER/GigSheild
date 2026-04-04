import { disruptionAlerts } from '../data/mockData'

function severityStyles(sev) {
  if (sev === 'High') return 'border-sp-danger/40 bg-red-50 ring-1 ring-sp-danger/20'
  if (sev === 'Medium') return 'border-sp-warning/40 bg-amber-50 ring-1 ring-sp-warning/25'
  return 'border-sp-accent/40 bg-emerald-50 ring-1 ring-sp-accent/25'
}

function SeverityPill({ sev }) {
  const cls =
    sev === 'High'
      ? 'bg-sp-danger text-white'
      : sev === 'Medium'
        ? 'bg-sp-warning text-amber-950'
        : 'bg-sp-accent text-sp-dark'
  return <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${cls}`}>{sev}</span>
}

export default function AlertsScreen() {
  return (
    <div className="animate-fade-in space-y-3 px-4 pb-28 pt-4">
      <h1 className="font-poppins text-xl font-bold text-sp-dark">Live Disruptions</h1>
      {disruptionAlerts.map((a, i) => (
        <article
          key={a.id}
          className={`animate-slide-up rounded-2xl border-l-4 p-4 shadow-card ${severityStyles(a.severity)}`}
          style={{ animationDelay: `${80 + i * 70}ms`, animationFillMode: 'both' }}
        >
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl" aria-hidden>
                {a.icon}
              </span>
              <div>
                <h2 className="font-poppins text-base font-semibold text-neutral-900">{a.title}</h2>
                <p className="text-sm text-neutral-600">{a.location}</p>
              </div>
            </div>
            <SeverityPill sev={a.severity} />
          </div>
          <p className="mt-3 text-sm font-medium text-neutral-800">{a.impact}</p>
          <p className="mt-2 text-xs text-neutral-500">{a.time}</p>
        </article>
      ))}
    </div>
  )
}
