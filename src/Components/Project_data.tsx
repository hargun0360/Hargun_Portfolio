import erp from "../Assets/erp.png"
import wait from "../Assets/wait.png"
import Landing from "../Assets/Landing.png"
import tennis from "../Assets/tt.png"
import mario from "../Assets/mario.png"

export default function projects_data (){
     const projects = [
        {
          heading: "Value Education Cell - AKGEC Website",
          description: `Lead React development for VE-Cell site, enabling efficient faculty and student 
          data management, implementing Redux for filtering and searching, and seamlessly integrating 
          REST APIs with Django Backend to serve 200+ faculty. Also, established a 
          dedicated admin panel for data oversight and performed bulk student  record uploads with 
          comprehensive validation from CSVs.`,
          tech : ["React", "Redux" , "Djaongo" , "JavaScript" , "Skote"],
          img : erp,
          github : "https://github.com/hargun0360/VE-CELL-FDP-Portal",
          link : "http://117.55.241.58:3000/",
        },
    
        {
            heading: "Digitized Queue Management System",
            description: `Lead React development for VE-Cell site, enabling efficient faculty and student 
            data management, implementing Redux for filtering and searching, and seamlessly integrating 
            REST APIs with Django Backend to serve 200+ faculty. Also, established a 
            dedicated admin panel for data oversight and performed bulk student  record uploads with 
            comprehensive validation from CSVs.`,
            tech : ["React", "Redux" , "Node" , "JavaScript" , "Express" , "MongoDB"],
            img : wait,
            github : "https://github.com/hargun0360/QueueManagement",
            link : "https://saksham-tiwari.github.io/QueueManagement",
          },
    
          {
            heading: "College Management System",
            description: `Lead React development for VE-Cell site, enabling efficient faculty and student 
            data management, implementing Redux for filtering and searching, and seamlessly integrating 
            REST APIs with Django Backend to serve 200+ faculty. Also, established a 
            dedicated admin panel for data oversight and performed bulk student  record uploads with 
            comprehensive validation from CSVs.`,
            tech : ["React", "Redux" , "Redux Thunk" ,  "Node" , "JavaScript" , "Express" , "MongoDB"],
            img : Landing,
            github : "https://github.com/hargun0360/College-ERP",
            link : "https://college-erp-e09c2.web.app/",
          },
    
          {
            heading: "Table Tennis Tournament - AKGEC",
            description: `Lead React development for VE-Cell site, enabling efficient faculty and student 
            data management, implementing Redux for filtering and searching, and seamlessly integrating 
            REST APIs with Django Backend to serve 200+ faculty. Also, established a 
            dedicated admin panel for data oversight and performed bulk student  record uploads with 
            comprehensive validation from CSVs.`,
            tech : ["React", "HTML/CSS" , "Bootstrap"],
            img : tennis,
            github : "https://github.com/hargun0360/Zonals",
            link : "https://akgectabletennis.netlify.app/",
          },
    
          {
            heading: "Super Mario",
            description: `Lead React development for VE-Cell site, enabling efficient faculty and student 
            data management, implementing Redux for filtering and searching, and seamlessly integrating 
            REST APIs with Django Backend to serve 200+ faculty. Also, established a 
            dedicated admin panel for data oversight and performed bulk student  record uploads with 
            comprehensive validation from CSVs.`,
            tech : ["HTML/CSS" , "JavaScript"],
            img : mario,
            github : "https://github.com/hargun0360/MY-MARIO",
            link : "https://hargun0360.github.io/MY-MARIO/",
          },
        
      ];


      return projects;
}
