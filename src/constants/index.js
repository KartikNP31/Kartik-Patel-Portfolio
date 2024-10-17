import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  PricemateLogo,
  Fitwell,
  ImagiAI,
  newsapp,
  IIITSlogo,
  NSSlogo,
  abhisargalogo,
  sqllogo,
  clogo,
  cpplogo,
  javalogo,
  linuxlogo,
  SHGS_School,
  Gredient_IIITS_logo,
  IR_Project_logo,
  JavaCollegePredictor,
  RestaurantFinder
} from "../assets";



export const resumeURL = "https://drive.google.com/file/d/11X4HmtS47PPkIE2ohE1aslmzPHrmNkpM/view?usp=sharing";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  }, {
    id: "resume",
    title: "Resume",
    link: resumeURL,
  }
];

const services = [
  {
    title: "MERN Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Competitive Programmer",
    icon: creator,
  },
  {
    title: "Problem Solver",
    icon: creator,
  },
];

const technologies = [

  {
    name: "C++",
    icon: cpplogo,
  },
  {
    name: "C",
    icon: clogo,
  },
  {
    name: "Java",
    icon: javalogo,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "SQL",
    icon: sqllogo,
  },
  {
    name: "Linux",
    icon: linuxlogo,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const educationData = [
  { name: "Indian Institute of Information Technology, Sri City(IIITS)", branch: "BTech in Computer Science and Engineering (CSE)", date: "November 2021 - May 2025", cgpa: "CGPA : 8.13", image: IIITSlogo },
  {
    name: "Matoshri Junior College, Nashik, Maharashtra",
    branch: "Higher Secondary Education (XII)",
    date: "Aug 2019- Aug 2021",
    cgpa: "Grade : 96.33%",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC6kCVdxAIu_qz_z8jQuP3xSHyZiKoZ19wqg&s",
  },

  { name: "Smt. H. G. Shroff High School, Nandurbar, Maharashtra", branch: "Secondary School Education (X)", date: "June 2018- May 2019", cgpa: "Grade : 95.00%", image: SHGS_School },

]

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "Pricemate Online Services Pvt. Ltd.",
    icon: PricemateLogo,
    iconBg: "#383E56",
    date: "Aug 2023 - Sept 2023",
    points: [
      "Collaborated to create an essential E-commerce platform using MERN stack for 3 different user types.",
      "Enhanced backend with Node.js & Express.js to establish RESTful APIs, enabling seamless front-end to back-end communication.",
      "Streamlined project management by effectively communicating progress, challenges, and solutions within the team.",
    ],
  },
  {
    title: "Gradient: Core Member",
    company_name: "Programming Club of IIIT Sri City",
    icon: Gredient_IIITS_logo,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - July 2024",
    points: [
      "It is Programming club of IIIT SriCity. Worked as a Core Member in Academic year 2022-24 and now promoted as Technical Lead",
      "Conducted 3 programming sessions and competitions for students to enhance their DSA coding skills.",
    ],
  },
  {
    title: "Student Life Council : Mess Secretary",
    company_name: "Indian Institute of Information Technology, Sri City",
    icon: IIITSlogo,
    iconBg: "#E6DEDD",
    date: "Sept 2023 - Aug 2024",
    points: [
      "Played a key role in planning and coordinating various aspects of the mess as a Secretary.",
      "Organized Abhisarga 2024 : The Annual fest of IIIT Sri city, led the accommodation team",
    ],
  },
];

