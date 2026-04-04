import { useEffect, useState } from 'react'
import { Loader2 } from 'lucide-react'

export default function RiskResult({ onBack, onActivate }) {
  const [phase, setPhase] = useState('loading')

  useEffect(() => {
    const t = setTimeout(() => setPhase('result'), 2200)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="min-h-screen bg-sp-page px-5 pb-8 pt-safe-pt safe-pt animate-fade-in">
      {phase === 'loading' && (
        <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
          <Loader2 className="h-12 w-12 animate-spin text-sp-accent" />
          <p className="mt-6 font-poppins text-lg font-semibold text-sp-dark">Analyzing your profile...</p>
          <p className="mt-2 max-w-xs text-sm text-neutral-600">
            Checking weather patterns, city risk, and your earnings profile.
          </p>
        </div>
      )}
      {phase === 'result' && (
        <div className="animate-slide-up pb-8" style={{ animationFillMode: 'both' }}>
          <h1 className="font-poppins text-2xl font-bold text-sp-dark">Your risk score</h1>
          <div className="mt-6 rounded-2xl bg-white p-6 text-center shadow-card ring-1 ring-black/5">
            <p className="font-poppins text-5xl font-bold text-sp-warning">72</p>
            <p className="text-sm text-neutral-500">out of 100</p>
            <p className="mt-3 font-poppins text-lg font-semibold text-amber-800">Medium Risk</p>
            <div className="mt-4 rounded-xl bg-sp-page px-4 py-3 text-left">
              <p className="text-sm font-medium text-neutral-800">Your recommended plan</p>
              <p className="mt-1 text-sm text-neutral-600">
                <span className="font-semibold text-sp-dark">₹40/week</span> for{' '}
                <span className="font-semibold text-sp-dark">₹800</span> coverage
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onActivate}
            className="mt-8 h-[52px] w-full rounded-full bg-sp-accent font-poppins text-base font-semibold text-sp-dark shadow-lg shadow-sp-accent/30"
          >
            Activate Plan
          </button>
          <button
            type="button"
            onClick={onBack}
            className="mt-3 w-full py-2 text-sm font-medium text-neutral-600 hover:text-sp-dark"
          >
            Edit details
          </button>
        </div>
      )}
    </div>
  )
}
