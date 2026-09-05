// Centralised stock-photo placeholders. Every image on the site is pulled
// through this helper so the whole set can be swapped for the studio's own
// gym photography later by editing this one file.

const unsplash = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const images = {
  heroHome: unsplash('1517836357463-d25dfeac3438', 1600),
  heroAbout: unsplash('1550345332-09e3ac987658', 1600),
  heroPrograms: unsplash('1541534741688-6078c6bfb5c5', 1600),
  heroMembership: unsplash('1518611012118-696072aa579a', 1600),
  heroGallery: unsplash('1571902943202-507ec2618e8f', 1600),
  heroTestimonials: unsplash('1594381898411-846e7d193883', 1600),
  heroFaq: unsplash('1583454110551-21f2fa2afe61', 1600),
  heroContact: unsplash('1534438327276-14e5300c3a48', 1600),

  aboutStory: unsplash('1571902943202-507ec2618e8f', 1200),
  aboutFacility: unsplash('1534438327276-14e5300c3a48', 1200),

  team: [
    { id: 'head-coach', img: unsplash('1550345332-09e3ac987658', 700) },
    { id: 'strength-coach', img: unsplash('1541534741688-6078c6bfb5c5', 700) },
    { id: 'nutrition-coach', img: unsplash('1594381898411-846e7d193883', 700) },
  ],

  programCategoryImages: {
    'strength-performance': unsplash('1517836357463-d25dfeac3438', 900),
    'group-energy': unsplash('1518611012118-696072aa579a', 900),
    'transformation-programs': unsplash('1490645935967-10de6ba17061', 900),
  },

  gallery: [
    { id: 1, category: 'Facility', alt: 'Training floor with treadmills and cardio machines', src: unsplash('1571902943202-507ec2618e8f', 1000) },
    { id: 2, category: 'Facility', alt: 'Wall-mounted dumbbell rack in the weights area', src: unsplash('1534438327276-14e5300c3a48', 1000) },
    { id: 3, category: 'Facility', alt: 'Close-up of weight plates being loaded onto a barbell', src: unsplash('1583454110551-21f2fa2afe61', 1000) },
    { id: 4, category: 'Facility', alt: 'Moody, low-light view of the strength training area', src: unsplash('1550345332-09e3ac987658', 1000) },
    { id: 5, category: 'Training Floor', alt: 'Member performing a deadlift on the gym floor', src: unsplash('1517836357463-d25dfeac3438', 1000) },
    { id: 6, category: 'Training Floor', alt: 'Member mid-lift during a strength session', src: unsplash('1517963879433-6ad2b056d712', 1000) },
    { id: 7, category: 'Training Floor', alt: 'Member training on the squat rack', src: unsplash('1541534741688-6078c6bfb5c5', 1000) },
    { id: 8, category: 'Training Floor', alt: 'Core and floor-based training session', src: unsplash('1571019613454-1cb2f99b2d8b', 1000) },
    { id: 9, category: 'Group & Community', alt: 'Group fitness class training together on mats', src: unsplash('1518611012118-696072aa579a', 1000) },
    { id: 10, category: 'Group & Community', alt: 'Two members supporting each other through a partner workout', src: unsplash('1544216717-3bbf52512659', 1000) },
    { id: 11, category: 'Group & Community', alt: 'Members training together during an early-morning cardio session', src: unsplash('1552674605-db6ffd4facb5', 1000) },
    { id: 12, category: 'Group & Community', alt: 'Member training on a cable machine on the gym floor', src: unsplash('1571731956672-f2b94d7dd0cb', 1000) },
  ],
}
