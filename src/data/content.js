// ─────────────────────────────────────────────
// SITE IDENTITY
// ─────────────────────────────────────────────
export const site = {
  name: 'Abdul Qayum Akindele',
  identity: 'Cybersecurity Learner · AI Learner · Technical Writer · Content Creator · Technology Enthusiast',
  hero: 'I build, learn, research, and document my journey in cybersecurity and technology.',
  email: 'akindeleabdulqayum@gmail.com',
  social: [
    ['LinkedIn',  'https://www.linkedin.com/in/abdul-qayum-akindele-bb33573a3'],
    ['GitHub',    'https://github.com/abdulqayumakindele'],
    ['TikTok',    'https://www.tiktok.com/@akindeleabdulqayum'],
    ['Substack',  'https://substack.com/@offlimittech'],
    ['Snapchat',  'https://www.snapchat.com/add/akindele.16'],
    ['Facebook',  'https://www.facebook.com/share/18XMAV73NC/'],
  ],
};

// ─────────────────────────────────────────────
// HOMEPAGE — CURRENTLY FOCUSED ON (locked — 7 items)
// ─────────────────────────────────────────────
export const focus = [
  'Cybersecurity & Ethical Hacking',
  'AI & Technology',
  'Python & Development',
  'Web Development',
  'Research & Analysis',
  'Technical Writing',
  'Technology Content Creation',
];

// ─────────────────────────────────────────────
// HOMEPAGE — CURRENTLY BUILDING CARDS
// ─────────────────────────────────────────────
export const building = [
  {
    title: 'Cybersecurity',
    description: 'Developing practical security and ethical-hacking skills.',
  },
  {
    title: 'AI & Technology',
    description: 'Learning and exploring emerging technology.',
  },
  {
    title: 'Python',
    description: 'Strengthening programming fundamentals.',
  },
  {
    title: 'Technical Writing',
    description: 'Turning technical learning into clear explanations.',
  },
];

// ─────────────────────────────────────────────
// WRITING
// status: 'Published' | 'Coming Soon'
// Leave url as '' for Coming Soon items — do NOT invent URLs.
// ─────────────────────────────────────────────
export const writings = [
  {
    title: 'DNS: How Your Device Finds a Website on the Internet',
    type: 'Technical Writing',
    platform: 'OFF_LIMIT TECH · Dev.to',
    description: 'A beginner-friendly explanation of how DNS helps your device find websites on the internet.',
    date: '',
    url: 'https://dev.to/off_limit001/dns-explained-how-your-device-finds-a-website-on-the-internet-4p0a',
    status: 'Published',
  },
  {
    title: 'I Was Called Aspiring, Then I Realized…',
    type: 'Personal Writing',
    platform: 'Substack',
    description: 'A personal reflection on moving from simply aspiring to becoming an active learner and builder.',
    date: '',
    url: 'https://offlimit.substack.com/p/i-was-called-aspiring-then-i-realized?utm_source=share&utm_medium=android&r=6ldiuj',
    status: 'Published',
  },
  {
    title: 'My 100 Days in Tech',
    type: 'Personal Writing',
    platform: 'Personal',
    description: 'A documentation of a 100-day learning journey through technology.',
    date: 'September 26, 2026',
    url: '',  // DO NOT add a URL until published
    status: 'Coming Soon',
  },
];

