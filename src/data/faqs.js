export const faqCategories = [
  {
    name: 'Joining & Membership',
    faqs: [
      {
        q: 'Do you offer a trial session before I join?',
        a: 'Yes — book a free trial session so you can see the facility, meet the coaches and try a class before committing to a membership.',
      },
      {
        q: 'What membership plans do you offer?',
        a: 'We offer Basic, Standard and Premium tiers, differing in class access, coaching and nutrition support. Message us on WhatsApp and we’ll recommend the right one for your goal and budget.',
      },
      {
        q: 'Can I pause or cancel my membership?',
        a: '[Add membership pause / cancellation / refund policy here]',
      },
    ],
  },
  {
    name: 'Training & Programs',
    faqs: [
      {
        q: 'I’ve never worked out before — can I still join?',
        a: 'Absolutely. Our Beginner’s Fitness Program is built specifically for members starting from zero, with a coach guiding you through equipment and technique before you train independently.',
      },
      {
        q: 'What’s included in personal training?',
        a: 'Personal training includes a coach planning and supervising your sessions one-on-one, correcting your form, and adjusting your programme as you progress — available as an add-on to any membership.',
      },
      {
        q: 'What are the class timings for group sessions?',
        a: '[Add current class/batch timings here]',
      },
    ],
  },
  {
    name: 'Facility',
    faqs: [
      {
        q: 'Is parking available near the studio?',
        a: '[Add parking availability details here]',
      },
      {
        q: 'Do you have separate timings or a batch for women?',
        a: 'Yes, we run a dedicated Women’s Fitness Batch with its own timing for members who prefer that environment.',
      },
      {
        q: 'What equipment does the gym have?',
        a: 'The gym floor covers free weights, resistance machines, cardio equipment and a functional training area for kettlebells, sleds and circuit-style workouts.',
      },
    ],
  },
  {
    name: 'Health & Safety',
    faqs: [
      {
        q: 'I have an existing injury or medical condition — can I still train?',
        a: 'Let your coach know before your first session so your programme can be adjusted safely. For specific medical conditions, please consult your doctor before starting any new fitness routine.',
      },
      {
        q: 'Is nutrition coaching included, or is it separate?',
        a: 'Nutrition coaching is included from the Standard tier upward, and is also available as a stand-alone add-on for members who only want diet guidance.',
      },
    ],
  },
]

export const allFaqs = faqCategories.flatMap((c) => c.faqs)
