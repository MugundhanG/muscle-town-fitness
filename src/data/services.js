// Program catalogue, grouped the way a prospective member thinks about
// their goal rather than as a flat alphabetical list. Icons are lucide-react
// names, resolved in ui/ServiceCard.jsx.

export const serviceCategories = [
  {
    id: 'strength-performance',
    name: 'Strength & Performance',
    blurb: 'Build real strength with structured programming and hands-on coaching.',
    services: [
      {
        slug: 'strength-training',
        name: 'Strength Training',
        icon: 'Dumbbell',
        summary: 'Structured free-weight and machine training to build muscle and get measurably stronger.',
        detail: 'A progressive strength programme covering free weights, resistance machines and compound lifts — built around your current level and adjusted as you get stronger, not a one-size-fits-all routine.',
      },
      {
        slug: 'personal-training',
        name: 'Personal Training',
        icon: 'UserRound',
        summary: 'One-on-one coaching with a trainer focused entirely on your goals and form.',
        detail: 'Dedicated one-on-one sessions with a coach who plans your workouts, corrects your form in real time, and adjusts the programme as you progress — ideal if you want faster, safer results.',
      },
      {
        slug: 'functional-training',
        name: 'Functional Training',
        icon: 'Activity',
        summary: 'Movement-based training that builds strength you actually use in daily life.',
        detail: 'Kettlebells, sleds, battle ropes and bodyweight circuits designed to build strength, balance and conditioning that carries over into everyday movement — not just how you look in the mirror.',
      },
    ],
  },
  {
    id: 'group-energy',
    name: 'Group Energy',
    blurb: 'Train alongside others in high-energy, coach-led sessions.',
    services: [
      {
        slug: 'hiit-classes',
        name: 'HIIT Classes',
        icon: 'Flame',
        summary: 'Fast-paced, coach-led interval training for maximum calorie burn in minimal time.',
        detail: 'High-intensity interval sessions that combine cardio and strength moves in short, coach-led bursts — a time-efficient way to build endurance and burn calories in a group setting.',
      },
      {
        slug: 'dance-fitness',
        name: 'Dance & Zumba Fitness',
        icon: 'Music',
        summary: 'A fun, music-driven cardio workout that doesn’t feel like a workout.',
        detail: 'High-energy dance-based cardio set to music — a great option if traditional gym equipment isn’t your thing but you still want a serious calorie-burning session.',
      },
      {
        slug: 'womens-batch',
        name: "Women's Fitness Batch",
        icon: 'Users',
        summary: 'A dedicated women-only batch and timing for a more comfortable start.',
        detail: 'A women-only training batch with its own timing, designed for members who prefer a more private, comfortable environment as they begin or continue their fitness journey.',
      },
    ],
  },
  {
    id: 'transformation-programs',
    name: 'Transformation Programs',
    blurb: 'Structured plans for members with a specific goal and timeline.',
    services: [
      {
        slug: 'weight-loss-program',
        name: 'Weight Loss Program',
        icon: 'TrendingDown',
        summary: 'A combined training and habit plan built around sustainable fat loss.',
        detail: 'A structured combination of strength training, cardio and habit coaching aimed at steady, sustainable fat loss — tracked and adjusted regularly instead of relying on one fixed routine.',
      },
      {
        slug: 'nutrition-coaching',
        name: 'Nutrition Coaching',
        icon: 'Apple',
        summary: 'Practical diet guidance that fits your goals, schedule and food preferences.',
        detail: 'One-on-one guidance on eating for your specific goal — fat loss, muscle gain or general health — built around foods you already have access to, not a generic downloaded diet chart.',
      },
      {
        slug: 'beginner-program',
        name: "Beginner's Fitness Program",
        icon: 'Compass',
        summary: 'A guided starting point if you’re new to the gym and don’t know where to begin.',
        detail: 'A low-pressure introduction to the gym floor — the right way to use equipment, a simple starting routine, and a coach checking in so your first few weeks build confidence, not confusion.',
      },
    ],
  },
]

export const allServices = serviceCategories.flatMap((cat) =>
  cat.services.map((s) => ({ ...s, categoryName: cat.name, categoryId: cat.id }))
)
