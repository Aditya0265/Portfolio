export const navLinks = [
  { label: 'Home',         href: '#home'         },
  { label: 'About',        href: '#about'        },
  { label: 'Skills',       href: '#skills'       },
  { label: 'Projects',     href: '#projects'     },
  { label: 'Experience',   href: '#experience'   },
  { label: 'Education',    href: '#education'    },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Blog',         href: '#blog'         },
  { label: 'Resume',       href: '#resume'       },
  { label: 'Contact',      href: '#contact'      },
]

export const social = {
  github:   'https://github.com/Aditya0265',
  linkedin: 'https://linkedin.com/in/suryadevara-aditya', // [PLACEHOLDER — update]
  email:    'suryadevaraaditya2005@gmail.com',
}

export const education = [
  {
    degree:      'Bachelor of Technology — Computer Science & Engineering',
    institution: 'Gokaraju Rangaraju Institute of Engineering & Technology',
    location:    'Hyderabad, India',
    period:      'Sep 2023 – Present',
    cgpa:        '7.9 / 10',
    tags:        ['Full-Stack Development', 'AI/ML', 'Data Structures and Algorithms', 'Database Management System', 'Cloud Computing','Operating Systems', 'Software Engineering and Design Patterns'],
  },
  {
    degree:      'Intermediate / Class XII — MPC',
    institution: 'Sri Chaitanya Junior College',
    location:    'Hyderabad, India',
    period:      'Graduated in 2023',
    cgpa:        '91.4%',
    tags:        [],
  },
  {
    degree:      'Secondary School / Class X',
    institution: 'Oakridge International School',
    location:    'Hyderabad, India',
    period:    'Graduated in 2021 ',
    cgpa:        '85%',
    tags:        [],
  },
]

export const skills = {
  'Programming Languages': ['Java', 'Python', 'C'],
  'Web Technologies':      ['HTML5', 'CSS3', 'JavaScript', 'React.js'],
  'Frameworks & Tools':    ['Git', 'GitHub', 'Docker', 'VS Code', 'Adobe Photoshop'],
  'Databases':             ['Oracle SQL', 'MongoDB'],
  'Soft Skills':           ['Teamwork', 'Problem Solving', 'Communication'],
}

export const experience = [
  {
    role:     'Project Intern',
    company:  'BytesEdge Private Limited',
    location: 'Hyderabad, India',
    period:   'Jan 2026 – Mar 2026',
    bullets:  [
      'Built and updated web pages focused on real-world functionality, improving debugging and implementation discipline.',
      'Created visual assets using Adobe Photoshop, applying UI/UX principles including layout, hierarchy, and usability.',
      'Supported marketing deliverables through audience targeting notes and structured product review inputs.',
      'Worked across development, UI/UX, and digital marketing for end-to-end product delivery understanding.',
    ],
  },
  {
    role:     'Volunteer — Logistics & Medical Assistance',
    company:  'Lions Club',
    location: 'Hyderabad, Telangana',
    period:   'Sep 2023 – Present',
    bullets:  [
      'Assisted medical professionals during community health camps, managing patient flow and record-keeping.',
      'Coordinated equipment and supply logistics, collaborating with teams under tight schedules.',
    ],
  },
]

export const projects = [
  {
    name:        'AdoptAPaw',
    description: 'A dynamic web application enabling users to browse, filter, and adopt pets through a real-time listing system. Built with RESTful APIs and MongoDB for user profiles and adoption requests.',
    tech:        ['MongoDB', 'Express', 'React.js', 'Node.js'],
    github:      'https://github.com/Aditya0265/AdoptAPaw', // [PLACEHOLDER — update with direct repo URL]
    live:        null,
  },
  {
    name:        'Connecting the Dots',
    description: 'Document query-retrieval system using NLP and FAISS-based semantic search, achieving accurate and explainable results in under 30 seconds. Led a 3-member team; deployed on Docker for CPU-only systems.',
    tech:        ['Python', 'FAISS', 'NLP', 'Docker'],
    github:      'https://github.com/Aditya0265/adobe-hackathon-2025', // [PLACEHOLDER — update with direct repo URL]
    live:        null,
  },
  {
    name:        'ReCarma — Frontend Modules',
    description: 'Responsive frontend modules for a vehicle lifecycle and sustainability platform. Implemented structured layouts, reusable components, and interactive elements to improve usability and navigation flow.',
    tech:        ['React.js', 'CSS3', 'JavaScript'],
    github:      'https://github.com/Aditya0265/ReCarma', // [PLACEHOLDER — update with direct repo URL]
    live:        null,
  },
]

export const achievements = [
  {
    title:  'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
    issuer: 'Oracle',
    date:   'Aug 2025',
    icon:   '☁️',
  },
  {
    title:  'HackerRank — Java (Basic)',
    issuer: 'HackerRank',
    date:   'Mar 2025',
    icon:   '☕',
  },
  {
    title:  'HackerRank — Python (Basic)',
    issuer: 'HackerRank',
    date:   'Feb 2025',
    icon:   '🐍',
  },
  {
    title:  'Zscaler Fundamentals of Cyber Security',
    issuer: 'Zscaler',
    date:   'Nov 2024',
    icon:   '🔐',
  },
  {
    title:  'Infosys — JavaScript for Beginners',
    issuer: 'Infosys Springboard',
    date:   'Oct 2024',
    icon:   '📜',
  },
  {
    title:  'AWS Academy Cloud Foundations',
    issuer: 'Amazon Web Services',
    date:   'Dec 2023',
    icon:   '⚡',
  },
]

export const placeholderBlogs = [
  {
    title:   'Getting Started with Docker: What I Learned Building Connecting the Dots',
    summary: 'A walkthrough of containerizing a FAISS-based NLP application for CPU-only systems — challenges, solutions, and lessons learned.',
    tags:    ['Docker', 'NLP', 'Python'],
    date:    '2026-02-01',
    slug:    'docker-faiss-nlp',
  },
  {
    title:   'Why I Chose MongoDB for AdoptAPaw',
    summary: 'Comparing SQL vs NoSQL for a pet adoption platform — schema flexibility, adoption request flows, and the real-world trade-offs.',
    tags:    ['MongoDB', 'Database Design', 'MERN'],
    date:    '2025-12-10',
    slug:    'mongodb-adoptapaw',
  },
  {
    title:   'My AWS Cloud Foundations Journey',
    summary: 'Notes and key takeaways from completing the AWS Academy Cloud Foundations certification — concepts, services, and study tips.',
    tags:    ['AWS', 'Cloud', 'Certification'],
    date:    '2024-01-15',
    slug:    'aws-cloud-foundations',
  },
]