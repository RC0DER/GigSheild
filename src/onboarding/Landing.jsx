import { Shield } from 'lucide-react'
import RiderRainSvg from './RiderRainSvg'

export default function Landing({ onGetStarted, onLogin, onSkip }) {
  return (
    <div className="flex min-h-screen flex-col bg-sp-dark px-5 pb-8 pt-safe-pt safe-pt animate-fade-in">
      <div className="mx-auto mt-6 flex max-w-[320px] flex-1 flex-col items-center justify-center text-center">
        <div className="mb-6 flex items-center gap-2">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ring-2 ring-sp-accent/50">
            <Shield className="h-8 w-8 text-sp-accent" strokeWidth={2.2} />
          </div>
          <span className="font-poppins text-2xl font-bold tracking-tight text-white">SurakshaPay</span>
        </div>
        <p className="font-poppins text-lg font-medium leading-snug text-white/90">
          Protect Your Weekly Income Automatically
        </p>
        <div className="my-8 w-full max-w-[260px]">
          <RiderRainSvg className="h-auto w-full" />
        </div>
      </div>
      <div className="mx-auto w-full max-w-[340px] space-y-3">
        <button
          type="button"
          onClick={onGetStarted}
          className="h-[52px] w-full rounded-full bg-sp-accent font-poppins text-base font-semibold text-sp-dark shadow-lg shadow-sp-accent/30 transition hover:brightness-105 active:scale-[0.99]"
        >
          Get Started
        </button>
        <button
          type="button"
          onClick={onLogin}
          className="h-[52px] w-full rounded-full border-2 border-white font-poppins text-base font-semibold text-white transition hover:bg-white/10 active:scale-[0.99]"
        >
          Login
        </button>
        <button
          type="button"
          onClick={onSkip}
          className="w-full py-2 text-center text-sm font-medium text-white/60 underline-offset-4 hover:text-white/90 hover:underline"
        >
          Skip for demo
        </button>
      </div>
    </div>
  )
}
