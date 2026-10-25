import project5Image from '../../../assets/images/project5.webp';
import project6Image from '../../../assets/images/project6.webp';
import project7Image from '../../../assets/images/project7.webp';
import project8Image from '../../../assets/images/project8.webp';
import project9Image from '../../../assets/images/project9.webp';
import type { Project } from '../../../types/project';

export const projects: Project[] = [
  {
    slug: 'foodie-delight',
    name: 'Foodie Delight',
    category: 'Food ordering app',
    subtitle:
      'A full-stack food ordering experience with cart, checkout and live order tracking',
    description:
      'Foodie Delight is a complete food ordering platform where customers browse a category-filtered menu, build a cart, apply promo codes and follow their order through a four-stage tracking timeline. The project focuses on the details that make e-commerce feel trustworthy: clear pricing, validated forms, persistent state and a checkout that works on any screen size.',
    problem:
      'Most food ordering demos stop at a menu and a cart. The challenge here was to build the full purchase journey — and keep it intact when a customer refreshes the page or switches device.',
    solution:
      'I built the cart and checkout flow on top of React Context, added promo-code validation and multi-step form handling, then persisted state with localStorage. A visual order-tracking timeline closes the loop so customers always know what happens next.',
    challenges: [
      {
        problem:
          'The cart lived in component state, so refreshing the page or moving between routes emptied it and forced customers to start over.',
        solution:
          'I lifted the cart and active order into a Context reducer, saved a versioned snapshot to localStorage, and rehydrated it on load behind a validation check.',
      },
      {
        problem:
          'Promo codes, delivery fees and totals were recalculated in several components, which produced mismatches between the cart summary and checkout.',
        solution:
          'I moved pricing into one derived helper, validated promo codes in a single place, and calculated every total from the same cart state so all screens stayed in sync.',
      },
      {
        problem:
          'The desktop-first cart broke on small screens: quantity controls crowded product names and the order summary pushed the checkout button out of view.',
        solution:
          'I rebuilt the cart and checkout with a mobile-first grid, moved totals into a compact summary, and tested the full flow at 320px, 375px and 768px.',
      },
    ],
    features: [
      'Menu browsing with category filters',
      'Cart with quantity controls and live totals',
      'Promo code validation (SAVE10, SAVE20, FLAT400)',
      'Multi-step checkout with form validation',
      'Four-stage visual order tracking',
      'Cart and order state persisted in localStorage',
      'Mobile-first responsive layout',
    ],
    learned:
      'How to model shared state across a multi-page flow, keep forms predictable under validation, and design reusable components that stay consistent as the app grows.',
    image: project6Image,
    imageAlt: 'Foodie Delight food ordering app interface',
    live: 'https://foodwebsite-vicky.vercel.app',
    github: 'https://github.com/VickyNarvare/Advance-Food-Ordering-App',
    tech: [
      'React',
      'Tailwind CSS',
      'Context API',
      'React Router',
      'LocalStorage',
    ],
    role: 'Solo Developer',
  },
  {
    slug: 'coffee-cup',
    name: 'Coffee Cup',
    category: 'Business website & admin',
    subtitle:
      'A coffee shop storefront with a customer ordering flow and admin dashboard',
    description:
      'Coffee Cup pairs a polished storefront with a practical admin panel. Customers browse the catalogue, add items to a cart and place orders, while the shop side provides a dashboard for reviewing and managing those orders. It is a compact example of a two-sided application built with React.',
    problem:
      'A shop needs more than an attractive menu. This project required one codebase to serve two very different audiences — customers placing orders and staff managing them.',
    solution:
      'I built a shared component system and a Context-based state layer, then split the experience into a customer storefront and an admin dashboard with separate views for order management.',
    challenges: [
      {
        problem:
          'The storefront and admin panel shared order data, but separate component state meant staff updates did not reliably appear on the customer side.',
        solution:
          'I moved the cart and orders into one Context store with explicit actions, then split the views into feature sections that read and write the same source.',
      },
      {
        problem:
          'The admin orders table overflowed on phones and hid the status controls staff needed most during order handling.',
        solution:
          'Below the md breakpoint I switched the table to stacked order cards, keeping the status and primary action visible while preserving the table on desktop.',
      },
      {
        problem:
          'With no backend, a refresh wiped placed orders and made the admin dashboard look broken during demos.',
        solution:
          'I persisted orders to localStorage with a versioned shape and a safe rehydration fallback, so the dashboard always opened with usable data.',
      },
    ],
    features: [
      'Product catalogue organised by category',
      'Cart with real-time quantity and total updates',
      'Order placement and status tracking',
      'Admin dashboard for reviewing and managing orders',
      'Role-aware interface for customers and staff',
      'Responsive Tailwind CSS layout',
      'Shared state managed with Context API',
    ],
    learned:
      'How to structure a codebase for two audiences, design admin workflows that stay simple under pressure, and keep component patterns reusable across very different screens.',
    image: project5Image,
    imageAlt: 'Coffee Cup coffee shop website with admin dashboard',
    live: 'https://coffeeap.vercel.app/',
    github: 'https://github.com/VickyNarvare/coffeeapp',
    tech: ['React', 'Tailwind CSS', 'Context API', 'Vite'],
    role: 'Solo Developer',
  },
  {
    slug: 'noir-frame-studio',
    name: 'Noir Frame Studio',
    category: 'Photography portfolio',
    subtitle: 'A cinematic portfolio for wedding and portrait photography',
    description:
      'Noir Frame Studio is a photography portfolio built around atmosphere. Large-format imagery, restrained typography and a dark cinematic palette give wedding, portrait and event work room to breathe. Every section is arranged to move visitors from the first image to an enquiry without friction.',
    problem:
      'Photography portfolios live or die on presentation. The challenge was to showcase a large body of visual work without letting navigation, layout or loading get in the way of the images.',
    solution:
      'I designed a dark, editorial layout with immersive image sections, a clear service and category structure, and contact-focused calls to action — all responsive across mobile, tablet and desktop.',
    challenges: [
      {
        problem:
          'Full-resolution gallery images made the first paint slow and shifted the layout as each photo loaded.',
        solution:
          'I resized and converted the images to WebP, eager-loaded only the hero, lazy-loaded the rest, and reserved space with fixed aspect ratios.',
      },
      {
        problem:
          'Copy placed over bright areas of the photography lost contrast and became difficult to read.',
        solution:
          'I added controlled dark scrims and gradients behind the text, kept type out of busy image areas, and checked contrast in both themes.',
      },
      {
        problem:
          'Mixed portrait and landscape photos left awkward gaps in the gallery grid at tablet widths.',
        solution:
          'I wrapped each image in a fixed aspect-ratio frame, used a responsive grid with intentional spans, and set art-directed crops per breakpoint.',
      },
    ],
    features: [
      'Cinematic image-led portfolio layout',
      'Dedicated wedding and portrait galleries',
      'Dark editorial design system',
      'Responsive across mobile, tablet and desktop',
      'Smooth navigation between sections',
      'Service and photography category pages',
      'Enquiry-focused calls to action',
      'Immersive, image-first storytelling',
    ],
    learned:
      'How to design for visual content, build a typographic hierarchy that supports rather than competes with imagery, and guide visitors toward an enquiry without breaking the mood.',
    image: project9Image,
    imageAlt: 'Noir Frame Studio cinematic photography portfolio',
    live: 'https://photograpy-website-by-vicky.vercel.app/',
    github: 'https://github.com/VickyNarvare/PhotograpyWebsiteAPart1',
    tech: ['React', 'Tailwind CSS', 'React Router', 'Responsive Design'],
    role: 'Solo Developer',
  },
  {
    slug: 'fitnessclub',
    name: 'FitnessClub',
    category: 'Gym & fitness',
    subtitle:
      'A gym website with membership pricing, trainer profiles and animated stats',
    description:
      "FitnessClub is a business website for a modern gym. It brings membership plans, trainer profiles, class information and a contact form into a single, fast experience, supported by scroll-based animation and an animated stats counter that reinforces the brand's energy.",
    problem:
      'Gyms sell on energy and trust. The site needed to communicate both quickly — with clear pricing, credible trainer profiles and a browsing experience that feels as active as the space it represents.',
    solution:
      'I built the site with CSS Grid and Flexbox, added smooth scroll navigation, an animated stats counter and a mobile-first menu, keeping the markup semantic and the interactions lightweight.',
    challenges: [
      {
        problem:
          'The active navigation link jumped to the wrong section because each section had a different height and the scroll logic relied on one fixed offset.',
        solution:
          'I replaced the scroll math with IntersectionObserver, recalculated thresholds on resize, and handled the final section so the last link activated correctly.',
      },
      {
        problem:
          'The animated stats counter restarted every time it re-entered the viewport, so the numbers jumped during normal scrolling.',
        solution:
          'I made the animation run once, triggered it with IntersectionObserver and updated values through requestAnimationFrame for smooth, predictable motion.',
      },
      {
        problem:
          'The mobile menu stayed open after a link was tapped, kept the page scroll locked and could not be dismissed from the keyboard.',
        solution:
          'I closed it on link click and Escape, synced aria-expanded, locked body scroll only while open, and added an outside-click close.',
      },
    ],
    features: [
      'Smooth scroll navigation with active section states',
      'Mobile-friendly hamburger menu',
      'Animated membership statistics counter',
      'Tiered pricing plans with feature lists',
      'Trainer profiles and specialities',
      'Contact form with client-side validation',
      'Semantic, accessible markup',
    ],
    learned:
      'How to use layout and motion to convey brand personality, build responsive grids that hold up at every breakpoint, and keep animation purposeful on a content-heavy page.',
    image: project7Image,
    imageAlt: 'FitnessClub gym website with pricing and trainer profiles',
    live: 'https://gymwebsite-vicky.vercel.app',
    github: 'https://github.com/VickyNarvare/GYM',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Flexbox', 'CSS Grid'],
    role: 'Solo Developer',
  },
  {
    slug: 'yesh-enterprises',
    name: 'YESH Enterprises',
    category: 'Business website',
    subtitle:
      'A professional business site with interactive pricing and client testimonials',
    description:
      'YESH Enterprises is a business platform designed to make a service company look established from the first scroll. A dark, high-contrast interface pairs an interactive pricing comparison with service descriptions and a testimonial section, giving prospects the information they need to get in touch.',
    problem:
      'Service businesses have to earn trust before a conversation starts. The site needed to present pricing clearly, back it with social proof and still feel premium rather than transactional.',
    solution:
      'I designed a dark-themed interface with interactive pricing cards, a testimonial carousel and a structured service showcase, using gradient accents and restrained motion to create a modern, credible first impression.',
    challenges: [
      {
        problem:
          'Plans with different feature counts produced uneven pricing cards, so the call-to-action buttons no longer lined up.',
        solution:
          'I made each card an equal-height flex column and pushed the CTA to the bottom with auto margins so feature lists could grow without breaking alignment.',
      },
      {
        problem:
          'The testimonial slider overflowed its container on mobile and its arrow controls were too small to use comfortably.',
        solution:
          'I rebuilt it as a touch-friendly scroll-snap track, hid the arrows on mobile, and added keyboard controls plus clear aria labels.',
      },
      {
        problem:
          'Animated gradients and broad transitions caused visible jank on lower-end devices.',
        solution:
          'I limited animation to transform and opacity, removed transition-all, and respected prefers-reduced-motion while keeping the hover states intact.',
      },
    ],
    features: [
      'Modern dark-themed responsive design',
      'Interactive pricing plans with feature comparison',
      'Testimonials and client reviews',
      'Detailed service showcase',
      'Gradient accents and polished UI components',
      'Smooth transitions and hover states',
      'Conversion-focused contact prompts',
    ],
    learned:
      'How to use contrast and hierarchy to build a premium feel, present pricing without overwhelming visitors, and turn testimonials into a genuine trust signal.',
    image: project8Image,
    imageAlt:
      'YESH Enterprises business website with pricing and testimonials',
    live: 'https://yeshenterprises.vercel.app/',
    github: 'https://github.com/VickyNarvare/YeshEnterprises',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    role: 'Solo Developer',
  },
];
