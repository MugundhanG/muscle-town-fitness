// DEMO SITE — fill these in with the real studio details before launch.
// Everything on the site (WhatsApp button, call links, map, footer) reads
// from here, so this is the only file you need to touch to wire up the
// real contact details.

export const business = {
  name: 'Muscle Town Fitness Studio',
  tagline: 'Fitness Studio in Mandaveli',
  legalType: 'Gym & Fitness Studio',

  locality: 'Mandaveli',
  address: '[BUSINESS ADDRESS]',

  // Digits only, with country code, no + or spaces. e.g. '9198xxxxxxx'
  whatsappNumber: '[WHATSAPP NUMBER]',
  whatsappDefaultMessage: 'Hi Muscle Town Fitness Studio, I would like to know more about your membership plans.',

  phone: '[PHONE NUMBER]',
  phoneDisplay: '[PHONE NUMBER]',
  email: '[EMAIL ADDRESS]',

  hours: {
    weekdays: '[OPENING HOURS]',
    sunday: '[OPENING HOURS]',
  },

  mapEmbedQuery: 'Muscle Town Fitness Studio, Mandaveli, Chennai',

  social: {
    instagram: '#',
    facebook: '#',
    google: '#',
  },
}

export const whatsappLink = (message = business.whatsappDefaultMessage) =>
  `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`

export const telLink = () => `tel:${business.phone}`

export const mailLink = () => `mailto:${business.email}`

export const mapsLink = () =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.mapEmbedQuery)}`
