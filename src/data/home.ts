export const COURSE_CATEGORIES = ["Python", "Excel", "Web Development", "JavaScript", "Data Science"];

export const COURSE_DATA: Record<string, any[]> = {
  python: [
    {
      title: "Python for Financial Analysts: From Excel to Automation",
      instructor: "Jose Portilla, Dr. Angela Yu",
      rating: 4.8,
      reviews: "452,102",
      price: "Rp 129.000",
      image: "/assets/images/cat-dev.png",
      badge: "BESTSELLER"
    },
    {
      title: "Advanced Machine Learning: Real-world Predictive Models",
      instructor: "Kirill Eremenko, Hadelin de Ponteves",
      rating: 4.8,
      reviews: "25,781",
      price: "Rp 159.000",
      image: "/assets/images/cat-dev.png",
      badge: "BESTSELLER"
    }
  ],
  javascript: [
    {
      title: "Fullstack Next.js: Building Production-Ready SaaS 2024",
      instructor: "Sarah Drasner, Maximilian Schwarzmüller",
      rating: 4.9,
      reviews: "88,490",
      price: "Rp 149.000",
      image: "/assets/images/cat-design.png",
      badge: "NEW"
    }
  ],
  excel: [],
  "web-development": [],
  "data-science": []
};

export const INSTRUCTOR_DATA = [
  {
    name: "Dr. Angela Yu",
    role: "Lead Instructor & Developer",
    rating: 4.8,
    reviews: "1,204,561",
    students: "2,450,000",
    courses: 7,
    image: "/assets/images/user-1.png",
    bio: "Developer and Lead Instructor at London App Brewery. I've taught millions of students globally."
  },
  {
    name: "Maximilian Schwarzmüller",
    role: "Professional Web Developer",
    rating: 4.7,
    reviews: "850,230",
    students: "1,800,000",
    courses: 12,
    image: "/assets/images/user-2.png",
    bio: "Online Educator and Web Developer. I love sharing my knowledge with fellow developers."
  },
  {
    name: "Jose Portilla",
    role: "Head of Data Science, Pierian Training",
    rating: 4.8,
    reviews: "452,102",
    students: "900,000",
    courses: 15,
    image: "/assets/images/user-3.png",
    bio: "Specializing in Data Science and Python. Providing high-quality education since 2015."
  },
  {
    name: "Sarah Drasner",
    role: "Director of Engineering, Google",
    rating: 4.9,
    reviews: "12,450",
    students: "450,000",
    courses: 4,
    image: "/assets/images/user-1.png",
    bio: "Award-winning animator and developer. Focus on SVG, React, and Web Performance."
  }
];

export const TESTIMONIAL_DATA = [
  {
    id: 1,
    name: "Budi Santoso",
    role: "Senior UI Designer at Gojek",
    content: "Membantu saya naik jabatan dalam 3 bulan. Kurikulum UI/UX-nya sangat praktis untuk industri di Indonesia. Gak cuma teori, tapi bener-bener diajarin workflow yang dipake di tech company.",
    avatar: "/assets/images/user-1.png",
    company: "Gojek",
    rating: 5
  },
  {
    id: 2,
    name: "Siti Aminah",
    role: "Backend Engineer at Traveloka",
    content: "Dulu pusing belajar Python sendirian, tapi di NexLearn materinya runtut banget. Sekarang saya dipercaya megang microservices penting di kantor. Investasi terbaik tahun ini!",
    avatar: "/assets/images/user-2.png",
    company: "Traveloka",
    rating: 5
  },
  {
    id: 3,
    name: "David Wijaya",
    role: "Data Analyst at BCA",
    content: "Analisis data jadi jauh lebih cepet setelah ikut kelas Python for Finance. Instrukturnya bener-bener ahli di bidangnya. Materi SQL & Pandas-nya gila, kepake banget di kerjaan harian.",
    avatar: "/assets/images/user-3.png",
    company: "BCA",
    rating: 5
  },
  {
    id: 4,
    name: "David Wijaya",
    role: "Data Analyst at BCA",
    content: "Analisis data jadi jauh lebih cepet setelah ikut kelas Python for Finance. Instrukturnya bener-bener ahli di bidangnya. Materi SQL & Pandas-nya gila, kepake banget di kerjaan harian.",
    avatar: "/assets/images/user-3.png",
    company: "BCA",
    rating: 5
  }
];
