export const site = {
  name: 'EchoGen Phonics',
  tagline: 'Learn. Grow. Succeed.',
  phone: '+91 9751820877',
  phoneHref: 'tel:+919751820877',
  whatsappNumber: '919751820877',
  email: 'manithamizh1993@gmail.com',
  instagram: 'https://www.instagram.com/echogenphonics',
  location: 'Chennai, India · Classes online worldwide',
}

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/classes', label: 'Classes' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact Us' },
]

export const impactStats = [
  { value: '500+', label: 'Students impacted' },
  { value: '7,000+', label: 'Community followers' },
  { value: '2.6L+', label: 'Digital reach' },
  { value: '4', label: 'Countries reached' },
]

export type ClassProgram = {
  slug: string
  title: string
  ages: string
  level: string
  format: string
  description: string
  topics: string[]
  image: string
  color: 'primary' | 'accent' | 'coral'
}

export const programs: ClassProgram[] = [
  {
    slug: 'foundation',
    title: 'Phonics Foundation',
    ages: 'Ages 3 – 5',
    level: 'Beginner',
    format: 'Live 1:1 or small group',
    description:
      'A joyful first step into reading. Children learn the 42 letter sounds through songs, actions and stories using the Jolly Phonics approach.',
    topics: ['Jolly Phonics Group 1 – 7', 'Letter sounds & actions', 'Letter formation', 'Oral blending games'],
    image: '/images/class-early.png',
    color: 'accent',
  },
  {
    slug: 'blending',
    title: 'Blending & Early Reading',
    ages: 'Ages 5 – 7',
    level: 'Developing',
    format: 'Live small group',
    description:
      'Children start reading words and sentences on their own by blending and segmenting sounds with confidence.',
    topics: ['CVC words', 'Consonant blends', 'Digraphs (sh, ch, th)', 'Tricky words & sentences'],
    image: '/images/class-reading.png',
    color: 'primary',
  },
  {
    slug: 'advanced',
    title: 'Advanced Phonics & Spelling',
    ages: 'Ages 7 – 12',
    level: 'Intermediate',
    format: 'Live small group',
    description:
      'Builds fluent readers and accurate spellers with deeper phonics patterns, syllable rules and pronunciation.',
    topics: ['R-controlled vowels', 'Syllable types', "The /shun/ sound", 'Spelling rules & fluency'],
    image: '/images/hero-child.png',
    color: 'coral',
  },
  {
    slug: 'reading-support',
    title: 'Struggling Reader Support',
    ages: 'All school ages',
    level: 'Personalised',
    format: 'Live 1:1',
    description:
      'Structured intervention for children who find reading hard. Gentle, patient support that rebuilds decoding skills and self-belief.',
    topics: ['Reading assessment', 'Decoding strategies', 'Fluency practice', 'Confidence building'],
    image: '/images/class-reading.png',
    color: 'primary',
  },
  {
    slug: 'adult-masterclass',
    title: 'Adult Phonics Masterclass',
    ages: 'Parents & teachers',
    level: 'Professional',
    format: 'Live online cohort',
    description:
      'An in-depth course for parents, teachers and aspiring phonics educators — including how to use AI tools professionally in teaching.',
    topics: ['Complete phonics framework', 'Teaching methodology', 'AI tools for educators', 'Mentoring & guidance'],
    image: '/images/class-adult.png',
    color: 'accent',
  },
]

export type Testimonial = {
  name: string
  role: string
  quote: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Kalaivani',
    role: 'Parent of a Grade 2 student',
    quote:
      'My son was struggling to read words and sentences on his own. After joining, he has shown great improvement in his reading. Individual attention, regular practice and flexible timings make all the difference.',
  },
  {
    name: 'Naveen',
    role: 'Parent',
    quote:
      "A wonderful phonics teacher who makes learning fun and engaging. My child's reading and pronunciation improved significantly in just a few weeks.",
  },
  {
    name: 'Shobana',
    role: 'Parent',
    quote:
      'Patient, kind and makes learning easy to understand. My child became much more confident in reading — the clear explanations and engaging activities really helped.',
  },
  {
    name: 'Adult Masterclass learner',
    role: 'Adult Phonics Masterclass',
    quote:
      'I realised phonics is not just about letter sounds — it is a vast, structured subject. The class was professional, patient and inspiring. Worth every penny.',
  },
  {
    name: 'Indhumathi',
    role: 'Course participant',
    quote:
      'Interactive and fun-filled classes. Teaching phonics rules the right way was so impressive. An excellent platform at an affordable price with flexible time zones.',
  },
  {
    name: 'A happy parent',
    role: 'Parent',
    quote:
      'My daughter has developed a strong interest in reading longer words. Whenever she makes mistakes, you guide her so calmly, which encourages her to learn with confidence.',
  },
]