const volunteerExperience = [
  {
    title: "NSS Core Volunteer",
    company_name: "@NSS-IIITS",
    image: NSSlogo,
    date: "May 2022 - Aug 2023",
    points: [
      "Active participant in various government-related drives through NSS, contributing to community development initiatives.",
      "Organized events for village children to explore IIITS institute and its facilities.",
      "Led educational programs introducing rural students to the institute environment.",
    ],
  },
  {
    title: "Abhisarga 2024 : Organizer",
    company_name: "Annual Fest of IIIT Sri City",
    image: abhisargalogo,
    date: "March 2024",
    points: [
      "Organizer of the annual fest of Indian Institute of Information Technology, Sri City, contributing to the successful execution of the event.",
      "Played a key role in planning and coordinating various aspects of the fest, ensuring a seamless and engaging experience for participants.",
      "Led Accommodation team of the fest to ensure a comfortable stay for guests and participants.",
    ],
  },
]

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "FitWell",
    description:
      "Developed a full-stack web application, FitWell, combining fitness and e-commerce functionalities with three distinct dashboards (User, Admin, Company). Implemented advanced search and filtering features, integrated payment processing with Razorpay, and used Multer and Cloudinary for efficient file handling and storage.",
    tags: [
      {
        name: "ReactJS",
        color: "white-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "bootstarp",
        color: "purple-text-gradient",
      },
      {
        name: "REST API",
        color: "pink-text-gradient",
      },
      {
        name: "nodeJS",
        color: "green-text-gradient",
      },
    ],
    image: Fitwell,
    source_code_link: "https://github.com/Omkar-Khairnar/FitWell-ReactJS",
    project_url: "https://fitwell-fitnessapp.vercel.app",
  },
  {
    name: "Let's Find RestOurant",
    description:
      "Developed a web application for restaurant listings and searching, based on location and image search functionalities using Generative AI. A user-friendly interface for restaurant exploration, with options to filter by country, average spend, and cuisine types and seamless Pagination.",
    tags: [
      {
        name: "ReactJS",
        color: "white-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "purple-text-gradient",
      },
      {
        name: "REST API",
        color: "pink-text-gradient",
      },
      {
        name: "nodeJS",
        color: "green-text-gradient",
      },
      {
        name: "Generative AI",
        color: "purple-text-gradient",
      },
      {
        name: "Gemini API",
        color: "purple-text-gradient",
      },
    ],
    image: RestaurantFinder,
    source_code_link: "https://github.com/KartikNP31/Restaurant-Listing-Searching.git",
    project_url: "https://restaurant-listing-s-git-b67360-kartik-patels-projects-623afc4b.vercel.app/",
  },
  {
    name: "College Predictor",
    description:
      "Developed a backend application that predicts colleges based on JEE Mains rank and user preferences using Java, MySQL, and JDBC. Designed and managed a database to handle user profiles, admin profiles, and college records, enabling efficient CRUD operations and rapid search across 25000+ records.",
    tags: [
      {
        name: "Java",
        color: "white-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "JDBC",
        color: "purple-text-gradient",
      },
      {
        name: "Object-Oriented Programming",
        color: "pink-text-gradient",
      },
      {
        name: "JavaFX",
        color: "green-text-gradient",
      },
    ],
    image: JavaCollegePredictor,
    source_code_link: "https://github.com/KartikNP31/CollegePredictorApplicationJAVA.git",
    project_url: "https://github.com/KartikNP31/CollegePredictorApplicationJAVA.git",
  },
  {
    name: "Find My Doctor",
    description:
      "Developed a health domain Information Retrieval system for finding doctors based on user preferences, featuring search by city, specialty, and locality. The system displays the top 20 relevant results, integrates user feedback for improved relevance, and visualizes performance with a dynamic Precision-Recall (P-R) curve.",
    tags: [
      {
        name: "Django",
        color: "white-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Information Retrieval",
        color: "purple-text-gradient",
      },
      {
        name: "Web Scraping",
        color: "pink-text-gradient",
      },
      {
        name: "Html CSS",
        color: "green-text-gradient",
      },
    ],
    image: IR_Project_logo,
    source_code_link: "https://github.com/KartikNP31/Information-Retrieval-DoctorFinder.git",
    project_url: "https://github.com/KartikNP31/Information-Retrieval-DoctorFinder.git",
  },
  
  
  
];

export { services, technologies, experiences, testimonials, projects, volunteerExperience ,educationData};
