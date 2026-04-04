export const user = {
  name: 'Rahul Kumar',
  firstName: 'Rahul',
  phone: '+91 98765 43210',
  platform: 'Zomato',
  platformEmoji: '🛵',
  city: 'Bengaluru',
  workZone: 'Koramangala',
  upi: 'rahul@upi',
  riskScore: 72,
  riskLabel: 'Medium Risk',
  weeklyExpected: 3000,
  weeklyActual: 2100,
  lossPct: 30,
  lossAmount: 900,
}

export const plan = {
  name: 'Weekly Protection Plan',
  premium: 40,
  coverage: 800,
  status: 'Active',
  renews: 'Sunday',
}

export const weeklyChart = [
  { day: 'Mon', expected: 420, actual: 380 },
  { day: 'Tue', expected: 450, actual: 410 },
  { day: 'Wed', expected: 400, actual: 320 },
  { day: 'Thu', expected: 430, actual: 280 },
  { day: 'Fri', expected: 480, actual: 350 },
  { day: 'Sat', expected: 520, actual: 190 },
  { day: 'Sun', expected: 300, actual: 170 },
]

export const liveAlerts = [
  {
    id: 'a1',
    icon: '🌧️',
    label: 'Heavy Rain – High Impact',
    tone: 'danger',
  },
  {
    id: 'a2',
    icon: '🌫️',
    label: 'AQI Dangerous – Medium Impact',
    tone: 'warning',
  },
]

export const disruptionAlerts = [
  {
    id: 'd1',
    icon: '🌧️',
    title: 'Heavy Rain Alert',
    location: 'Koramangala, Bengaluru',
    severity: 'High',
    impact: 'Expected income impact: ₹400–₹600',
    time: '2 hours ago',
  },
  {
    id: 'd2',
    icon: '🌡️',
    title: 'Heat Wave Advisory',
    location: 'Indiranagar, Bengaluru',
    severity: 'Medium',
    impact: 'Expected income impact: ₹150–₹300',
    time: '5 hours ago',
  },
  {
    id: 'd3',
    icon: '🌫️',
    title: 'AQI Spike',
    location: 'Whitefield, Bengaluru',
    severity: 'Medium',
    impact: 'Expected income impact: ₹200–₹400',
    time: 'Yesterday',
  },
  {
    id: 'd4',
    icon: '🚧',
    title: 'Road Closure',
    location: 'MG Road, Bengaluru',
    severity: 'Low',
    impact: 'Expected income impact: ₹50–₹120',
    time: 'Yesterday',
  },
]

export const claims = {
  active: {
    trigger: 'Heavy Rain + Income Drop > 30%',
    amount: 600,
    status: 'Credited to UPI ✅',
    upi: 'rahul@upi',
    time: 'Today, 2:30 PM',
  },
  past: [
    { date: '12 Mar 2026', trigger: 'Festival surge miss', amount: 320, status: 'Paid' },
    { date: '28 Feb 2026', trigger: 'AQI + drop', amount: 450, status: 'Paid' },
    { date: '14 Feb 2026', trigger: 'Rain disruption', amount: 580, status: 'Paid' },
  ],
}

export const cities = ['Delhi', 'Mumbai', 'Bengaluru', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune']

export const platforms = ['Zomato', 'Swiggy', 'Dunzo', 'Other']

/** Shown on Alerts tab badge */
export const unreadAlertCount = 2
