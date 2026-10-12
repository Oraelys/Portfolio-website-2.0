export type Category = 'blockchain' | 'web' | 'mobile';
export type MockupVariant = 'rider' | 'admin' | 'reader' | 'desktop';

export interface Project {
  id: number;
  title: string;
  description: string;
  category: Category;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface GroupApp {
  id: string;
  name: string;
  audience: string;
  platform: 'Mobile' | 'Desktop';
  description: string;
  highlights: string[];
  technologies: string[];
  mockup: MockupVariant;
  liveUrl?: string;
  githubUrl?: string;
}

export interface ProjectGroupData {
  id: string;
  name: string;
  tagline: string;
  description: string;
  accent: string; // hex
  sharedStack: string[];
  apps: GroupApp[];
}

/** Standalone projects (not part of a group). */
export const projects: Project[] = [
  {
    id: 1,
    title: 'Notty Terminal',
    description:
      'A revolutionary permissionless launchpad powered by a Dynamic Reputation System (DRS). Notty transforms on-chain behavior into verifiable reputation and trust, solving the rug-pull problem by creating a transparent ecosystem where every wallet builds a reputation based on real activity.',
    category: 'blockchain',
    technologies: ['Solana', 'Rust', 'Anchor', 'React', 'Web3.js'],
    image:
      'https://raw.githubusercontent.com/NimrodTheDev/Notty-Terminal/refs/heads/main/public/Hero2.png?w=800',
    liveUrl: 'https://solana-market-place.onrender.com/',
    githubUrl: 'https://github.com/NimrodTheDev/Notty-Terminal',
    featured: true,
  },
  {
    id: 2,
    title: 'What The Burn',
    description:
      'A full-stack Web3 platform featuring a unique burn-to-claim mechanic. Users burn tokens to increase scarcity, dynamically upgrade NFTs, and boost overall collection value. I built the entire frontend and integrated it with RainbowKit for wallet authentication.',
    category: 'blockchain',
    technologies: ['Solidity', 'Django', 'React', 'RainbowKit', 'Web3.js'],
    image:
      'https://raw.githubusercontent.com/phanstudio/What-the-burn/refs/heads/main/public/what.png?ixlib=rb-4.0.3&auto=format&fit=crop&q=80',
    liveUrl: 'https://what-the-burn.vercel.app/',
    githubUrl: 'https://github.com/phanstudio/What-the-burn',
    featured: true,
  },
  {
    id: 4,
    title: 'Habit Tracker App',
    description:
      'A simple but effective application for tracking desired habits on a daily, weekly, or monthly basis. It features a user-friendly design, with React and React Native for the app structure and Appwrite for user authentication and data storage.',
    category: 'mobile',
    technologies: ['React', 'React Native', 'Appwrite'],
    image:
      'https://raw.githubusercontent.com/oraelys/Habit-Tracker-app/main/assets/images/Habittrackerimage.jpg',
    featured: true,
  },
  {
    id: 5,
    title: 'Axivian Systems',
    description:
      'A responsive corporate consulting website built to present the company’s services, communicate its value proposition, and help prospective clients get in touch. It includes dedicated Home, Services, About, and Contact pages, with an EmailJS-powered contact form.',
    category: 'web',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'EmailJS'],
    image: 'https://consultants-company-website.vercel.app/consult%20bg.jpg',
    liveUrl: 'https://consultants-company-website.vercel.app/',
    githubUrl: 'https://github.com/Oraelys/Consultants-company-website',
    featured: true,
  },
];

/** Project groups: one product, several apps. */
export const projectGroups: ProjectGroupData[] = [
  {
    id: 'ovena',
    name: 'Ovena',
    tagline: 'Multi-restaurant food delivery, end to end',
    description:
      'A multi-restaurant food delivery platform split into purpose-built apps that share one Django REST backend on Railway. I designed and deployed the backend (Paystack payments, Mailchimp SMS notifications, Termii OTP verification, GCP OAuth) and built the React Native / Expo apps on top of it, organised as a monorepo.',
    accent: '#f56e0f',
    sharedStack: [
      'React Native',
      'Expo',
      'TypeScript',
      'Django REST',
      'PostgreSQL',
      'Railway',
      'Paystack',
    ],
    apps: [
      {
        id: 'ovena-rider',
        name: 'Ovena Rider',
        audience: 'For delivery drivers',
        platform: 'Mobile',
        description:
          'The driver-facing app: onboard, accept deliveries, complete them in the field, and get paid, with live order updates over WebSockets.',
        highlights: [
          'Multi-step onboarding wizard that resumes where the driver left off',
          'Live order status over a hardened WebSocket layer',
          'Slide-to-complete delivery flow with safe retry on failure',
          'Support ticket inbox with chat and optimistic ticket creation',
          'Idempotent withdrawals and persisted order history',
        ],
        technologies: ['React Native', 'Expo', 'WebSockets', 'AsyncStorage', 'TypeScript'],
        mockup: 'rider',
      },
      {
        id: 'ovena-admin',
        name: 'Ovena Admin',
        audience: 'For operations & support teams',
        platform: 'Mobile',
        description:
          'A dark-themed control room for running the platform: monitor orders, manage users, run promotions, and answer support, all from one app.',
        highlights: [
          'Dashboard tabs: Home, Active Orders, Users, Operations, Stats, Support',
          'User management with offset pagination and de-duplication',
          'Promotion tools: coupons, spinwheel, push notifications, banners',
          'Analytics with an animated SVG donut chart',
          'Support Hub with paginated tickets, chat and background refresh',
        ],
        technologies: ['React Native', 'Expo Router', 'TypeScript', 'REST APIs', 'Light/Dark theming'],
        mockup: 'admin',
      },
    ],
  },
  {
    id: 'inkwell',
    name: 'Inkwell',
    tagline: 'A reading and publishing platform for stories',
    description:
      'A platform where authors write and publish stories and readers discover and follow them. It is built on a NestJS + Supabase backend (auth, Postgres, storage) with a mobile app for readers and authors and a separate desktop app for admins.',
    accent: '#7c3aed',
    sharedStack: ['Expo Router', 'React Native', 'TypeScript', 'NestJS', 'Supabase'],
    apps: [
      {
        id: 'inkwell-mobile',
        name: 'Inkwell Mobile',
        audience: 'For readers & authors',
        platform: 'Mobile',
        description:
          'The core reading and writing experience: discover books, follow authors, and write and publish chapters from your phone.',
        highlights: [
          'Home with ad carousel, tag-based book sections and personalised ordering',
          'Multi-step Create Story flow with cover upload',
          'Writing editor with autosave and chapter publishing',
          'Stories management and social screens',
        ],
        technologies: ['Expo Router', 'React Native', 'Supabase', 'TypeScript'],
        mockup: 'reader',
      },
      {
        id: 'inkwell-admin',
        name: 'Inkwell Admin Desktop',
        audience: 'For platform admins',
        platform: 'Desktop',
        description:
          'An admin-only desktop client for managing the platform, including importing manuscripts as admin-curated books.',
        highlights: [
          'Electron + React desktop app talking to the Inkwell API',
          'Manuscript import with cover upload',
          'Role-gated: admin accounts only',
        ],
        technologies: ['Electron', 'React', 'TypeScript', 'NestJS API'],
        mockup: 'desktop',
      },
    ],
  },
];
