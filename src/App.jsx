import { useState } from 'react'
import BottomNav from './components/BottomNav.jsx'
import HomeScreen from './screens/HomeScreen.jsx'
import EarningsScreen from './screens/EarningsScreen.jsx'
import AlertsScreen from './screens/AlertsScreen.jsx'
import PayoutsScreen from './screens/PayoutsScreen.jsx'
import ProfileScreen from './screens/ProfileScreen.jsx'
import Landing from './onboarding/Landing.jsx'
import PhoneOtp from './onboarding/PhoneOtp.jsx'
import ProfileSetup from './onboarding/ProfileSetup.jsx'
import IncomeDetails from './onboarding/IncomeDetails.jsx'
import RiskResult from './onboarding/RiskResult.jsx'
import { unreadAlertCount } from './data/mockData.js'

const ONBOARD_STEPS = {
  landing: 'landing',
  phone: 'phone',
  profile: 'profile',
  income: 'income',
  risk: 'risk',
}

export default function App() {
  const [inApp, setInApp] = useState(false)
  const [onboardStep, setOnboardStep] = useState(ONBOARD_STEPS.landing)
  const [activeTab, setActiveTab] = useState(0)
  const [onboardingForm, setOnboardingForm] = useState({
    name: 'Rahul Kumar',
    city: 'Bengaluru',
    workZone: 'Koramangala',
    platform: 'Zomato',
    weeklyEarnings: 3000,
    trackHours: false,
    upi: 'rahul@upi',
  })

  const enterApp = () => {
    setInApp(true)
    setActiveTab(0)
  }

  const exitToOnboarding = () => {
    setInApp(false)
    setOnboardStep(ONBOARD_STEPS.landing)
  }

  const screens = [
    <HomeScreen key="home" onViewCoverage={() => setActiveTab(4)} />,
    <EarningsScreen key="earnings" />,
    <AlertsScreen key="alerts" />,
    <PayoutsScreen key="payouts" />,
    <ProfileScreen key="profile" onLogout={exitToOnboarding} />,
  ]

  if (!inApp) {
    return (
      <div className="mx-auto min-h-screen w-full max-w-[390px] bg-sp-page shadow-2xl shadow-black/20">
        {onboardStep === ONBOARD_STEPS.landing && (
          <Landing
            onGetStarted={() => setOnboardStep(ONBOARD_STEPS.phone)}
            onLogin={enterApp}
            onSkip={enterApp}
          />
        )}
        {onboardStep === ONBOARD_STEPS.phone && (
          <PhoneOtp
            onBack={() => setOnboardStep(ONBOARD_STEPS.landing)}
            onNext={() => setOnboardStep(ONBOARD_STEPS.profile)}
          />
        )}
        {onboardStep === ONBOARD_STEPS.profile && (
          <ProfileSetup
            form={onboardingForm}
            setForm={setOnboardingForm}
            onBack={() => setOnboardStep(ONBOARD_STEPS.phone)}
            onNext={() => setOnboardStep(ONBOARD_STEPS.income)}
          />
        )}
        {onboardStep === ONBOARD_STEPS.income && (
          <IncomeDetails
            form={onboardingForm}
            setForm={setOnboardingForm}
            onBack={() => setOnboardStep(ONBOARD_STEPS.profile)}
            onNext={() => setOnboardStep(ONBOARD_STEPS.risk)}
          />
        )}
        {onboardStep === ONBOARD_STEPS.risk && (
          <RiskResult
            onBack={() => setOnboardStep(ONBOARD_STEPS.income)}
            onActivate={enterApp}
          />
        )}
      </div>
    )
  }

  return (
    <div className="relative mx-auto min-h-screen w-full max-w-[390px] bg-sp-page pb-2 shadow-2xl shadow-black/20">
      <main className="min-h-screen">{screens[activeTab]}</main>
      <BottomNav active={activeTab} onChange={setActiveTab} alertCount={unreadAlertCount} />
    </div>
  )
}
