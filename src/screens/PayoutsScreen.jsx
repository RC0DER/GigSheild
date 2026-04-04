import { ShieldCheck } from 'lucide-react'
import { claims, user } from '../data/mockData'

export default function PayoutsScreen() {
  return (
    <div className="animate-fade-in space-y-4 px-4 pb-28 pt-4">
      <h1 className="font-poppins text-xl font-bold text-sp-dark">Claim History</h1>

      <section
        className="animate-slide-up rounded-2xl border-2 border-sp-accent bg-white p-4 shadow-card"
        style={{ animationDelay: '60ms', animationFillMode: 'both' }}
      >
        <p className="text-xs font-semibold uppercase tracking-wide text-sp-accent">Active claim</p>
        <p className="mt-2 font-poppins text-base font-semibold text-sp-dark">{claims.active.trigger}</p>
        <p className="mt-3 font-poppins text-2xl font-bold text-sp-dark">₹{claims.active.amount}</p>
        <p className="mt-1 text-sm font-medium text-emerald-700">{claims.active.status}</p>
        <p className="mt-2 text-sm text-neutral-600">
          UPI ID: <span className="font-semibold text-neutral-800">{user.upi}</span>
        </p>
        <p className="mt-1 text-xs text-neutral-500">{claims.active.time}</p>
      </section>

      <div>
        <h2 className="mb-2 font-poppins text-sm font-semibold text-neutral-600">Past claims</h2>
        <ul className="space-y-2">
          {claims.past.map((c, i) => (
            <li
              key={c.date}
              className="animate-slide-up flex items-center justify-between gap-3 rounded-2xl bg-white px-4 py-3 shadow-card ring-1 ring-black/5"
              style={{ animationDelay: `${120 + i * 60}ms`, animationFillMode: 'both' }}
            >
              <div className="min-w-0">
                <p className="text-xs text-neutral-500">{c.date}</p>
                <p className="truncate text-sm font-medium text-neutral-900">{c.trigger}</p>
              </div>
              <div className="shrink-0 text-right">
                <p className="font-poppins font-semibold text-sp-dark">₹{c.amount}</p>
                <span className="mt-0.5 inline-block rounded-full bg-sp-accent/15 px-2 py-0.5 text-xs font-semibold text-emerald-800">
                  {c.status}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="animate-slide-up flex gap-3 rounded-2xl bg-sp-dark px-4 py-4 text-white shadow-card"
        style={{ animationDelay: '280ms', animationFillMode: 'both' }}
      >
        <ShieldCheck className="h-10 w-10 shrink-0 text-sp-accent" />
        <div>
          <p className="font-poppins font-semibold">Auto Claim – No Paperwork Required</p>
          <p className="mt-1 text-sm text-white/80">Verified by IRDAI Partner</p>
        </div>
      </div>
    </div>
  )
}
