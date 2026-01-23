export const projects = [
  {
    id: 'what2play',
    title: 'What2Play',
    description: 'A web application to help your group decide which video game to play.',
    longDescription: `
      Building a web application to help your group decide which video game to play.
      Features include:
      - Game library setup with user weighted preferences
      - User authentication and authorization
      - Friends and Group management
      - Intelligent game recommendations based on user preferences
      - Responsive design with mobile-first approach
    `,
    image: '',
    github: 'https://github.com/seanezell/what2play',
    demo: 'https://what2play.seanezell.com',
    status: 'In Progress',
    isFeatured: true,
    techIds: ['react', 'node', 'aws', 'terraform', 'dynamodb']
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website (This Site)',
    description: 'A modern, responsive portfolio built with React and Tailwind CSS, deployed on AWS.',
    longDescription: `
      Personal portfolio website showcasing my projects and experience.
      Features include:
      - Responsive design with dark mode support
      - Project showcase with detailed pages
      - Interactive resume section
      - Modern UI built with Tailwind CSS
      - AWS deployment with Terraform infrastructure-as-code
      - Optimized performance and SEO
    `,
    image: '',
    github: 'https://github.com/seanezell/website',
    demo: 'https://seanezell.com',
    status: 'Live',
    isFeatured: false,
    techIds: ['react', 'tailwind', 'aws']
  }
];
