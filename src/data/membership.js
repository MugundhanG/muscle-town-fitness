// Membership tiers — DEMO structure only. No pricing is shown since real
// membership fees haven't been supplied; every tier routes to WhatsApp for
// a quote instead of a fabricated number.

export const membershipTiers = [
  {
    id: 'basic',
    name: 'Basic',
    tagline: 'Train on your own schedule',
    features: [
      'Full gym floor access',
      'Standard operating hours',
      'Locker & changing room access',
      'Free fitness assessment on joining',
    ],
    highlighted: false,
  },
  {
    id: 'standard',
    name: 'Standard',
    tagline: 'Most members start here',
    features: [
      'Everything in Basic',
      'Unlimited group classes (HIIT, Zumba, functional)',
      'Extended access hours',
      '1 nutrition consultation per month',
    ],
    highlighted: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    tagline: 'For focused, faster progress',
    features: [
      'Everything in Standard',
      'Dedicated personal training sessions',
      'Custom nutrition & diet follow-ups',
      'Priority class booking',
    ],
    highlighted: false,
  },
]

export const membershipAddOns = [
  { name: 'Personal Training Sessions', description: 'Book additional one-on-one sessions with a coach alongside any membership tier.' },
  { name: 'Nutrition-Only Plan', description: 'Diet and nutrition coaching without a full gym membership, for members training elsewhere.' },
  { name: 'Short-Term / Trial Pass', description: 'A limited-duration pass to try the studio before committing to a full membership.' },
]
