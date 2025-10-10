import continual from '../assets/download.png';
import resume from '../assets/resume.jpeg'
import fault from '../assets/fault.png'
import storm from '../assets/storm.jpg'
import content from '../assets/content.png'
import spotify from '../assets/spotify.png'
import malware from '../assets/malware.png'
import nba from '../assets/nba.png'
import multimodal from '../assets/multimodal.png';


export const HERO_CONTENT = 
`I'm a Recent Computer Engineering Graduate from NYU with hands-on experience in building scalable data pipelines, deploying ML systems, and delivering production-ready software. I’ve worked as a Data Engineer at 8th Element AI and LTIMindtree, optimizing ETL workflows using Spark, Azure, and Snowflake, and as a Software Engineer contributor at Hack for LA, developing design-system components for a civic-tech open-source initiative and comprehensive backend support features. My projects span MLOps, NLP, recommender systems, and distributed training, powered by strong skills in Python, SQL, and tools like Docker, Kubernetes, Git, FastAPI, and MLflow. I'm seeking full-time roles in Data Engineering, ML Engineering, or Software Development where I can solve real-world problems at scale.`;


export const EXPERIENCES = [
  {
    year: "August 2025 - Present",
    role: "Software Engineer (Full Time Open Source)",
    company: "Hack for LA",
    description: 
      `Led the development of the Hack for LA microsite for TWE Design System integration by building 6+ modular components in
JavaScript, SCSS, and HTML to improve UI consistency and reduce new developer onboarding time by 55%. Implemented comprehensive backend support features, including live reload capabilities, API stubs, versioned content endpoints,
and a caching layer integrated with targeted CI/CD automation, reducing build times by 75% and deployment cycles by 35%. Participate in open-source workflows, including issue triage, GitHub PR reviews, and documentation updates.`,
    technologies: ["GitHub", "JavaScript", "Python", "HTML", "CSS"],
  },
  {
    year: "January 2023 - July 2023",
    role: "Data Engineer",
    company: "8th Element AI",
    description: 
      `Built and deployed a scalable ETL pipeline using Python, Apache Spark, and Azure Databricks, reducing data processing time
by 40% and optimizing storage across distributed systems for both batch and streaming workloads. Curated and transformed 30K+ healthcare records from diverse sources by designing big data schema models using dimensional
modeling, partitioning, and Delta Lake, improving data quality, consistency, and analytical readiness for BI reporting. Validated and cleansed structured/unstructured data using SQL, enhancing trust in analytics pipelines by reducing data errors by
60%, and supporting a smooth system upgrade in collaboration with engineering and analytics teams.`,
    technologies: ["Python", "SQL", "Azure Databricks", "Azure Synapse","Microsoft SQL Server"],
  },
  {
    year: "June 2022 - August 2022",
    role: "Data Engineer",
    company: "Larsen and Toubro Infotech",
    description: 
      `Led a multi-source data migration project to Snowflake, transforming fragmented business data into a unified training-ready
schema using SQL and Python, improving processing efficiency by 20%. Automated preprocessing and quality checks on 50K+ records using Pandas, SnowSQL, and Jupyter, boosting data
accuracy by 30% and reducing pipeline failures by 50% during M&A consolidation—collaborated with the Data Principal
and cross-functional teams to ensure smooth integration.`,
    technologies: ["Snowflake", "Azure", "Python", "Jupyter", "LTIMosaic"],
  },
 
];