// ─────────────────────────────────────────────
// QUOTES & THOUGHTS
// category: 'Life & Growth' | 'Technology & Cybersecurity' | 'Learning' | 'Books & Ideas' | 'Personal Thoughts'
// type: 'Original Thought' | 'Personal Observation' | 'Book Quote' | 'Lesson Learned' | 'Personal Writing'
// Preserve original wording exactly — do not rewrite.
// ─────────────────────────────────────────────
export const quotes = [
  // ── Life & Growth ────────────────────────
  {
    id: 1,
    text: 'Discipline is not about being perfect every day. It\'s about returning to the path every time life pulls you away.',
    category: 'Life & Growth',
    type: 'Original Thought',
    attribution: 'Abdul Qayum Akindele',
    featured: true,
  },

  // ── Technology & Cybersecurity ───────────
  {
    id: 2,
    text: 'There is always a vulnerability (a loophole) in everything.\n\nThe faster you click the links, the easier it is to be a victim.\n\nNo matter how safe you think you are, you are not safe from the internet because there is always a loophole.',
    category: 'Technology & Cybersecurity',
    type: 'Personal Observation',
    attribution: 'Abdul Qayum Akindele',
    featured: false,
  },

  // ── Learning ─────────────────────────────
  {
    id: 3,
    text: 'The hardest part of learning is sometimes continuing when you feel like you\'re not improving.',
    category: 'Learning',
    type: 'Original Thought',
    attribution: 'Abdul Qayum Akindele',
    featured: false,
  },

  // ── Books & Ideas ────────────────────────
  {
    id: 4,
    text: 'To think big we must use words and phrases which produce big, positive mental images.',
    category: 'Books & Ideas',
    type: 'Book Quote',
    attribution: 'David J. Schwartz',
    book: 'The Magic of Thinking Big',
    chapter: 'Chapter 4 — How to Think Big',
    page: 96,
    featured: false,
  },
  {
    id: 5,
    text: 'These social norms are the invisible rules that guide your behavior each day.',
    category: 'Books & Ideas',
    type: 'Book Quote',
    attribution: 'James Clear',
    book: 'Atomic Habits',
    page: 95,
    featured: false,
  },
  {
    id: 6,
    text: 'Our present and our future have already been decided by past occurrences, and are unalterable.',
    category: 'Books & Ideas',
    type: 'Book Quote',
    attribution: 'Ichiro Kishimi & Fumitake Koga',
    book: 'The Courage to Be Disliked',
    page: 23,
    featured: false,
  },

  // ── Personal Thoughts ────────────────────
  {
    id: 7,
    text: 'As responsibilities increase, life can become different.',
    category: 'Personal Thoughts',
    type: 'Personal Writing',
    attribution: 'Abdul Qayum Akindele',
    source: 'From my unpublished write-up: "DO I REALLY NEED TO MAKE MONEY THIS EARLY?" — Chapter 4: "BUT SOME PEOPLE BECAME SUCCESSFUL WITHOUT UNIVERSITY"',
    featured: false,
  },
];

// Convenience export — the featured quote used on the homepage
export const quote = quotes.find(q => q.featured)?.text ?? quotes[0].text;

// ─────────────────────────────────────────────
// PROJECTS
// featured: true → shown as flagship (OFF_LIMIT TECH only)
// external: true → opens in new tab
// status: 'In Progress' | 'Completed' | 'Planned' | 'Paused'
// category: 'technology' | 'cybersecurity' | 'development' | 'volunteer'
// ─────────────────────────────────────────────
export const projects = [
  {
    name: 'OFF_LIMIT TECH',
    category: 'technology',
    role: 'Founder',
    status: 'In Progress',
    description: 'A technology education brand focused on making cybersecurity and technology easier to understand — one concept at a time.',
    featured: true,
    external: true,
    url: '/off-limit-tech',
  },
  {
    name: 'Personal Portfolio Website',
    category: 'development',
    role: 'Developer',
    status: 'In Progress',
    description: 'A personal portfolio website developed from scratch using Astro and web technologies to showcase my work, learning, qualifications, technical writing, projects, and professional journey.',
    featured: false,
    external: false,
    url: '/',
  },
  // Add future projects here — example structure:
  // {
  //   name: 'Project Name',
  //   category: 'cybersecurity',
  //   role: 'Developer',
  //   status: 'Completed',
  //   description: 'Short description of what was built.',
  //   featured: false,
  //   external: false,
  //   url: '/projects/project-name',
  // },
];

