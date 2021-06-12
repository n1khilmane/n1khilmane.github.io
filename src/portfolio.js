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
    "This portfolio is currently under development"
    
   //"A zealous Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
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
      schoolName: "New York University",
      logo: require("./assets/images/nyulogo.jpg"),
      subHeader: "Master of Science in Computer Science specialization in Cybersecurity",
      duration: "September 2021 - present",
      desc: "NYU has a distinguished history of research and education in the field of cybersecurity, and our classes are taught by internationally known experts. As a graduate of the program, I will be ready for a career as a developer of security products, security application programmer, security analyst, and penetration tester. ",
      descBullets: [
        " $20,000 Scholarship was awarded based on my past achievements"
       
      ]
    },
    {
      schoolName: "PES University",
      logo: require("./assets/images/PESlogo.jpg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2017 - May 2021",
      desc: "GPA 8.8/10, Ranked top 5% in the program. Took courses about Software Engineering, Operating Systems, Data Structures and Algorithms, Database Management, etc. ",
      // descBullets: []
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
      date: "Sept 2020 – Present",
      desc: "",
      descBullets: [
        "",
        ""
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Popvue",
      companylogo: require("./assets/images/popvue.jpg"),
      date: "August 2019 – November 2019",
      desc: ""
    },
    {
      role: "Stdent Intern",
      company: "Weir Minerals",
      companylogo: require("./assets/images/weir.jpg"),
      date: "April 2019 – June 2019",
      desc: ""
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
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "",
      footerLink: [
        {
          name: "Visit Website",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "",
      footerLink: [
        {
          name: "Visit Website",
          url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: ""
        },
        {
          name: "Award Letter",
          url: ""
        },
        {
          name: "Google Code-in Blog",
          url: ""
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: ""
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: ""
        }
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
  title: "PRESENTATIONS 🙊",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
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
