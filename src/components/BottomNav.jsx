import { Home, LineChart, Bell, Wallet, User } from 'lucide-react'

const tabs = [
  { id: 'home', label: 'Home', Icon: Home },
  { id: 'earnings', label: 'Earnings', Icon: LineChart },
  { id: 'alerts', label: 'Alerts', Icon: Bell },
  { id: 'payouts', label: 'Payouts', Icon: Wallet },
  { id: 'profile', label: 'Profile', Icon: User },
]

export default function BottomNav({ active, onChange, alertCount }) {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 mx-auto w-full max-w-[390px] border-t border-black/5 bg-white safe-pb"
      style={{ height: 'calc(64px + env(safe-area-inset-bottom, 0px))' }}
      aria-label="Main navigation"
    >
      <div className="flex h-16 items-stretch justify-around px-1 pt-1">
        {tabs.map((tab, index) => {
          const isActive = active === index
          const showBadge = tab.id === 'alerts' && alertCount > 0
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onChange(index)}
              className="relative flex min-w-0 flex-1 flex-col items-center justify-center gap-0.5 rounded-xl py-1 text-[11px] font-medium transition-colors"
            >
              <span className="relative">
                <tab.Icon
                  className={`h-5 w-5 ${isActive ? 'text-sp-accent' : 'text-neutral-400'}`}
                  strokeWidth={isActive ? 2.25 : 2}
                />
                {showBadge && (
                  <span className="absolute -right-2 -top-1 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-sp-danger px-1 text-[10px] font-bold text-white">
                    {alertCount > 9 ? '9+' : alertCount}
                  </span>
                )}
              </span>
              <span className={`font-poppins ${isActive ? 'text-sp-dark' : 'text-neutral-400'}`}>
                {tab.label}
              </span>
              {isActive && (
                <span className="absolute bottom-1 h-1 w-1 rounded-full bg-sp-accent" aria-hidden />
              )}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