// ─────────────────────────────────────────────
// QUALIFICATIONS
// status: 'Completed' | 'In Progress' | 'Earned'
// ─────────────────────────────────────────────
export const qualifications = {

  education: [
    {
      title: 'Secondary Education',
      provider: 'West African Examinations Council (WAEC)',
      date: 'Completed · 2025',
      status: 'Completed',
      url: '',
    },
    // Add new education entries here
  ],

  technicalLearning: [
    {
      title: 'Introduction to Cybersecurity',
      provider: 'Cisco Networking Academy (NetAcad)',
      date: 'Completed',
      status: 'Completed',
      url: '',
    },
    {
      title: 'Ethical Hacker',
      provider: 'Cisco Networking Academy (NetAcad)',
      date: 'Completed',
      status: 'Completed',
      url: '',
    },
    {
      title: 'Python Essentials 1',
      provider: 'Cisco Networking Academy (NetAcad)',
      date: 'In Progress',
      status: 'In Progress',
      url: '',
    },
    // Add new course entries here
  ],

  certifications: [
    // ── Cisco ─────────────────────────────
    {
      title: 'Ethical Hacking',
      provider: 'Cisco',
      date: 'Completed',
      status: 'Earned',
      url: 'https://www.credly.com/badges/df8601d7-442c-437d-9c9d-dfc00e7c430b/public_url',
    },
    {
      title: 'Introduction to Cybersecurity',
      provider: 'Cisco',
      date: 'Completed',
      status: 'Earned',
      url: 'https://www.credly.com/badges/40815c6c-9ee8-4843-92e2-a3b8c5e77da7/public_url',
    },
    // ── Anthropic ─────────────────────────
    {
      title: 'Claude Platforms 101',
      provider: 'Anthropic',
      date: 'Completed',
      status: 'Earned',
      url: 'https://verify.skilljar.com/c/o3raag7a2vxc',
    },
    {
      title: 'Claude Code 101',
      provider: 'Anthropic',
      date: 'Completed',
      status: 'Earned',
      url: 'https://verify.skilljar.com/c/eaa7igs8a6kk',
    },
    {
      title: 'Claude 101',
      provider: 'Anthropic',
      date: 'Completed',
      status: 'Earned',
      url: 'https://verify.skilljar.com/c/xm35i9a7r9gu',
    },
    {
      title: 'AI Fluency: Framework & Foundations',
      provider: 'Anthropic',
      date: 'Completed',
      status: 'Earned',
      url: 'https://verify.skilljar.com/c/9foiefhkx8ws',
    },
  ],

  professionalDevelopment: [
    {
      tag: 'Cybersecurity',
      title: 'Ethical Hacking & Security',
      description: 'Actively developing practical skills through the Cisco NetAcad Ethical Hacker program and hands-on lab work.',
      status: 'In Progress',
    },
    {
      tag: 'Technical Communication',
      title: 'Technical Writing',
      description: 'Writing and publishing technical articles through OFF_LIMIT TECH on Dev.to, translating complex technology into clear explanations.',
      status: 'In Progress',
    },
    {
      tag: 'Programming',
      title: 'Python Development',
      description: 'Actively learning Python to strengthen programming fundamentals as part of a broader development skill set.',
      status: 'In Progress',
    },
    {
      tag: 'Web',
      title: 'Web Development',
      description: 'Learning web development through building real projects, including this portfolio website.',
      status: 'In Progress',
    },
  ],
};

// ─────────────────────────────────────────────
// OFF_LIMIT TECH
// ─────────────────────────────────────────────
export const olt = {
  name: 'OFF_LIMIT TECH',
  tagline: 'Breaking the Limits. Building the Future.',
  mission: 'Making technology easier to understand, one concept at a time.',
  email: 'Offlimit018@gmail.com',
  phone: '+2348142094339',
  stats: {
    videos: '5+',
    articles: 2,
    subscribers: 30,
  },
  videos: [
    { title: 'What is a VPN?',              url: 'https://youtu.be/7U-eCbDWXLc' },
    { title: 'What is a Proxy Server?',     url: 'https://youtu.be/4ycpvhSeFNk' },
    { title: 'IP Address: What It Is, How It Works & What It Reveals About You', url: 'https://youtu.be/FnR553sv-XI' },
  ],
  articles: [
    {
      title: 'DNS: How Your Device Finds a Website on the Internet',
      url: 'https://dev.to/off_limit001/dns-explained-how-your-device-finds-a-website-on-the-internet-4p0a',
      description: 'A clear, beginner-friendly breakdown of how DNS works and what happens every time you type a website address.',
    },
    {
      title: 'Firewall: How It Works & Protects You',
      url: 'https://dev.to/off_limit001/firewall-how-it-works-how-it-protects-you-36bi',
      description: 'A practical explanation of what a firewall is, how it works, and why it matters for your digital security.',
    },
  ],
  coverage: [
    'Cybersecurity',
    'Artificial Intelligence',
    'Computer Literacy',
    'Networking',
    'Internet Technology',
    'Privacy',
    'Online Safety',
    'Technical Writing',
    'Technology Education',
  ],
  social: [
    { name: 'YouTube',          url: 'https://www.youtube.com/@Off_Limit001',                         icon: '▶' },
    { name: 'Dev.to',           url: 'https://dev.to/off_limit001',                                   icon: '📝' },
    { name: 'TikTok',           url: 'https://www.tiktok.com/@off_limit001',                          icon: '📱' },
    { name: 'Instagram',        url: 'https://www.instagram.com/off_limit001',                         icon: '📸' },
    { name: 'X / Twitter',      url: 'https://x.com/OFF_LIMIT0001',                                   icon: '𝕏' },
    { name: 'Threads',          url: 'https://www.threads.com/@off_limit001',                          icon: '🧵' },
    { name: 'WhatsApp Channel', url: 'https://whatsapp.com/channel/0029VbDA5c84Y9luWeT5Pi2v',         icon: '💬' },
  ],
  contactPurpose: [
    'Collaboration',
    'Work Opportunities / Jobs',
    'Partnerships',
    'Sponsorships',
    'Brand Inquiries',
  ],
  footerSocial: [
    ['YouTube',   'https://www.youtube.com/@Off_Limit001'],
    ['Dev.to',    'https://dev.to/off_limit001'],
    ['TikTok',    'https://www.tiktok.com/@off_limit001'],
    ['Instagram', 'https://www.instagram.com/off_limit001'],
    ['X',         'https://x.com/OFF_LIMIT0001'],
  ],
};

