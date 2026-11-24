import { Project, EducationItem, SkillGroup, CertificateItem } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: "Saravanan R",
  age: 20,
  degree: "B.Tech Information Technology",
  institution: "Velalar College of Engineering and Technology",
  location: "Erode, Tamil Nadu, India",
  email: "saravana231885@gmail.com",
  github: "https://github.com/23ITR092-Saravanan",
  linkedin: "https://www.linkedin.com/in/saravanan-r-717a85384",
  headline: "Final-Year B.Tech IT Student",
  greeting: "Hi I'm",
  subtitle: "Let's get connected!",
  aboutBio: "I am a final-year B.Tech IT student interested in Data Analytics and Web Development, with good skills and knowledge. I am seeking internship and job opportunities where I can contribute to an organization's success by solving real-world problems while continuously improving myself."
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "btech-it",
    level: "B.Tech — Information Technology",
    institution: "Velalar College of Engineering and Technology, Erode-12",
    location: "Erode, Tamil Nadu",
    yearOfPassing: "Year of Passing : 2027",
    score: "CGPA : 8.56 ( Upto 6th Semester )"
  },
  {
    id: "hsc",
    level: "Higher Secondary Certificate (HSC)",
    institution: "URC Palaniammal Matric Higher Secondary School, Erode-12",
    location: "Erode, Tamil Nadu",
    score: "Percentage - 91.16%",
    yearOfPassing: "Year of Passing: 2023",
    medium: "Medium : English",
    educationType: "Education type: TamilNadu State Board"
  },
  {
    id: "sslc",
    level: "Secondary School Leaving Certificate (SSLC)",
    institution: "URC Palaniammal Matric Higher Secondary School, Erode-12",
    location: "Erode, Tamil Nadu",
    yearOfPassing: "Year of Passing: 2021",
    medium: "Medium : English",
    educationType: "Education type: TamilNadu State Board"
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "als-ambulance-system",
    title: "Smart ALS Ambulance System",
    domain: "Machine Learning",
    technologies: ["Machine Learning", "SVM", "LSTM", "Python"],
    introduction: "A machine learning-based ambulance support system that classifies patient severity and predicts possible future health risks to help hospitals prepare early.",
    problemStatement: [
      "Patient information may reach hospitals late during emergencies.",
      "Delayed preparation can affect timely medical support."
    ],
    existingSystem: [
      "Patient details may be shared manually or with delays.",
      "Hospitals may have limited information before the ambulance arrives."
    ],
    proposedSystemSolution: [
      "Use SVM to classify patient severity as stable, moderate, or critical.",
      "Use LSTM to predict possible future health risks.",
      "Present patient information through a digital monitoring system."
    ],
    advantages: [
      "Helps identify critical conditions earlier.",
      "Supports hospital preparation before patient arrival.",
      "Helps doctors make informed decisions."
    ],
    futureInnovations: [
      "Integrate real-time medical sensors and wearable devices.",
      "Add GPS tracking and ambulance arrival estimates.",
      "Introduce automatic critical-condition alerts."
    ]
  },
  {
    id: "homecraft-connect",
    title: "HomeCraft Connect",
    domain: "Web Development",
    technologies: ["HTML", "TypeScript", "Tailwind CSS"],
    introduction: "A local marketplace connecting home-based artisans with buyers for handmade products and customized orders.",
    problemStatement: [
      "Artisans may struggle to reach more customers.",
      "Buyers may find it difficult to discover local handmade products and request custom designs."
    ],
    existingSystem: [
      "Artisans may depend on local shops, personal contacts, or social media.",
      "Custom orders may be managed through unorganized messages."
    ],
    proposedSystemSolution: [
      "Allow artisans to publish products with descriptions and prices.",
      "Let buyers search by category and location.",
      "Enable buyers to submit customized product requests.",
      "Provide organized order-request status management."
    ],
    advantages: [
      "Helps artisans reach more customers.",
      "Makes handmade products easier to discover.",
      "Supports personalized customer requirements.",
      "Organizes product requests and order management."
    ],
    futureInnovations: [
      "Add secure online payments and delivery tracking.",
      "Introduce customer ratings and reviews.",
      "Provide personalized product recommendations.",
      "Expand the marketplace to more locations."
    ]
  },
  {
    id: "road-accident-analytics",
    title: "Road Accident Analytics Dashboard",
    domain: "Power BI",
    technologies: ["Microsoft Power BI"],
    introduction: "An interactive dashboard that analyzes road accidents using visualizations, KPIs, charts, tables, and filters.",
    problemStatement: [
      "Raw accident records are difficult to understand.",
      "Identifying accident patterns across different conditions can be challenging."
    ],
    existingSystem: [
      "Accident information may be stored in tables or separate reports.",
      "Comparing accident trends may require manual analysis."
    ],
    proposedSystemSolution: [
      "Create interactive dashboards using charts, KPIs, tables, and slicers.",
      "Analyze accidents by time, location, vehicle type, road type, weather, age group, and severity.",
      "Allow users to filter data and explore accident patterns."
    ],
    advantages: [
      "Converts raw data into understandable visual insights.",
      "Helps identify accident trends and patterns.",
      "Enables quick comparisons through interactive filters.",
      "Supports data-driven road-safety analysis."
    ],
    futureInnovations: [
      "Integrate regularly updated accident datasets.",
      "Use machine learning to identify high-risk patterns.",
      "Add maps to highlight accident-prone locations.",
      "Explore predictive analytics for accident-risk assessment."
    ]
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Programming Languages",
    skills: ["Java", "Python"]
  },
  {
    category: "Web Technologies",
    skills: ["HTML", "CSS", "MERN Stack"]
  },
  {
    category: "Database",
    skills: ["MySQL"]
  },
  {
    category: "Data Analytics Tools",
    skills: ["MS Excel", "Power BI", "Tableau"]
  },
  {
    category: "Design Tools",
    skills: ["Canva", "Figma"]
  },
  {
    category: "Soft Skills",
    skills: ["Good Communication", "Ready to Learn", "Supportive Team Worker", "Problem Solving"]
  }
];

