import erp from "../Assets/erp.png";
import wait from "../Assets/wait.png";
import Landing from "../Assets/Landing.png";
import tennis from "../Assets/tt.png";
import mario from "../Assets/mario.png";
import shl from "../Assets/shl.png"
import openinapp from "../Assets/openinapp.png"

export default function projects_data() {
  const projects = [
    {
      heading: "Value Education Cell - AKGEC Website",
      description: `Lead React development for VE-Cell site, enabling efficient faculty and student 
          data management, implementing Redux for filtering and searching, and seamlessly integrating 
          REST APIs with Django Backend to serve 200+ faculty. Also, established a 
          dedicated admin panel for data oversight and performed bulk student  record uploads with 
          comprehensive validation from CSVs.`,
      tech: ["React", "Redux", "Django", "JavaScript", "Skote"],
      img: erp,
      github: "https://github.com/hargun0360/VE-CELL-FDP-Portal",
      link: "http://117.55.241.58:3000/",
    },

    {
      heading: "Digitized Queue Management System",
      description: `Developed a React app with Machine Learning to virtualize store queues, enhancing customer experience. Used ARIMA for precise wait-time forecasting.
            `,
      tech: [
        "React",
        "Redux",
        "Node",
        "JavaScript",
        "Express",
        "MongoDB",
        "Rest API",
      ],
      img: wait,
      github: "https://github.com/hargun0360/QueueManagement",
      link: "https://saksham-tiwari.github.io/QueueManagement",
    },

    {
      heading: "College Management System",
      description: `Lead ERP development for college using React. Created Admin, Faculty, and Student panels.
            Used Redux Thunk, Chart.JS, and Material UI, Implemented access and refresh token logic.`,
      tech: [
        "React",
        "Redux",
        "Redux Thunk",
        "Node",
        "JavaScript",
        "Express",
        "MongoDB",
        "Rest API",
        "GraphQL",
      ],
      img: Landing,
      github: "https://github.com/hargun0360/College-ERP",
      link: "https://college-erp-e09c2.web.app/",
    },

    {
      heading: "Table Tennis Tournament - AKGEC",
      description: `Developed a Table Tennis Tournament Website for AKGEC Sports Club, featuring participant eligibility criteria, registration process, and fees structure.`,
      tech: ["React", "HTML/CSS", "Bootstrap"],
      img: tennis,
      github: "https://github.com/hargun0360/Zonals",
      link: "https://akgectabletennis.netlify.app/",
    },

    {
      heading: "Super Mario",
      description: `Created an exciting game where the player, Mario, embarks on a journey to reach his destination while facing various obstacles. 
            implemented the game's mechanics, allowing Mario to jump, collect super coins, and avoid dangers like birds, fire, and dragons. The score is determined by the coins collected and distance covered.  `,
      tech: ["HTML/CSS", "JavaScript"],
      img: mario,
      github: "https://github.com/hargun0360/MY-MARIO",
      link: "https://hargun0360.github.io/MY-MARIO/",
    },
    {
      heading: "SmartSearch",
      description: `This Project is an AI-powered Full Stack application optimized for efficient project searching. Using Google's Palm 2 API, it offers high-accuracy smart searches. The intuitive UI features pagination, grid-style project cards, and easy project uploads via xlsx, all backed by MongoDB.  `,
      tech: ["React", "JavaScript", "NodeJS", "Express", "Palm-Api", "Axios", "Scss", "MongoDB"],
      img: shl,
      github: "https://github.com/hargun0360/SHL-Assesment",
      link: "https://shl-assesment-hargun-singh.netlify.app/dashboard",
    },
    {
      heading: "Dashboard Analytics",
      description: `This Web Application offers a streamlined and user-friendly interface for individuals to manage their accounts. Upon signing in, users are greeted with a comprehensive dashboard that showcases key metrics such as total revenues, transactions, likes, and user counts. With the integration of social media logins and search functionality, the application aims to enhance user experience.  `,
      tech: ["React", "JavaScript", "Google Oauth", "Scss", "Axios"],
      img: openinapp,
      github: "https://github.com/hargun0360/OpeninApp_React_Task",
      link: "https://openinapp-assignment-hargun-singh.netlify.app/",
    },
  ];

  return projects;
}