// ─────────────────────────────────────────────
// ABOUT
// ─────────────────────────────────────────────
export const about = {
  intro: [
    'I\'m a learner interested in cybersecurity, technology, Python, ethical hacking, and digital creation.',
    'My journey is focused on building real understanding rather than simply collecting titles. I document what I learn, experiment with technology, create educational content, and work on projects that help me grow.',
  ],
  journeyCards: [
    {
      label: 'How It Started',
      text: 'Technology has been an interest since childhood. Curiosity has always been a major driver — curiosity about how things work, how the technology economy operates, and what\'s possible.',
    },
    {
      label: 'Why Cybersecurity',
      text: 'Cybersecurity interest began a few years ago as fraud became increasingly common. I decided to learn cybersecurity to understand these problems and stand against them.',
    },
    {
      label: 'What I\'m Building',
      text: 'I document what I learn, experiment with technology, create educational content through OFF_LIMIT TECH, and work on projects that help me grow in cybersecurity and AI.',
    },
    {
      label: 'Long-Term Goal',
      text: 'To become an ethical hacker — someone who uses technical knowledge responsibly to protect, educate, and help others stay secure in a connected world.',
    },
  ],
  values: [
    ['🔍', 'Curiosity'],
    ['📚', 'Continuous Learning'],
    ['🎯', 'Discipline'],
    ['⚖️', 'Ethical Responsibility'],
    ['🤝', 'Helping Others'],
    ['🧠', 'Real Understanding'],
    ['🌍', 'Community Growth'],
  ],
  beyondTech: [
    ['🧠', 'Psychology'],
    ['💭', 'Philosophy'],
    ['🌿', 'Nature'],
    ['🌍', 'Exploring & Observing the World'],
  ],
};

// ─────────────────────────────────────────────
// PERSONAL CONTACT — SOCIAL LINKS
// ─────────────────────────────────────────────
export const personalSocial = [
  { name: 'LinkedIn',  handle: 'abdul-qayum-akindele',    url: 'https://www.linkedin.com/in/abdul-qayum-akindele-bb33573a3',  icon: '🔗' },
  { name: 'GitHub',    handle: 'abdulqayumakindele',       url: 'https://github.com/abdulqayumakindele',                       icon: '🐙' },
  { name: 'TikTok',   handle: '@akindeleabdulqayum',      url: 'https://www.tiktok.com/@akindeleabdulqayum',                  icon: '📱' },
  { name: 'Substack', handle: '@offlimittech',             url: 'https://substack.com/@offlimittech',                          icon: '✍️' },
  { name: 'Snapchat', handle: 'akindele.16',               url: 'https://www.snapchat.com/add/akindele.16',                    icon: '👻' },
  { name: 'Facebook', handle: 'Abdul Qayum Akindele',      url: 'https://www.facebook.com/share/18XMAV73NC/',                  icon: '📘' },
];

export const personalContactPurpose = [
  'Professional networking',
  'Career opportunities',
  'Personal collaboration',
  'Professional connections',
  'General professional inquiries',
];