export const RESUME_CERTIFICATES: CertificateItem[] = [
  // Group 1: NPTEL Certifications
  {
    id: "nptel-hci",
    title: "Human Computer Interaction (English)",
    organization: "NPTEL",
    group: "NPTEL",
    honorBadge: "Elite + Gold"
  },
  {
    id: "nptel-privacy",
    title: "Privacy and Security in Online Social Media",
    organization: "NPTEL",
    group: "NPTEL",
    honorBadge: "Elite"
  },

  // Group 2: IEEE Conference Certificates
  {
    id: "ieee-icrito-2025",
    title: "IEEE ICRITO 2025",
    organization: "IEEE",
    group: "IEEE Conference",
    honorBadge: "Conference Paper Presentation",
    paperTitle: "Design of Smart Advanced Life Support Ambulances via IoT-Enabled Cameras for Early Diagnosis"
  },
  {
    id: "ieee-icces-2026",
    title: "ICCES 2026",
    organization: "IEEE",
    group: "IEEE Conference",
    honorBadge: "Paper Presentation",
    paperTitle: "An Intelligent Hospital Queue Management System with AI-Based Crowd Classification and Waiting Time Prediction"
  },

  // Group 3: Other Certificates
  {
    id: "cert-java-infosys",
    title: "Programming using Java",
    organization: "Infosys Springboard",
    group: "Other Certificates"
  },
  {
    id: "cert-power-bi",
    title: "Power BI for Beginners",
    organization: "Simplilearn SkillUp",
    group: "Other Certificates"
  },
  {
    id: "cert-master-ai-webapp",
    title: "Master AI for Web App Development",
    organization: "Simplilearn SkillUp",
    group: "Other Certificates"
  },
  {
    id: "cert-excel-online",
    title: "Free Excel Certification Course Online",
    organization: "Intellipaat",
    group: "Other Certificates"
  },
  {
    id: "cert-sql-beginners",
    title: "SQL for Beginners",
    organization: "Scaler Topics",
    group: "Other Certificates"
  },
  {
    id: "cert-prompt-engineering",
    title: "Prompt Engineering Applications",
    organization: "Simplilearn SkillUp",
    group: "Other Certificates"
  },
  {
    id: "cert-mern-fullstack",
    title: "MERN Fullstack Development",
    organization: "Yellowmatics",
    group: "Other Certificates"
  }
];
