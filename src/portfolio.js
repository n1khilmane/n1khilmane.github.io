/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Nikhil Mane",
  title: "Hi all, I'm Nikhil",
  subTitle: emoji(
   // "This portfolio is currently under development"
    
   "I am a zealous Software Developer 🚀, who is passionate of building end to end products which create impact in the society 📝 Incoming graduate student at New York University ⚡ I know what I'm needing and I don't want to waste more time, I'm in a New York state of mind 🏆"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Ik4afPuYXHS6RahNQyXgYWil89CKQsEl/view?usp=sharing",

    Photographylink:
    "https://n1khilmane.github.io/portfolio/",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/n1khilmane",
  linkedin: "https://www.linkedin.com/in/nikhil-mane-798b15147/",
  gmail: "nikhilmane1919@gmail.com",
  gitlab: "https://gitlab.com/nikhilmane1919",
  facebook: "https://www.facebook.com/n1khilmane",
  instagram: "https://www.instagram.com/n1khilmane/",
  twitter: "https://twitter.com/n1khilmane",
  //unsplash: "https://unsplash.com/@nikhilmane",
  medium: "https://medium.com/@n1khilmane",
  stackoverflow: "https://stackoverflow.com/users/10401675/nikhil-mane",
  // Instagram and Twitter are also supported in the links!
 
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE SOFTWARE DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ I enjoy solving problems on Data Structures and Algorithms and have applied my knowledge of High Level & Low-Level system design to develop applications "),

    emoji("⚡ Developing highly scalable production ready models for various machinelearning and deeplearning usecases"),

    emoji("⚡ Develop highly interactive Front end and Back end for your web and mobile applications"),
    
    emoji("⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / GCP"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
     
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    //{
    //  skillName: "sass",
    //  fontAwesomeClassname: "fab fa-sass"
    //},
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    //{
    //  skillName: "swift",
    //  fontAwesomeClassname: "fab fa-swift"
    //},
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },

    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "New York University, New York City (NY)",
      logo: require("./assets/images/nyu123.jpg"),
      subHeader: "Master of Science in Computer Science specialization in Cybersecurity",
      duration: "September 2021 - present",
      desc: "NYU has a distinguished history of research and education in the field of Cybersecurity, and our classes are taught by internationally known experts. As a graduate of the program, I will be ready for a career as a developer of security products, security application programmer, security analyst, and penetration tester. ",
      descBullets: [
        " $20,000 Scholarship was awarded based on my past achievements."
       
      ]
    },
    {
      schoolName: "PES University, Bangalore, India",
      logo: require("./assets/images/PESlogo.jpg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2017 - May 2021",
      desc: "GPA 8.8/10, Ranked top 5% in the program. Took courses about Software Engineering, Operating Systems, Data Structures and Algorithms, Database Management, etc. ",
      descBullets: [
        "Was part of College Football Team since 2017. Participated in 8 inter-college tournaments throughout three years.",
        "Was part of College Photography Club (Pixelloid). Covered events such as annual College Fest, College Hackathons,etc."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Frontend",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "AI Research Intern",
      company: "CubeBio AI",
      companylogo: require("./assets/images/cubebio.jpg"),
      date: "Sept 2020 – April 2021",
      desc: "",
      descBullets: [
        "Working on Graph Data Representation to Design AI Systems to Predict Pharmaceutical Drug Interactions.",
        "Used Neo4j to extensively speed up access and enhance data access by orders of magnitude.",
        "Combined graph databases and recommendation engines’ strengths to identify recommendations for existing drugs concerning new disease targets rapidly."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Popvue",
      companylogo: require("./assets/images/popvue.jpg"),
      date: "August 2019 – November 2019",
      desc: "",
      descBullets: [
        "Worked as a Backend Developer. Popvue was based in San Fransisco Bay Area, California. It was a remote internship.",
        "Tasks included creating API’s, managing the database, compiling and analyzing data, processes, and codes to troubleshoot problems and server components.",
        "Design custom nodes using HTTP GET and Post methods to acquire information regarding different data points and their devices from the cloud management AWS serve PostgreSQL for database management."
      ]
    },
  
    {
      role: "Stdent Intern",
      company: "Weir Minerals",
      companylogo: require("./assets/images/weir.jpg"),
      date: "April 2019 – June 2019",
      desc: "",
      descBullets: [
        "Designed and Developed an Augmented Reality Application for Android and iOS to assist Field Engineer and Client for Visualization of industrial site and Monitoring live data.",
        
        " Technologies like Model Recognition, Plane Detection, 3D Point Cloud opt for better customer experience were used.",
        "Internship was awarded after winning Weir EnSci- Tech Meraki Hackathon."

      ]

    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects and Research",
  subtitle: "SOME OF MY RECENT WORK",
  projects: [
    {
      image: require("./assets/images/gp121.jpg"),
      projectName: "A Pragmatic Optimal Approach for Detection of Cyber Attacks using Genetic Programming",
      projectDesc: "We developed a Genetic Programming(GP) model for the detection of cyberattacks. We were successful in getting optimized results with 98.67% accuracy on Modern DDoS dataset. This research analyzes a novel attack and extracts attackers’ intrusion scenarios and demonstrates different types of DDoS attacks such as Smurf, UDP Flood, SQL Injection DDOS, HTTP Flood. This paper was presented at CINTI 2020, Budapest, Hungary, on 5-7 November 2020 and is published in 20th IEEE (Scopus Indexed) International Symposium on Computational Intelligence and informatics.",
      footerLink: [
        {
          name: "Publication",
          url: "https://ieeexplore.ieee.org/document/9305844"
        },
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1zf6_peN10xud5R5smlysBhApQ0rINU2z/view?usp=sharing"
        },
        {
          name: "View Project",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/prohelm.jpg"),
      projectName: "ProHelm",
      projectDesc: "Smart biker helmet with XR(Extended Reality) System for hands-free navigation and assistance. Prohelm is a new generation smart helmet created to provide an extended augmented reality-based navigation system, which gives a hands-free and distraction less biking experience. Conducted the research at Yashavantrao Chavan Center for Invention, Innovation, and Incubation (YC-CIII) at Research and Development Center.",
      footerLink: [
        {
          name: "View Project",
          url: ""
        },
        {
          name: "Research Certificate",
          url: "https://drive.google.com/file/d/1AArItTNH_KR0eoyfn5C1kr6L7rGiyTqg/view?usp=sharing"
        }
      ]
    },
    {
      image: require("./assets/images/dd.jpg"),
      projectName: "A data-driven approach to predicting successes and failures of clinical trials",
      projectDesc: "We introduce a new data-driven approach that directly predicts the likelihood of toxicity in clinical trials. The model integrates properties of a compound’s targets and its structure to provide a new measure. Drug target network connectivity and expression levels, along with molecular weight, were identified as important indicators of adverse clinical events. Altogether, our method provides a data-driven broadly applicable strategy to identify drugs likely to possess manageable toxicity in clinical trials and will help drive the design of therapeutic agents with less toxicity.",
      footerLink: [
        {
          name: "View Project",
          url: ""
        },
        
      ]
    },
   
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements 🏆 "),
  subtitle:
    "Achievements, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Hackathons",
      subtitle:
        "Participated in different Hackathons and won them.",
      image: require("./assets/images/HAC.jpg"),
      footerLink: [
       
        {
          name: "Award Letters",
          url: ""
        },
        {
          name: "Blogpost",
          url: ""
        }
      ]
    },
    {
      title: "Football",
      subtitle:
        "Represented College in various football tournaments and also represented Titans Football Club in The Amatuer League, Bangalore.",
      image: require("./assets/images/foot.jpg"),
      footerLink: [
        {
          name: "Award Letters and Medals",
          url: ""
        },
        {
          name: "Blogpost",
          url: ""
        },

      ]
    },

    {
      title: "Scholarship for Graduate Study",
      subtitle: "Based on my previous achievements, I was awarded $20,000 Scholarship on tution",
      image: require("./assets/images/nyu123.jpg"),
      footerLink: [
        {
          name: "Award Letter", url: ""
        },
      
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs 📝",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "",
      title: "My Journey to New York City",
      description:
        "This blog documents how my life changed and decisions I made, which were instrumental."
    },
    {
      url: "",
      title: "Genetic Programming",
      description:
        "How genetic programming will change how we look towards detection of Cyber attacks. "
    },
    {
      url: "",
      title: "Travel Blog",
      description:
        "Blog documenting my trip to Singapore, Malaysia and Thailand."
    }



  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "PRESENTATIONS 🎙️",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE "
  ),

  talks: [
    {
      title: "Detection of Cyber attacks using GP",
      subtitle: "CINTI 2020 Budapest, Hungary",
      slides_url: "https://docs.google.com/presentation/d/11i5XdZ5TtVltKmPbPnDuQ6upZcxSFIkfUa0fYoHx-yU/edit?usp=sharing",
      event_url: "http://conf.uni-obuda.hu/cinti2020/index.html"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8087804945",
  email_address: "nikhilmane1919@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "n1khilmane", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
