import { ArrowLeft } from 'lucide-react'

export default function IncomeDetails({ onBack, onNext, form, setForm }) {
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
      <h1 className="font-poppins text-2xl font-bold text-sp-dark">Income details</h1>
      <p className="mt-2 text-sm text-neutral-600">Helps us size your protection.</p>
      <div className="mt-8 rounded-2xl bg-white p-5 shadow-card ring-1 ring-black/5">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-neutral-700">Average weekly earnings</span>
          <span className="font-poppins text-lg font-bold text-sp-dark">
            ₹{Number(form.weeklyEarnings).toLocaleString('en-IN')}
          </span>
        </div>
        <input
          type="range"
          min={500}
          max={10000}
          step={100}
          value={form.weeklyEarnings}
          onChange={(e) => setForm((f) => ({ ...f, weeklyEarnings: Number(e.target.value) }))}
          className="mt-4 h-2 w-full cursor-pointer accent-sp-accent"
        />
        <div className="mt-1 flex justify-between text-xs text-neutral-500">
          <span>₹500</span>
          <span>₹10,000</span>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between rounded-2xl bg-white px-4 py-4 shadow-card ring-1 ring-black/5">
        <div>
          <p className="text-sm font-medium text-neutral-900">Working hours</p>
          <p className="text-xs text-neutral-500">Optional — improves AI accuracy</p>
        </div>
        <button
          type="button"
          role="switch"
          aria-checked={form.trackHours}
          onClick={() => setForm((f) => ({ ...f, trackHours: !f.trackHours }))}
          className={`relative h-8 w-14 rounded-full transition ${
            form.trackHours ? 'bg-sp-accent' : 'bg-neutral-200'
          }`}
        >
          <span
            className={`absolute top-1 h-6 w-6 rounded-full bg-white shadow transition ${
              form.trackHours ? 'left-7' : 'left-1'
            }`}
          />
        </button>
      </div>
      <div className="mt-4">
        <label className="text-xs font-semibold text-neutral-600">UPI ID</label>
        <input
          type="text"
          value={form.upi}
          onChange={(e) => setForm((f) => ({ ...f, upi: e.target.value }))}
          placeholder="you@upi"
          className="mt-1 h-12 w-full rounded-2xl border border-neutral-200 bg-white px-4 font-noto outline-none ring-sp-accent focus:ring-2"
        />
      </div>
      <button
        type="button"
        onClick={onNext}
        className="mt-10 h-[52px] w-full rounded-full bg-sp-accent font-poppins font-semibold text-sp-dark shadow-lg shadow-sp-accent/25"
      >
        Analyze my risk
      </button>
    </div>
  )
}
