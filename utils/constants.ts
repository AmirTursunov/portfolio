import { v4 as uuidv4 } from 'uuid';
import { z } from 'zod';

export const projectSchema = z.object({
  id: z.string(),
  name: z.string(),
  img: z.string(),
  stack: z.array(z.string()),
  url: z.string(),
  code_base: z.string().nullable(),
  description: z.string(),
});

export type Project = z.infer<typeof projectSchema>;

const projects: Project[] = [
  // {
  //   id: uuidv4(),
  //   name: "My Collections",
  //   img: "/projects/myCollections.png",
  //   stack: [
  //     "React",
  //     "Node.js",
  //     "MongoDB",
  //     "Express.js",
  //     "Socket.io",`
  //     "Redux+Saga+Toolkit",
  //     "Ant Design UI",
  //     "Jsonwebtoken",
  //   ],
  //   url: "https://mycollections-mirfayz.netlify.app",
  //   code_base: "https://github.com/mrkarimoff/mycollection_frontend",
  //   description:
  //     "This application is for collectors! This is my first MERN stack application. I have learned and experimented many features and backend technologies in this application",
  // },
  {
    id: uuidv4(),
    name: 'Barber Shop',
    img: '/projects/barber.png',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind', 'CSS', 'Clerk'],
    url: 'https://barber-shop-mu-black.vercel.app/',
    code_base: 'https://github.com/AmirTursunov/barber-shop',
    description:
      'Developed a modern barber shop web app using Next and Supabase. Features include online booking, service selection, barber selection, and admin management.',
  },
  {
    id: uuidv4(),
    name: 'Greenshop',
    img: '/projects/greenshop.png',
    stack: [
      'Next.js 13 and React',
      'TypeScript',
      'Supabase',
      'Tailwind CSS',
      'Vercel',
      'CSS',
      'Clerk',
    ],
    url: 'https://greenshop-black.vercel.app/',
    code_base: 'https://github.com/AmirTursunov/online-store',
    description:
      'An e-commerce web application built with Next and Supabase. The platform allows users to browse products, add items to the cart, and complete purchases through a seamless checkout process.',
  },
  {
    id: uuidv4(),
    name: 'Resume Builder',
    img: '/projects/resumeBuilder.png',
    stack: [
      'Next.js',
      'TypeScript',
      'Supabase',
      'TailwindCSS',
      'Vercel',
      'Clerk',
    ],
    url: 'https://resume-builder-two-rosy.vercel.app/',
    code_base: 'https://github.com/AmirTursunov/resume-builder',
    description:
      'A web-based Resume Builder application that allows users to create, customize, and export professional resumes. The app features user authentication, dynamic resume templates, real-time data saving, and PDF export functionality.',
  },
  {
    id: uuidv4(),
    name: 'Weather App',
    img: '/projects/weatherApp.png',
    stack: ['React', 'HTML/CSS', 'Api'],
    url: 'https://weather-app-coral-eta-17.vercel.app/',
    code_base: null,
    description:
      'This is a weather app that I have built using OpenWeather API which provides hourly weather forecast',
  },
  {
    id: uuidv4(),
    name: 'Get Quote',
    img: '/projects/quote.png',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Api'],
    url: 'https://get-quotes-zeta.vercel.app/',
    code_base: 'https://github.com/AmirTursunov/get-quotes',
    description:
      'A simple and responsive Get Quotes application that allows users to request service quotes quickly and easily. Built with a clean UI and designed for service-based businesses to collect customer inquiries efficiently.',
  },
  {
    id: uuidv4(),
    name: 'Expense Tracker',
    img: '/projects/expense.png',
    stack: [
      'React',
      'JavaScript',
      'Firebase',
      'Tailwind CSS and Radix UI components',
      'Vercel for deployment',
    ],
    url: 'https://expense-tracker-liart-two.vercel.app/',
    code_base: 'https://github.com/AmirTursunov/expense-tracker',
    description:
      'This Expense Tracker is a modern, responsive web application built with React and Firebase Realtime Database. It allows users to easily track their income and expenses in real-time, helping them manage their personal finances effectively.',
  },
  {
    id: uuidv4(),
    name: 'Beauty Salon',
    img: '/projects/beauty.png',
    stack: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Firebase',
      'Tailwind CSS',
      'Vercel for deployment',
    ],
    url: 'https://beauty-steel.vercel.app/',
    code_base: 'https://github.com/AmirTursunov/beauty',
    description:
      'A responsive Beauty Salon website built with HTML, CSS, and JavaScript. The site features a modern design, showcasing services, testimonials, and a contact form for customer inquiries.',
  },
];

export default projects;
