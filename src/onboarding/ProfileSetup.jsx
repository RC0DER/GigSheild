import { ArrowLeft } from 'lucide-react'
import { cities, platforms } from '../data/mockData'

export default function ProfileSetup({ onBack, onNext, form, setForm }) {
  return (
    <div className="min-h-screen bg-sp-page px-5 pb-8 pt-safe-pt safe-pt animate-fade-in">
      <button
        type="button"
        onClick={onBack}
        className="mb-4 flex items-center gap-1 text-sm font-medium text-sp-dark/70 hover:text-sp-dark"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </button>
      <h1 className="font-poppins text-2xl font-bold text-sp-dark">Profile setup</h1>
      <p className="mt-2 text-sm text-neutral-600">Tell us where you work.</p>
      <div className="mt-8 space-y-4">
        <div>
          <label className="text-xs font-semibold text-neutral-600">Full name</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            placeholder="Rahul Kumar"
            className="mt-1 h-12 w-full rounded-2xl border border-neutral-200 bg-white px-4 font-noto outline-none ring-sp-accent focus:ring-2"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-neutral-600">City</label>
          <select
            value={form.city}
            onChange={(e) => setForm((f) => ({ ...f, city: e.target.value }))}
            className="mt-1 h-12 w-full rounded-2xl border border-neutral-200 bg-white px-4 font-noto outline-none ring-sp-accent focus:ring-2"
          >
            {cities.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-xs font-semibold text-neutral-600">Work zone</label>
          <input
            type="text"
            value={form.workZone}
            onChange={(e) => setForm((f) => ({ ...f, workZone: e.target.value }))}
            placeholder="Koramangala"
            className="mt-1 h-12 w-full rounded-2xl border border-neutral-200 bg-white px-4 font-noto outline-none ring-sp-accent focus:ring-2"
          />
        </div>
        <div>
          <p className="text-xs font-semibold text-neutral-600">Platform</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {platforms.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setForm((f) => ({ ...f, platform: p }))}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  form.platform === p
                    ? 'bg-sp-accent text-sp-dark ring-2 ring-sp-accent'
                    : 'bg-white text-neutral-700 shadow-card ring-1 ring-black/5'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={onNext}
        className="mt-10 h-[52px] w-full rounded-full bg-sp-accent font-poppins font-semibold text-sp-dark shadow-lg shadow-sp-accent/25"
      >
        Continue
      </button>
    </div>
  )
}
