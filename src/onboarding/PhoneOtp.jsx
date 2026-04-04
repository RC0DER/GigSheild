import { useState } from 'react'
import { ArrowLeft } from 'lucide-react'

export default function PhoneOtp({ onBack, onNext }) {
  const [phone, setPhone] = useState('')
  const [sent, setSent] = useState(false)
  const [otp, setOtp] = useState(['', '', '', ''])

  const handleOtpChange = (index, val) => {
    if (!/^\d*$/.test(val)) return
    const next = [...otp]
    next[index] = val.slice(-1)
    setOtp(next)
    if (val && index < 3) {
      document.getElementById(`otp-${index + 1}`)?.focus()
    }
  }

  return (
    <div className="min-h-screen bg-sp-dark px-5 pb-8 pt-safe-pt safe-pt animate-fade-in">
      <button
        type="button"
        onClick={onBack}
        className="mb-4 flex items-center gap-1 text-sm font-medium text-white/80 hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </button>
      <h1 className="font-poppins text-2xl font-bold text-white">Enter your phone</h1>
      <p className="mt-2 text-sm text-white/70">We’ll send a one-time password to verify you.</p>
      <div className="mt-8 flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-3 ring-1 ring-white/10">
        <span className="text-white/90">+91</span>
        <input
          type="tel"
          inputMode="numeric"
          placeholder="98765 43210"
          value={phone}
          onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
          className="flex-1 bg-transparent font-noto text-lg text-white outline-none placeholder:text-white/40"
        />
      </div>
      <button
        type="button"
        onClick={() => setSent(true)}
        className="mt-4 h-[52px] w-full rounded-full bg-sp-accent font-poppins font-semibold text-sp-dark disabled:opacity-50"
        disabled={phone.length < 10}
      >
        Send OTP
      </button>
      {sent && (
        <div className="mt-8 animate-slide-up rounded-2xl bg-white/5 p-4 ring-1 ring-white/10" style={{ animationFillMode: 'both' }}>
          <p className="text-sm font-medium text-white/90">Enter 4-digit OTP</p>
          <div className="mt-4 flex justify-center gap-3">
            {otp.map((d, i) => (
              <input
                key={i}
                id={`otp-${i}`}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={d}
                onChange={(e) => handleOtpChange(i, e.target.value)}
                className="h-12 w-12 rounded-xl border-2 border-white/20 bg-white/10 text-center font-poppins text-xl font-bold text-white outline-none focus:border-sp-accent"
              />
            ))}
          </div>
          <button
            type="button"
            onClick={onNext}
            className="mt-6 h-[52px] w-full rounded-full bg-white font-poppins font-semibold text-sp-dark"
          >
            Verify & Continue
          </button>
        </div>
      )}
    </div>
  )
}
