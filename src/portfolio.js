/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Sarvesh's Portfolio",
  description:
    "As a seasoned Data Scientist and AI enthusiast, I harness the power of data-driven solutions to drive business impact. With a strong background in building data-intensive applications, I excel in predictive modeling, data processing, and data mining algorithms.",
  og: {
    title: "Sarvesh Sharma Portfolio",
    type: "website",
    url: "https://shsarv4.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Sarvesh Kumar Sharma",
  logo_name: "shsarv",
  nickname: "Adbhut",
  subTitle:
    "As a seasoned Data Scientist and AI enthusiast, I harness the power of data-driven solutions to drive business impact. With a strong background in building data-intensive applications, I excel in predictive modeling, data processing, and data mining algorithms.",
  resumeLink:
    "https://drive.google.com/file/d/1sA0C2LKcN7iAkNjxb7CNSTUUTGJ2Hp3Z/view?usp=sharing",
  portfolio_repository: "https://drive.google.com/file/d/1sA0C2LKcN7iAkNjxb7CNSTUUTGJ2Hp3Z/view?usp=sharing",
  githubProfile: "https://github.com/shsarv",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/shsarv",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shsarv/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:shsarv@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/sarveshroli",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/shsarv1/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
  {
    name: "Medium",
    link: "https://shsarv.medium.com/",
    fontAwesomeIcon: "fa-brands fa-medium", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "black", // Reference https://simpleicons.org/?q=facebook
  },
];

