import continual from '../assets/download.png';
import resume from '../assets/resume.jpeg'
import fault from '../assets/fault.png'
import storm from '../assets/storm.jpg'
import content from '../assets/content.png'
import spotify from '../assets/spotify.png'
import malware from '../assets/malware.png'
import nba from '../assets/nba.png'
import multimodal from '../assets/multimodal.png';
import strava from '../assets/Strava.png';
import llm from '../assets/LLM.png';


export const HERO_CONTENT = 
`I'm a Recent Computer Engineering Graduate from NYU with hands-on experience in building scalable data pipelines, deploying ML systems, and delivering production-ready software. I’ve worked as a Data Engineer at 8th Element AI and LTIMindtree, optimizing ETL workflows using Spark, Azure, and Snowflake, and as a Software Engineer contributor at Hack for LA, developing design-system components for a civic-tech open-source initiative and comprehensive backend support features. My projects span MLOps, NLP, recommender systems, and distributed training, powered by strong skills in Python, SQL, and tools like Docker, Kubernetes, Git, FastAPI, and MLflow. I'm seeking full-time roles in Data Engineering, ML Engineering, or Software Development where I can solve real-world problems at scale.`;


export const EXPERIENCES = [
  {
    year: "August 2025 - Present",
    role: "Software Engineer (Full Time Open Source)",
    company: "Hack for LA",
    description:
      `Spearheaded adoption of Material 3 as the unified design baseline across the organization, proposing and implementing a React/JavaScript component library to replace 4 fragmented, team-specific design systems used by 100+ contributors. Launched 10+ reusable components to production, conducting code reviews, enforcing quality standards, and authoring standardized naming conventions and contributor documentation that reduced onboarding ramp-up time by 50%. Resolved persistent Docker-based CI/CD failures in GitHub Actions, stabilizing the deployment pipeline and cutting deploy times by 35%, enabling reliable continuous delivery to GitHub Pages.`,
    technologies: ["React", "JavaScript", "Material 3", "Docker", "GitHub Actions", "HTML", "CSS"],
  },
  {
    year: "January 2023 - July 2023",
    role: "Data Engineer",
    company: "8th Element AI",
    description:
      `Built distributed ETL pipelines on Azure Databricks (PySpark, Delta Lake) to migrate HIPAA-compliant patient health records for Sentara Healthcare's MyChart platform, a $13.2B health system serving 1M+ members across 12 hospitals and 400+ care sites. Architected scalable SQL schemas and optimized query pipelines in Azure Synapse Analytics, migrating years of legacy patient records to power downstream dashboards, analytics, and ML models across the new platform. Automated data ingestion and validation pipelines in Python, reducing manual debugging effort by 10+ hours/week and accelerating downstream analytics and ML model readiness for production deployment.`,
    technologies: ["Python", "PySpark", "Azure Databricks", "Delta Lake", "Azure Synapse", "SQL"],
  },
  {
    year: "June 2022 - August 2022",
    role: "Data Engineer",
    company: "LTIMindtree",
    description:
      `Supported the LTI & Mindtree M&A data consolidation by engineering ETL pipelines to migrate and unify enterprise datasets including BI reports and client records across 80K+ employees into Snowflake and Azure, improving processing efficiency by 20%. Designed SQL schemas and wrote Python ingestion scripts to build a unified enterprise data platform, collaborating cross-functionally with 15+ members across data science, product, and engineering teams to deliver analytics-ready datasets. Developed Power BI dashboards consumed by senior leadership during standups to surface cost-cutting opportunities and consolidation progress, enabling data-driven decision-making through the merger integration.`,
    technologies: ["Snowflake", "Azure", "Python", "SQL", "Power BI", "LTIMosaic"],
  },
 
];

export const PROJECTS = [
  {
    title: "Strava Athlete Intelligence: Personalized Injury Risk Prevention for Recreational Athletes",
    description:
      "An intelligent training analysis platform that transforms existing Strava data into actionable injury prevention insights. Connects via OAuth to ingest 90 days of activity history and heart rate streams, then computes daily risk scores using biomechanically-validated load metrics (ATL/CTL/TSB, ACWR, training monotony). Uses Bayesian calibration to personalize risk thresholds per athlete, with every score explained in plain English by Claude Haiku—delivering sports science-grade intelligence previously accessible only through expensive wearables or coaching.",
    technologies: ["Next.js", "FastAPI", "Celery", "Redis", "scikit-learn", "SHAP", "Claude Haiku", "Supabase", "Strava API", "Vercel", "Railway"],
    image: strava,
    sourceCode: "https://github.com/revforyou/athlete-intelligence",
  },
  {
    title: "LLM Support Triage & Quality Gateway: Production Observability for AI-Powered Customer Support",
    description:
      "A drop-in API gateway that solves the invisible problem every AI-powered support team faces: no visibility into whether their LLM is helping or hallucinating at scale. Automatically classifies ticket complexity, routes to cost-optimal models (Haiku for FAQs, Sonnet for complex issues), and evaluates every response using LLM-as-judge scoring. Implements statistically rigorous A/B testing with Welch's t-test (p < 0.05) and monitors production quality drift with rolling 7-day baselines—think Datadog for LLM responses.",
    technologies: ["Next.js", "FastAPI", "Celery", "Redis", "Claude Haiku", "OpenAI SDK", "SciPy", "scikit-learn", "Supabase", "Prometheus", "Vercel", "Railway"],
    image: llm,
    sourceCode: "https://github.com/revforyou/llm-gateway",
  },
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