export const PROJECTS = [
  {
    title: "Twitter Content Moderation System",
    description:
      "Built an end-to-end toxicity classification system using BERT fine-tuning and MLflow for tracking experiments. Used Ray Tune for distributed hyperparameter optimization. Integrated with FastAPI for inference and monitored performance metrics across versions.",
    technologies: ["Python", "BERT", "MLflow", "Ray", "FastAPI","Docker","Kubernetes","GPU","Jupyter"],
    image: content,
    sourceCode: "https://github.com/revforyou/Content_Moderation_System",
  },
  {
    title: "NBA Player and Performance Analytics",
    description:
      "Analyzed NBA player stats using Python and SQL. Cleaned, merged regular season and playoff data, and built feature-rich datasets for insights on player efficiency, clutch stats, and team performance trends. Emphasized EDA and data engineering.",
    technologies: ["Python", "SQL", "Pandas", "NumPy","Dash","Plotly","Matplotlib","Seaborn"],
    image: nba,
    sourceCode: "https://github.com/revforyou/NBA-Stats-Analysis",
  },
  {
    title: "Spotify Music Recommendation System",
    description:
      "Developed a music recommendation system using Spotify API, Genius lyrics, TF-IDF, and cosine similarity. Achieved 25% improvement in match quality and 35% latency reduction. Combined user preferences with lyrical embeddings.",
    technologies: ["Python","Spark", "TF-IDF", "Spotify API", "NLP", "Cosine Similarity","Hadoop","HDFS"],
    image: spotify,
    sourceCode: "https://github.com/Om1513/MusicRecommendationSystem",
  },
  {
    title: "Resume Matching using Doc2Vec & Deep Learning",
    description:
      "Built a semantic resume-matching system using Doc2Vec embeddings and a neural net classifier. Achieved 90% accuracy on IT/software resumes and improved matching precision by 45%. Used NLTK, SpaCy, and Gensim.",
    technologies: ["Doc2Vec", "Gensim", "Deep Learning", "SpaCy", "NLTK"],
    image: resume,
    sourceCode: "https://github.com/revforyou/DEEPLEARNINGFINAL",
  },

  {
    title: "Continual Learning Using Regularisation Methods",
    description:
      "Proposed a novel CNN-based architecture for real-time fault detection in smart microgrids. Improved fault classification accuracy and latency.",
    technologies: ["Python","A/B Testing","Advanced ML","EWC","Catastrophic Forgetting"],
    image: continual,
    sourceCode: "https://github.com/revforyou/Continual_Learning_Regularisation",
  },


  {
    title: "Multimodal Emotion Recognition using Transformers",
    description:
      "This project explores multimodal emotion recognition using facial and vocal cues from the RAVDESS dataset. We evaluate and compare three fusion strategies built on transformer and attention-based architectures to enhance affective computing systems that better understand human emotions.",
    technologies: ["Python","Transformers","Computer Vision"],
    image: multimodal,
    sourceCode: "https://github.com/revforyou/Emotion_Recognition_Transformers",
  },

  {
    title: "Fault Detection in Power Transmission Line using Machine Learning Techniques",
    description:
      "Proposed a novel CNN-based architecture for real-time fault detection in smart microgrids. Comapred different ML models and improved fault classification accuracy and latency. Published in IEEE.",
    technologies: ["CNN", "ANN", "Wavelet Transform", "Signal Processing", "Python", "IEEE"],
    image: fault,
    publication: "https://ieeexplore.ieee.org/document/10306740",
  },
  
  {
    title: "Tropical Cyclone Intensity Classification Using Convolutional Neural Networks On Satellite Imagery",
    description:
      "Used ML models and satellite imagery to classify cyclone intensities. Focused on feature extraction from time-series weather data. Published in IEEE.",
    technologies: ["Python", "CNN", "Machine Learning", "Pandas", "IEEE"],
    image: storm,
    publication: "https://ieeexplore.ieee.org/document/9952829",
  },
  {
    title: "Effective Malware Detection using Gradient Boosting and Convolutional Neural Network",
    description:
      "Applied Random Forest, SVM, and neural nets for malware classification. Engineered features from binary files and achieved high F1-score on benchmark dataset. Published in IEEE.",
    technologies: ["Python", "Keras","Tensorflow", "Random Forest", "SVM", "Deep Learning","IEEE"],
    image: malware,
    publication: "https://ieeexplore.ieee.org/document/9673266",
  }
];
