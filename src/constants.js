// Skills Section Logo's

import htmlLogo from './assets/TechLogo/html.png'
import cssLogo from './assets/TechLogo/css.png';

import javascriptLogo from './assets/TechLogo/javascript.png';
import reactjsLogo from './assets/TechLogo/reactjs.png';
import tailwindcssLogo from './assets/TechLogo/tailwindcss.png';
import gitLogo from './assets/TechLogo/git.png';
import githubLogo from './assets/TechLogo/github.png';
import vscodeLogo from './assets/TechLogo/vscode.png';
import postmanLogo from './assets/TechLogo/postman.png';



// Experience Section Logo's
import novem_controls from './assets/CompanyLogo/novem_controls.webp'


// Education Section Logo's
import class10 from './assets/EducationLogo/class10.jpeg'
import class12 from './assets/EducationLogo/class12.png'
import degree from './assets/EducationLogo/degree.jpeg'


// Project Section Logo's



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      ,
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
     
   
      
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      
    ],
  },
  
  
  {
    title: 'Languages',
    skills: [

      { name: 'JavaScript', logo: javascriptLogo },
      
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
     
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: novem_controls,
      role: "MERN stack Developer Trainee",
      company: "Novem Controls",
      date: "Jan 2025 - JUly 2025",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
         "Tailwind CSS",
         "Nodejs",
         "Expressjs",
         "MongoDB"
       
       
        
      ],
    },
    


    

  ];
  
  export const education = [
    
    {
      id: 0,
      img: degree,
      school: "Sardar Beant Singh State University,Gurdaspur",
      date: "July 2021 - July 2025",
      grade: "78.6%",
      desc: "I pursued a Bachelor of Technology in Computer Science and Engineering, gaining strong foundations in programming, algorithms, databases, and web technologies. The degree enhanced my problem-solving, analytical, and software development skills while exposing me to real-world projects, teamwork, and industry practices essential for building innovative solutions.",
      degree: "Bachelor of Technology - CSE(Computer Science Engineering)",
    },
    {
      id: 1,
      img: class12,
      school: "Teja Singh Sutantar Memorial Senior Secondary School,Ludhiana.",
      date: "Apr 2020 - March 2021",
      grade: "91%",
      desc: "I completed my class 12 education from Teja Singh Sutantar Memorial Senior Secondary School. Shimlapuri,Ludhiana., under the PSEB board, where I studied Physics, Chemistry, and Mathematics",
      degree: "PSEB(XII) - PCM ",
    },
    {
      id: 2,
      img: class10,
      school: "Sardar Atma Singh Senior Secondary School,Ludhiana",
      date: "Apr 2018 - March 2019",
      grade: "90%",
      desc: "I completed my class 10 education from Sardar Atma Singh Senior Secondary School ,  under the PSEB board.",
      degree: "PSEB(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "GitHub Profile Detective",
      description:
        "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
      image: novem_controls,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
      webapp: "https://githubprofiledetective.netlify.app/",
    },
    {
      id: 1,
      title: "CS Prep",
      description:
        "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
      image: htmlLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/codingmastr/CSPrep",
      webapp: "https://csprep.netlify.app/",
    },

    {
      id: 2,
      title: "CS Prep",
      description:
        "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
      image: htmlLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/codingmastr/CSPrep",
      webapp: "https://csprep.netlify.app/",
    },


    {
      id: 3,
      title: "CS Prep",
      description:
        "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
      image: htmlLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/codingmastr/CSPrep",
      webapp: "https://csprep.netlify.app/",
    },
    
  ];  