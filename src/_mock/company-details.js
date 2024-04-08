export const data = {
  services: [
    {
      category: 'Web Development',
      subCategory: [
        'Custom Website Design',
        'E-commerce Solutions',
        'Content Management Systems (CMS)',
        'Mobile Responsive Design',
        'Web Application Development',
      ],
    },
    {
      category: 'Digital Marketing',
      subCategory: [
        'Search Engine Optimization (SEO)',
        'Pay-Per-Click Advertising (PPC)',
        'Social Media Marketing (SMM)',
        'Email Marketing',
        'Content Strategy and Marketing',
      ],
    },
    {
      category: 'Graphic Design',
      subCategory: [
        'Brand Identity Design',
        'Marketing Collaterals',
        'Packaging Design',
        'UI/UX Design',
      ],
    },
    {
      category: 'Software Development',
      subCategory: [
        'Custom Software Solutions',
        'Enterprise Resource Planning (ERP) Systems',
        'Customer Relationship Management (CRM) Systems',
        'Mobile App Development',
      ],
    },
    {
      category: 'IT and Network Services',
      subCategory: [
        'IT Consultancy',
        'Network Setup and Management',
        'Cloud Computing Services',
        'Data Backup and Recovery',
        'Cybersecurity Solutions',
      ],
    },
    {
      category: 'Video Production and Animation',
      subCategory: [
        'Corporate Video Production',
        'Animated Explainer Videos',
        'Product Demos',
        'Training and Educational Videos',
      ],
    },
    {
      category: 'Consulting Services',
      subCategory: [
        'Digital Transformation Consulting',
        'Market Research and Analysis',
        'Brand Strategy and Development',
        'Project Management and Implementation',
      ],
    },
  ],
  portfolio: [
    {
      title: 'E-commerce Website Redesign',
      description:
        'Complete redesign of an e-commerce platform to improve user experience and increase conversion rates.',
      servicesUsed: ['Web Development', 'UI/UX Design', 'SEO'],
      outcome:
        "Achieved a 30% increase in conversion rate and significantly improved the site's loading time.",
      imageUrls: ['https://picsum.photos/id/1/200/300', 'https://picsum.photos/id/2/200/300'],
      caseStudyUrl: 'https://example.com/case-studies/e-commerce-website-redesign',
    },
    {
      title: 'Mobile App for Online Booking',
      description:
        'Developed a cross-platform mobile app to streamline booking processes for a travel service provider.',
      servicesUsed: ['Mobile App Development', 'Brand Strategy'],
      outcome:
        'Enhanced customer engagement and doubled the monthly bookings within three months post-launch.',
      imageUrls: ['https://picsum.photos/id/3/200/300'],
      caseStudyUrl: 'https://example.com/case-studies/mobile-app-online-booking',
    },
    {
      title: 'Digital Marketing Campaign for Retail Launch',
      description:
        'Strategized and executed a comprehensive digital marketing campaign for the launch of a new retail line.',
      servicesUsed: ['Digital Marketing', 'Content Strategy', 'Social Media Marketing'],
      outcome:
        'Surpassed the target KPIs with a 40% increase in online sales and significant social media engagement.',
      imageUrls: ['https://picsum.photos/id/4/200/300'],
      caseStudyUrl: 'https://example.com/case-studies/digital-marketing-retail-launch',
    },
  ],
  ratings: [
    {
      id: 1,
      user: 'John Doe',
      company: 'Acme Inc.',
      rating: 4,
      comment: 'Great service, will use again!',
      userImage:
        'https://upload.wikimedia.org/wikipedia/en/d/da/Matt_LeBlanc_as_Joey_Tribbiani.jpg', // This should be a URL or imported image
    },
    // Add more reviews as needed
  ],
  pricing: [
    {
      id: 1,
      title: 'Basic',
      price: 'Starting at $100/month',
      description: 'Ideal for small businesses looking to get started with our services.',
      features: ['Up to 10 Projects', 'Basic Support', 'Access to Standard Features'],
    },
    {
      id: 2,
      title: 'Pro',
      price: 'Starting at $250/month',
      description: 'Perfect for growing businesses seeking more flexibility and features.',
      features: [
        'Up to 30 Projects',
        'Priority Support',
        'All-Access Features',
        'Advanced Analytics',
      ],
    },
    {
      id: 3,
      title: 'Enterprise',
      price: 'Custom Pricing',
      description: 'Custom solutions tailored to fit the unique needs of your enterprise.',
      features: [
        'Unlimited Projects',
        '24/7 Dedicated Support',
        'Custom Integrations',
        'Personalized Training Sessions',
      ],
    },
  ],
  team: [
    {
      id: 1,
      name: 'Jane Doe',
      role: 'CEO',
      experience: 'Over 20 years in the industry, specializing in...',
      imageUrl: 'https://nursinginstitutegoa.org/wp-content/uploads/2016/01/tutor-7.jpg', // Placeholder image URL
    },
    {
      id: 2,
      name: 'John Smith',
      role: 'CTO',
      experience: 'A leading expert in..., with more than 15 years...',
      imageUrl:
        'https://media.istockphoto.com/id/1210331839/photo/young-actress-reading-scenario-on-stage-in-theatre.jpg?s=1024x1024&w=is&k=20&c=lKFxTl0sMQ2S1LKCe1aVl6jN0FGTOzBMsuvwsx9QzsQ=',
    },
    // Add more team members as needed
  ],
  certificationsAwards: [
    'Certified XYZ Practitioner',
    '2023 Best Industry Innovation Award',
    // List additional certifications and awards
  ],
  memberships: [
    'International Association of Business Communicators',
    'Association for Computing Machinery',
    // Add more memberships here
  ],

  socialMediaLinks: [
    { name: 'Facebook', url: 'https://facebook.com/yourcompany' },
    { name: 'Twitter', url: 'https://twitter.com/yourcompany' },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/yourcompany' },
    { name: 'Instagram', url: 'https://instagram.com/yourcompany' },
    // Add more social media links as needed
  ],
};