const skills = {
  data: [
    {
      title: "Data Architecture & Engineering",
      fileName: "DesignImg",
      skills: [
        "❄️ Data Pipelines Architect: Designing and building scalable data pipelines using Apache Beam, Apache Spark, Apache Airflow, and cloud-native services like AWS Glue, Azure Data Factory, and Google Cloud Dataflow",
        "❄️ Data Warehousing: Building and optimizing data warehouses on Snowflake, Redshift, BigQuery, and Azure Synapse, with expertise in data modeling, ETL, and data governance",
        "❄️ Database Management: Relational databases (SQL), NoSQL databases (MongoDB, Cassandra), and cloud-based databases (AWS Aurora, Google Cloud SQL), with expertise in database design, performance tuning, and query optimization",
        "❄️ Data Lakes & Analytics: Building and managing data lakes on AWS S3, Azure Data Lake Storage, and Google Cloud Storage, with expertise in data cataloging, metadata management, and analytics using Apache Spark, Presto, and Apache Hive",
        "❄️ Cloud-Native Data Architecture: Designing and implementing cloud-native data architectures using serverless computing, containers (Docker, Kubernetes), and cloud-native services like AWS Lambda, Azure Functions, and Google Cloud Functions",
        "❄️ Data Security & Governance: Ensuring data security, privacy, and compliance using data encryption, access control, auditing, and data governance frameworks like Apache Atlas and Apache Ranger",
        "❄️ Data Visualization & Storytelling: Creating interactive data visualizations and stories using Tableau, Power BI, D3.js, and Apache Superset, with expertise in data communication and stakeholder engagement",
      ],
      softwareSkills: [
        {
          skillName: "Snowflake",
          fontAwesomeClassname: "solar:snowflake-bold",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Airflow",
          fontAwesomeClassname: "logos:airflow",
          style: {
          },
        },
        {
          skillName: "Apache Spark",
          fontAwesomeClassname: "logos:apache-spark",
          style: {
          },
        },
        {
          skillName: "Apache hive",
          fontAwesomeClassname: "simple-icons:apachehive",
          style: {
          },
        },
        {
          skillName: "PowerBI",
          fontAwesomeClassname: "logos:microsoft-power-bi",
          style: {
          },
        },
      ],
    },
    {
      title: "AI/ML",
      fileName: "DataScienceImg",
      skills: [
        "🏆 Pioneering AI Solutions: Time series forecasting, probabilistic models, Bayesian statistics, anomaly detection, convex optimization, computer vision, NLP, recommendation systems, and Auto ML",
        "🏆 Deep Learning Mastery: TensorFlow, PyTorch, Keras, and containerization using Docker.",
        "🏆 Model Deployment: Serverless computing, model serving, and interpretation techniques.",
        // "🏆 Natural Language Processing (NLP): Text processing, sentiment analysis, entity recognition, topic modeling, and language modeling",
        // "🏆 Computer Vision: Image processing, object detection, segmentation, tracking, and scene understanding",
        // "🏆 Reinforcement Learning: Markov decision processes, Q-learning, policy gradients, and deep reinforcement learning",
        "🏆 Generative Models: GANs, VAEs, and Bayesian networks",
        "🏆 Graph Neural Networks: Graph convolutional networks, graph attention networks, and graph autoencoders",
        "🏆 Explainable AI (XAI): Model interpretability, feature attribution, and model explainability",
        "🏆 Edge AI: Deploying AI models on edge devices, IoT, and real-time inference",
        "🏆 Transfer Learning: Domain adaptation, fine-tuning, and few-shot learning",
        // "Unsupervised Learning: Clustering, dimensionality reduction, and density estimation",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "logos-opencv",
          style: {
            // backgroundColor: "transparent",
            // color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Cloud Architect: AWS, GCP, Azure, Snowflake, and cloud-native architectures",
        "⚡ Cloud Migration: Seamless data management and analytics",
        "⚡ Cloud Cost Optimization: Resource management and cost reduction strategies",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React",
        "⚡ Creating application backend in Node, Express Django, & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "devicon:flask-wordmark",
          style: {
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "logos:django",
          style: {
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/shsarv/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/shsarv",
    },
    {
      siteName: "Credly",
      iconifyClassname: "simple-icons:credly",
      style: {
        // color: "#2EC866",
      },
      profileLink: "https://www.credly.com/users/shsarv/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "GLA University, Mathura",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "GLA_University_logo.png",
      alt_name: "GLA University",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I have also completed various projects based on Machine Learning, Deep Learning, Web Development, and Cloud Computing.",
      ],
      website_link: "https://www.gla.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- IBM",
      logo_path: "ibm_logo.png",
      certificate_link:
        "",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- IBM",
      logo_path: "ibm_logo.png",
      certificate_link:
        "",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Natural Language Processing",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description: "With a strong expertise in predictive modeling, data processing, and data mining algorithms, I excel in designing, developing, testing, and deploying scalable and adaptable services that seamlessly translate business and functional requirements into impactful deliverables. My proficiency in machine learning and statistical modeling enables me to uncover hidden patterns, predict trends, and drive data-driven insights that inform strategic business decisions. I leverage my technical skills in programming languages such as Python, R, and SQL to craft efficient data pipelines, architect robust data architectures, and implement automated workflows that streamline data processing and analysis. With a proven track record of delivering high-performance solutions that drive business growth, I am confident in my ability to tackle complex data challenges and drive innovation.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Data Scientist",
          company: "Sisense",
          company_url: "https://www.sisense.com/",
          logo_path: "Sisense.jpg",
          duration: "Nov 2022 - Oct 2023",
          location: "NewYork, USA",
          description:"Developed and managed Data Lakes using Apache Hadoop, Apache Spark, and Amazon S3, increasing data storage capacity by 50% and reducing data retrieval time by 40%. Orchestrated and maintained Data Warehousing solutions using Snowflake, Amazon Redshift, and Apache Hive, improving data query performance by 40% and reducing costs by 15%.",
          color: "#000000",
        },
        {
          title: "Deep Learning Engineer",
          company: "Nvidia, inc.",
          company_url: "https://www.nvidia.com/en-in/",
          logo_path: "nvidia.png",
          duration: "May 2021 - Oct 2022",
          location: "Hybrid",
          description:
            "Led 10 initiatives in data extraction, warehousing, and analytics, leveraging LLMs, GenAI, and Data Fabric architecture to cut operating costs by 20%, enhance business intelligence, and improve DataOps agility. Collaborated with a team of 3 data analysts to implement NLP models using Transformers, BERT, and spaCy for web scraping, ensuring data quality, integrity, and compliance with Data Governance standards.",
          color: "#0879bf",
        },
        {
          title: "ML Engineer",
          company: "IntelleWings",
          company_url: "https://intellewings.com/",
          logo_path: "intellewings.jpg",
          duration: "March 2021 - April 2021",
          location: "Remote",
          description:
            "Collaborated with cross-functional teams to integrate ML models into existing systems, resulting in improved AML detection and prevention, and stayed up-to-date with industry trends to apply new techniques and advancements.Developed machine learning models using NLP, Computer Vision, and Deep Learning to detect money laundering and identify politically exposed individuals, achieving high accuracy and efficiency.",
          color: "#9b1578",
        },
        {
          title: "Data Engineer",
          company: "Journera Inc.",
          company_url: "#",
          logo_path: "journera.png",
          duration: "Sep 2020 - Feb 2021",
          location: "Remote",
          description:
            "Designed and implemented a Real-Time Data Pipeline using Apache Kafka, Apache Flink, and Apache Cassandra, increasing data processing speed by 30% and reducing latency by 25%. Built and deployed Machine Learning models using TensorFlow, PyTorch, and Scikit-Learn, achieving an accuracy of 95% in predictive analytics and reducing model training time by 20%.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Data Science Intern",
          company: "Everlytics",
          company_url: "#/",
          logo_path: "ever.jpg",
          duration: "Sep 2019 - Dec 2019",
          location: "Remote",
          description:
            "Explored datasets to uncover insights and built predictive models using Python, NumPy, and scikit-learn. Collaborated with cross-functional teams to develop and deploy machine learning algorithms. Visualized data using Matplotlib and Seaborn, and presented findings to stakeholders. Gained hands-on experience with data preprocessing, feature engineering, and model evaluation. Applied statistical knowledge to drive business decisions and drive growth.",
          color: "#000000",
        },
        {
          title: "CS Intern",
          company: "EPAM Systems",
          company_url:"#",
          logo_path: "epam.jpeg",
          duration: "Aug 2019 - July 2020",
          location: "Work From Home",
          description:
            "Developed Java-based applications using Maven and related technologies, enhancing coding skills and understanding of object-oriented programming. Gained hands-on experience with build automation, dependency management, and version control using Git. Contributed to the development of scalable software solutions, collaborating with a team to deliver high-quality projects. Applied problem-solving skills to debug and optimize Java code.",
          color: "#0071C5",
        },
        {
          title: "Web Developer Intern",
          company: "InternShala",
          company_url: "#",
          logo_path: "internshala.png",
          duration: "May 2019 - July 2019",
          location: "Remote",
          description:
            "Assisted in building and maintaining websites for clients using HTML, CSS, and JavaScript. Gained hands-on experience with front-end development and collaborated with a team to deliver projects efficiently. Implemented responsive design principles and optimized website performance. Developed problem-solving skills and learned version control using Git. Enhanced coding skills and understanding of web development frameworks.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Remote",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. ",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "Developing Accurate and Reliable Machine Learning Classifiers to Identify and Predict Key Protein-Protein Interaction Sites",
      name: "Developing Accurate and Reliable Machine Learning Classifiers to Identify and Predict Key Protein-Protein Interaction Sites",
      createdAt: "NA",
      description: "Published in Computational Drug Discovery and Design, Springer Methods in Molecular Biology series",
      url: "#",
    },
    {
      id: "Ordinal Regression-based Age Estimation with Neural Networks: A Ranked Approach",
      name: "Ordinal Regression-based Age Estimation with Neural Networks: A Ranked Approach",
      createdAt: "NA",
      description: "Published in IEEE",
      url: "",
    },
    {
      id: "Heart Disease Detection Using Big Data Approach",
      name: "Heart Disease Detection Using Big Data Approach",
      createdAt: "NA",
      description: "Published in IEEE",
      url: "",
    },
    {
      id: "Classification of Arrhythmia using ECG Data",
      name: "Classification of Arrhythmia using ECG Data",
      createdAt: "NA",
      description: "Published in IEEE",
      url: "",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile-pic.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://shsarv.medium.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Gorakhpur, Uttar Pradesh, India - 273001",
    locality: "Gorakhpur",
    country: "India",
    region: "Uttar Pradesh",
    postalCode: "273001",
    streetAddress: "Vivek nagar, Gorakhpur",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/f4oGMBrGAu9LHbjz6",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
