# Muscle Town Fitness Studio — Demo Website

Demo website built to show Muscle Town Fitness Studio (Mandaveli, Chennai) what a
professional online presence could look like. Not the final production site.

## Stack

React + Vite + Tailwind CSS v4 + React Router.

## Getting started

```bash
npm install
npm run dev
```

## Replacing placeholder content

- **Business details** (address, phone, WhatsApp number, email, hours, social links):
  edit [`src/config/business.js`](src/config/business.js) — every page reads from this one file.
- **Images**: all stock photography is centralised in [`src/utils/images.js`](src/utils/images.js).
  Swap the Unsplash URLs for real studio/gym photography before launch.
- **Trainer bios**: edit the `TEAM` array in [`src/pages/About.jsx`](src/pages/About.jsx).
- **Testimonials**: replace the demo reviews in [`src/data/testimonials.js`](src/data/testimonials.js)
  with genuine member feedback.
- **Programs copy**: [`src/data/services.js`](src/data/services.js).
- **Membership tiers**: [`src/data/membership.js`](src/data/membership.js) — pricing intentionally
  left as "Request a Quote" until real membership fees are supplied.
- **FAQs**: [`src/data/faqs.js`](src/data/faqs.js).

## Pages

Home, About, Programs, Membership, Gallery, Testimonials, FAQ, Contact/Join Now.
