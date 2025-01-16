import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I am a passionate Front-End Developer with a knack for designing and building visually appealing, responsive, and user-centric web interfaces. With a strong foundation in modern front-end technologies such as React, Next.js, and Tailwind CSS, I specialize in turning creative concepts into functional and intuitive user experiences. My expertise in crafting seamless, accessible, and interactive designs enables me to deliver solutions that not only meet business goals but also delight users.

Driven by a commitment to excellence and innovation, I aim to bridge the gap between design and functionality, creating web applications that stand out in performance and usability.`;

export const ABOUT_TEXT = `I am a dedicated Front-End Developer with a strong focus on building responsive and efficient web applications. Proficient in modern technologies like React, Next.js, and Tailwind CSS, I specialize in creating dynamic and scalable interfaces that enhance user engagement. I am passionate about writing clean, maintainable code and delivering high-performance solutions. Collaboration and problem-solving are at the core of my approach, allowing me to contribute effectively to team projects. I enjoy staying updated with emerging technologies and continuously improving my skills to build impactful web applications.Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
    {
      year: "September 2024 - December 2024",
      role: "Intermediate Web Developer Intern",
      company: "Agrownet",
      description: `Developed and maintained web applications using JavaScript, HTML, and CSS to enhance user experience. Collaborated with the team to implement new features and optimize platform performance. Contributed to front-end development, focusing on responsive design for device compatibility.`,
      technologies: ["HTML", "CSS", "JavaScript", "React.js", "Node.js"],
    },
    {
      year: "December 2024 - Present",
      role: "Software Development Intern",
      company: "NullClass",
      description: `Contributed to project development using React, Redux, and modern web technologies. Collaborated with the team to implement new features, optimize performance, and address bugs. Gained hands-on experience in full-stack development and enhanced problem-solving skills through practical tasks.`,
      technologies: ["React", "Redux", "JavaScript", "Node.js"],
    },
];

export const PROJECTS = [
  {
    title: "YouTube Clone",
    image: project1,
    description: 
      "Developed a responsive YouTube clone with video grid layout, search functionality, and navigation. Used Grid and Flexbox to design interactive components like video cards and notifications. Recreated YouTube’s core UI features, including header, sidebar, and video previews with channel info.",
    technologies: ["HTML5", "CSS3"]
  },
  {
    title: "E-Commerce Website",
    image: project2,
    description:
      "Engineered a responsive Amazon clone with e-commerce features, including shopping cart functionality. Developed unit tests using the Jasmine framework to ensure code reliability and maintainability. Implemented a mobile-responsive design with modular architecture, dynamic product rendering, and an interactive cart system.",
    technologies: ["HTML5", "CSS3", "JavaScript" , "Jasmine"]
  },
  {
    title: "Stack Overflow Platform",
    image: project3,
    description:
      "Developed a Stack Overflow clone with user authentication, question posting, and commenting features. Utilized React and Redux for dynamic, state-driven UI components and efficient data management. Built RESTful APIs with Node.js, connecting to MongoDB for storing and managing user and question data.",
     technologies: ["React", "Redux", "JavaScript", "HTML", "CSS", "Node.js", "MongoDB"]
  },
  {
    title: "Google Clone",
    image: project4,
    description: 
      "Recreated Google’s homepage using Tailwind CSS, including search bar functionality, logo, and simple footer design and added darkmode functionality. Designed with mobile-first responsiveness in mind.",
    technologies: ["Tailwind CSS", "JavaScript"]
  }
];

export const CONTACT = {
  address: "Coimbatore , TamilNadu",
  phoneNo: "+91 9865828638 ",
  email: "yeeswanth@gmail.com",
};
