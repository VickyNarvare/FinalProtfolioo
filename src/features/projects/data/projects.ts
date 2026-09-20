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
    category: 'Food ordering',
    subtitle: 'Food ordering app with cart and checkout system',
    description:
      'A full-featured food ordering platform with menu browsing, shopping cart, promo code validation, and order tracking. Built to practice e-commerce flows including state management, form validation, and multi-step checkout with persistent state.',
    problem:
      'Practice building a complete e-commerce flow with complex state management',
    solution:
      'Implemented cart system with Context API, multi-step checkout, and order tracking',
    features: [
      'Shopping cart with add/remove/quantity controls',
      'Promo code validation (SAVE10, SAVE20, FLAT400)',
      'Order tracking with 4-stage visual timeline',
      'Persistent state using localStorage',
      'Menu browsing with category filters',
      'Mobile-responsive design',
    ],
    learned:
      'Managing complex state across multiple components, form validation patterns, and building reusable component architecture',
    image: project6Image,
    imageAlt: 'Foodie Delight app screenshot',
    live: 'https://foodwebsite-vicky.vercel.app',
    github: 'https://github.com/VickyNarvare/Advance-Food-Ordering-App',
    tech: [
      'React',
      'Tailwind CSS',
      'Context API',
      'React Router',
      'LocalStorage',
    ],
    tone: '#2b211c',
    role: 'Solo Developer',
    layout: 'left',
  },
  {
    slug: 'coffee-cup',
    name: 'Coffee Cup',
    category: 'Business website + admin',
    subtitle: 'Coffee shop website with admin dashboard',
    description:
      'A complete coffee shop e-commerce site with customer ordering flow and admin panel for order management. Features product catalog, shopping cart, and order processing.',
    problem:
      'Create a complete ordering system with both customer and admin interfaces',
    solution:
      'Built dual-interface system with customer ordering flow and admin dashboard for order management',
    features: [
      'Product catalog with categories',
      'Shopping cart with real-time updates',
      'Order placement and tracking',
      'Admin dashboard for order management',
      'Responsive design with Tailwind CSS',
      'State management with Context API',
    ],
    learned:
      'Building admin interfaces, managing different user roles, and creating scalable component structures',
    image: project5Image,
    imageAlt: 'Coffee Cup website screenshot',
    live: 'https://coffeeap.vercel.app/',
    github: 'https://github.com/VickyNarvare/coffeeapp',
    tech: ['React', 'Tailwind CSS', 'Context API', 'Vite'],
    tone: '#22261f',
    role: 'Solo Developer',
    layout: 'right',
  },
  {
    slug: 'noir-frame-studio',
    name: 'Noir Frame Studio',
    category: 'Photography',
    subtitle: 'Cinematic wedding and portrait photography website',
    description:
      'A premium photography portfolio website designed for showcasing cinematic wedding, portrait, and special-event photography. The website focuses on immersive visuals, elegant typography, smooth navigation, and a premium dark aesthetic to create a strong visual experience for potential clients.',
    problem:
      'Practice building a premium portfolio website for a photography studio with strong visual storytelling and a modern cinematic user experience',
    solution:
      'Implemented a responsive photography portfolio with cinematic dark styling, immersive image sections, structured service presentation, portfolio showcasing, and clear contact-focused user experience',
    features: [
      'Cinematic photography portfolio showcase',
      'Wedding and portrait photography sections',
      'Premium dark-themed visual design',
      'Responsive layout for mobile, tablet, and desktop',
      'Smooth navigation between website sections',
      'Service and photography category presentation',
      'Contact-focused call-to-action sections',
      'Immersive image-based storytelling',
    ],
    learned:
      'Improved skills in building visually-driven React websites, creating cinematic UI layouts, responsive design, image presentation, typography hierarchy, and designing portfolio experiences focused on client conversion',
    image: project9Image,
    imageAlt: 'Noir Frame Studio photography website screenshot',
    live: 'https://photograpy-website-by-vicky.vercel.app/',
    github: 'https://github.com/VickyNarvare/PhotograpyWebsiteAPart1',
    tech: ['React', 'Tailwind CSS', 'React Router', 'Responsive Design'],
    tone: '#1f2027',
    role: 'Solo Developer',
    layout: 'right',
  },
  {
    slug: 'fitnessclub',
    name: 'FitnessClub',
    category: 'Gym website',
    subtitle: 'Gym website with pricing and trainer profiles',
    description:
      'A responsive gym business website featuring pricing plans, trainer showcase, and smooth scroll animations. Built with modern CSS layouts and vanilla JavaScript.',
    problem:
      'Create a professional business website with multiple content sections and smooth user experience',
    solution:
      'Implemented CSS Grid/Flexbox layouts, animated stats counter, and mobile-responsive navigation',
    features: [
      'Smooth scroll navigation',
      'Mobile hamburger menu',
      'Animated stats counter',
      'Pricing plans section',
      'Trainers showcase',
      'Contact form with validation',
    ],
    learned:
      'Advanced CSS layouts, scroll-based animations, and creating professional business websites',
    image: project7Image,
    imageAlt: 'FitnessClub Gym Website by Vicky Narvare',
    live: 'https://gymwebsite-vicky.vercel.app',
    github: 'https://github.com/VickyNarvare/GYM',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Flexbox', 'CSS Grid'],
    tone: '#2a2420',
    role: 'Solo Developer',
    layout: 'right',
  },
  {
    slug: 'yesh-enterprises',
    name: 'YESH Enterprises',
    category: 'Business website',
    subtitle: 'Business website with pricing and testimonials',
    description:
      'A professional business platform with dark theme design, interactive pricing comparison, testimonial section, and service showcase.',
    problem:
      'Create a professional business platform with pricing comparison and social proof elements',
    solution:
      'Designed dark-themed UI with interactive pricing cards, testimonial carousel, and service showcase',
    features: [
      'Modern dark-themed responsive design',
      'Interactive pricing plans with feature comparison',
      'Testimonials and reviews section',
      'Service showcase with detailed descriptions',
      'Smooth animations and transitions',
      'Professional gradient effects and modern UI components',
    ],
    learned:
      'Dark theme design principles, pricing table patterns, and building trust through testimonials',
    image: project8Image,
    imageAlt: 'YESH Enterprises Business Platform by Vicky Narvare',
    live: 'https://yeshenterprises.vercel.app/',
    github: 'https://github.com/VickyNarvare/YeshEnterprises',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    tone: '#1f2027',
    role: 'Solo Developer',
    layout: 'right',
  },
];
