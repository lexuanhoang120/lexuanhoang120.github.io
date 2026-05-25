const portfolioData = {
  siteTitle: "Xuan Hoang Le | Applied AI Researcher & Data Scientist",
  navItems: [
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "References", href: "#references" }
  ],
  hero: {
    eyebrow: "AI Researcher · Data Scientist",
    heading: "Bringing AI automation into real-world systems.",
    description:
      "Data scientist and AI researcher with a background in Mechatronics Engineering and experience in vision–language models, computer vision, time-series forecasting, and business analytics.",
    highlights: [],
    actions: [
      { label: "Email Me", href: "mailto:lexuanhoang120@gmail.com", primary: true },
      { label: "Curriculum Vitae (CV)", href: "docs/HOANG_CV.pdf", external: true },
      { label: "Motivation Letter", href: "docs/HOANG_Motivation_Letter.pdf", external: true },
      { label: "GitHub", href: "https://github.com/lexuanhoang120", external: true },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/xuan-hoang1999/", external: true }
    ]
  },
  profile: [
    { label: "Location", value: "Seoul, South Korea" },
    { label: "Current role", value: "Research Assistant, Vision Language Intelligence Lab" },
    { label: "Research Interests", value: "GUI grounding, computer-use agents, practical AI deployment" },
    { label: "Availability", value: "Open to full-time roles from July 2026" },
    { label: "Visa", value: "D2" },
    { label: "Nationality", value: "Vietnamese" }
  ],
  about: {
    subtitle:
      "I care about measurable outcomes: not only model quality, but also reliability, deployment fit, and business value.",
    cards: [
      {
        title: "Research Mindset",
        description: "I prototype quickly, validate assumptions, and write clearly so research can be reused by teams."
      },
      {
        title: "Engineering Execution",
        description: "I build full pipelines: data preparation, modeling, evaluation, and handoff-ready implementation."
      },
      {
        title: "Business Relevance",
        description: "I translate model performance into metrics stakeholders care about, such as error reduction and decision support."
      }
    ]
  },
  projects: {
    // subtitle: "A unified view of industry projects and academic research outputs.",
    items: [
      {
        id: "project-cua-dataset",
        title: "A Dataset for Computer-Use Agents",
        period: "2026.06 - Present",
        sortKey: 202606,
        description: "Building and curating a dataset tailored for computer-use agent grounding and interaction tasks.",
        metric: "First Author · Target venue: AAAI 2027",
        tags: ["Academic", "In Prep", "First Author", "AAAI 2027"],
        location: { label: "Sejong University VLI Lab", href: "#exp-vli-lab" },
        links: [
          { label: "GitHub", href: "https://github.com/lexuanhoang120", external: true },
          { label: "Docs", href: "docs/2026_06-cua-dataset-for-computer-use-agents.html#docs" }
        ]
      },
      {
        id: "project-dart",
        title: "DART: Density-Aware Adaptive Refinement Technique for GUI Grounding in Computer-Use Agents",
        period: "2026.05",
        sortKey: 202605,
        description: "Density-aware adaptive refinement method to improve GUI grounding precision for computer-use agents.",
        metric: "First Author · Submitted to IEEE Access",
        tags: ["Academic", "Under Review", "First Author", "IEEE Access"],
        location: { label: "Sejong University VLI Lab", href: "#exp-vli-lab" },
        links: [
          { label: "GitHub", href: "https://github.com/lexuanhoang120/Density-Aware-Adaptive-Refinement-Technique", external: true },
          { label: "Docs", href: "docs/2026_05-dart-gui-grounding.html#docs" }
        ]
      },
      {
        id: "project-roi-selection",
        title: "Training-Free ROI Selection via Semantic Vector Fields for GUI Grounding",
        period: "2026.04",
        sortKey: 202604,
        description: "Training-free ROI selection strategy using semantic vector fields to improve refinement efficiency.",
        metric: "Second Author · Submitted to ECCV 2026",
        tags: ["Academic", "Under Review", "Second Author", "ECCV 2026"],
        location: { label: "Sejong University VLI Lab", href: "#exp-vli-lab" },
        links: [
          { label: "GitHub", href: "https://github.com/lexuanhoang120", external: true },
          { label: "Docs", href: "docs/2026_04-training-free-roi-selection.html#docs" }
        ]
      },
      {
        id: "project-cgar",
        title: "CGAR: Confidence-Guided Adaptive Refinement for GUI Grounding",
        period: "2026.03",
        sortKey: 202603,
        description: "Confidence-guided adaptive refinement approach for GUI grounding as an earlier method iteration.",
        metric: "First Author · Previously submitted to CVPR 2026",
        tags: ["Academic", "Rejected", "First Author", "CVPR 2026"],
        location: { label: "Sejong University VLI Lab", href: "#exp-vli-lab" },
        links: [
          { label: "GitHub", href: "https://github.com/lexuanhoang120/Confidence-Guided-Adaptive-Refinement", external: true },
          { label: "Docs", href: "docs/2026_03-cgar-gui-grounding.html#docs" }
        ]
      },
      {
        id: "project-cctv-video-filtering",
        title: "VLM-Based CCTV Video Filtering",
        period: "2025.12 - 2026.02",
        sortKey: 202512,
        description:
          "Built a CCTV retrieval filtering module with frame sampling and prompt-based inference to separate CCTV from non-CCTV footage as a laboratory-assigned internship task with PIA Space.",
        tags: ["Industry", "VLM", "Video Understanding", "Prompt Engineering"],
        location: { label: "PIA Space (Lab Internship Task)", href: "https://www.pia.space/", external: true },
        links: [
          { label: "GitHub", href: "https://github.com/lexuanhoang120/CCTV-Video-Filtering", external: true },
          { label: "Docs", href: "docs/2025_12-cctv-video-filtering.html#docs" }
        ]
      },
      {
        id: "project-vision-based-communication",
        title: "Vision-based Communication",
        period: "2025.11",
        sortKey: 202511,
        description:
          "Vision-based communication project for reliable visual information transfer in constrained environments.",
        tags: ["Academic", "Computer Vision", "Communication Systems"],
        location: { label: "Sejong University VLI Lab", href: "#exp-vli-lab" },
        links: [
          { label: "GitHub", href: "https://github.com/lexuanhoang120/Vision-based-Communication", external: true },
          { label: "Docs", href: "docs/2025_11-vision-based-communication.html#docs" }
        ]
      },
      {
        id: "project-log-web-fshop",
        title: "Log Web Analysis",
        period: "2024.04",
        sortKey: 202404,
        description:
          "Web-log analytics project for user behavior and sequence pattern analysis.",
        tags: ["Industry", "Web Analytics", "Behavior Modeling"],
        metric: "10M+ raw log records analyzed",
        location: { label: "CADS - FPT Corporation", href: "#exp-fpt-cads" },
        links: [
          { label: "GitHub", href: "https://github.com/lexuanhoang120/log-web-fshop", external: true },
          { label: "Docs", href: "docs/2024_04-log-web-fshop-analysis.html#docs" }
        ]
      },
      {
        id: "project-map-linkedin-email",
        title: "Map LinkedIn Email",
        period: "2024.03",
        sortKey: 202403,
        description:
          "Data collection and enrichment utility to map profile/company information with contact datasets.",
        tags: ["Industry", "Data Pipeline", "Web Scraping"],
        location: { label: "CADS - FPT Corporation", href: "#exp-fpt-cads" },
        links: [
          { label: "GitHub", href: "https://github.com/lexuanhoang120/map-linkedin-email", external: true },
          { label: "Docs", href: "docs/2024_03-map-linkedin-email.html#docs" }
        ]
      },
      {
        id: "project-crawling-ggmap",
        title: "Google Maps Business Scraper",
        period: "2024.02",
        sortKey: 202402,
        description:
          "Built a location-data crawling pipeline from Google Maps sources for business profiling and downstream analytics.",
        metric: "709K+ rows crawled, 183K+ unique phone numbers extracted",
          tags: ["Industry", "Web Scraping", "Data Pipeline", "Geo Data"],
        location: { label: "CADS - FPT Corporation", href: "#exp-fpt-cads" },
        links: [
          { label: "GitHub", href: "https://github.com/lexuanhoang120/Google-Maps-Business-Scraper", external: true },
          { label: "Docs", href: "docs/2024_02-crawling-ggmap.html#docs" }
        ]
      },
      {
        id: "project-restaurant-traffic-forecasting",
        title: "Restaurant Traffic Forecasting",
        period: "2024.01 - 2024.05",
        sortKey: 202401,
        description:
          "Improved demand prediction for 600 restaurants through data cleaning, feature design, and model strategy updates.",
        metric: "15% relative WAPE reduction",
        tags: ["Industry", "Forecasting", "Feature Engineering", "Business Analytics"],
        location: { label: "CADS - FPT Corporation", href: "#exp-fpt-cads" },
        links: [
          { label: "GitHub", href: "https://github.com/lexuanhoang120/Restaurant-Traffic-Forecasting", external: true },
          { label: "Docs", href: "docs/2024_01-restaurant-traffic-forecasting.html#docs" }
        ]
      },
      {
        id: "project-revenue-prediction",
        title: "Revenue Prediction",
        period: "2022.06 - 2022.10",
        sortKey: 202206,
        description:
          "Revenue forecasting workflow for business planning and operational decision support.",
        tags: ["Industry", "Forecasting", "Business Analytics"],
        location: { label: "VTCODE Company", href: "#exp-vtcode" },
        links: [
          { label: "GitHub", href: "https://github.com/lexuanhoang120/Revenue_Prediction", external: true },
          { label: "Docs", href: "docs/2023_06-revenue-prediction.html#docs" }
        ]
      },
      {
        id: "project-electricity-consumption-forecasting",
        title: "Electricity Consumption Forecasting",
        period: "2023.05 - 2023.10",
        sortKey: 202305,
        description:
          "Designed monthly forecasting across 13 provinces using decomposition and statistical time-series modeling.",
        metric: "MAPE below 6% in all provinces, below 4% in six provinces",
        tags: ["Industry", "Time Series", "ARIMA", "Forecasting"],
        location: { label: "CADS - FPT Corporation", href: "#exp-fpt-cads" },
        links: [
          { label: "GitHub", href: "https://github.com/lexuanhoang120/Electricity-Consumption-Forecasting", external: true },
          { label: "Docs", href: "docs/2023_05-electricity-consumption-forecasting.html#docs" }
        ]
      },
      {
        id: "project-crawl-lyrics-category",
        title: "Crawl Lyrics Category",
        period: "2022.08",
        sortKey: 202208,
        description:
          "Crawler project for collecting and categorizing structured lyric metadata.",
        tags: ["Industry", "Web Scraping", "Data Processing"],
        location: { label: "VTCODE Company", href: "#exp-vtcode" },
        links: [
          { label: "GitHub", href: "https://github.com/lexuanhoang120/Crawl_Lyrics_Category", external: true },
          { label: "Docs", href: "docs/2022_08-crawl-lyrics-category.html#docs" }
        ]
      },
      {
        id: "project-web-face-recognition",
        title: "Web Face Recognition",
        period: "2022.10",
        sortKey: 202210,
        description:
          "Web-based face recognition application prototype integrating browser-facing workflows with model inference.",
        tags: ["Industry", "Face Recognition", "Web App"],
        location: { label: "VTCODE Company", href: "#exp-vtcode" },
        links: [
          { label: "GitHub", href: "https://github.com/lexuanhoang120/Web_Face_Recognition", external: true },
          { label: "Docs", href: "docs/2022_07-web-face-recognition.html#docs" }
        ]
      },
      {
        id: "project-face-recognition-attendance-system",
        title: "Face Recognition Attendance System",
        period: "2022.06 - 2023.03",
        sortKey: 202206,
        description:
          "Delivered a camera-based attendance automation system using facial embeddings and identity matching.",
        metric: "97% recognition accuracy",
        tags: ["Industry", "Face Recognition", "Computer Vision", "Deployment"],
        location: { label: "VTCODE Company", href: "#exp-vtcode" },
        links: [
          { label: "GitHub", href: "https://github.com/lexuanhoang120/Face_Recognition", external: true },
          { label: "Docs", href: "docs/2022_06-face-recognition-attendance.html#docs" }
        ]
      },
      {
        id: "project-automated-chicken-classification-system",
        title: "Automated Chicken Classification System",
        period: "2021.01 - 2022.06",
        sortKey: 202101,
        description:
          "Developed an end-to-end mechatronic classification system from image collection to model integration and control design.",
        tags: ["Academic", "YOLOv5", "Automation", "Mechatronics"],
        location: { label: "HCMUT Control and Automation Lab", href: "#exp-hcmut-calab" },
        links: [
          { label: "GitHub", href: "https://github.com/lexuanhoang120/Thesis-Design-a-system-classifying-chicken-gender", external: true },
          { label: "Docs", href: "docs/2021_01-automated-chicken-classification.html#docs" }
        ]
      }
    ]
  },
  experience: [
    {
      id: "exp-vli-lab",
      period: "2024.09 - Present",
      position: "Research Assistant",
      organization: "Vision Language Intelligence Laboratory, Sejong University",
      organizationLink: "https://sites.google.com/view/vlilab",
      location: "Seoul, South Korea",
      summary:
        "Researching training-free GUI grounding methods, vision-based systems, and VLM modules while contributing to end-to-end research delivery.",
      highlights: [
        "Researched training-free methods to improve GUI grounding and proposed confidence-guided adaptive refinement that leverages spatial signals from attention maps for stopping and cropping.",
        "Implemented a VLM-based video filtering module within a CCTV retrieval system, using frame sampling and prompt-based inference to classify videos as CCTV or non-CCTV footage.",
        "Developed a vision-based system for data transmission from roadside stations to moving vehicles.",
        "Contributed to research activities, data annotation, simulation, and manuscript preparation."
      ],
      relatedLinks: [
        { label: "Project: CCTV Video Filtering", href: "#project-cctv-video-filtering" },
        { label: "Project: Vision-based Communication", href: "#project-vision-based-communication" },
        { label: "Project: DART", href: "#project-dart" },
        { label: "Project: ROI Selection", href: "#project-roi-selection" }
      ]
    },
    {
      id: "exp-fpt-cads",
      period: "2023.05 - 2024.08",
      position: "Data Scientist",
      organization: "Center of Applied Data Science, FPT Corporation",
      organizationLink: "https://fpt.com/en/",
      location: "Vietnam",
      summary:
        "Led forecasting, customer analytics, and data-enrichment initiatives at CADS-FPT across time-series, behavior modeling, and external data pipelines.",
      highlights: [
        "Built monthly electricity-consumption forecasting models for 13 Vietnamese provinces using trend, seasonal, and residual decomposition with linear, statistical, and ARIMA-based methods, achieving MAPE below 6% across all provinces and below 4% in six provinces.",
        "Improved a daily customer-traffic forecasting model for 600 restaurants by enhancing preprocessing, feature engineering, and modeling strategies, achieving a 15% relative reduction in WAPE.",
        "Analyzed large-scale raw web-log data to develop anonymous customer personas, model user journeys, and predict user touchpoints using Markov sequence analysis.",
        "Automated web scraping pipelines to collect and enrich external data from LinkedIn, Google Maps, and Chotot, supporting exploratory analysis and business recommendations."
      ],
      relatedLinks: [
        { label: "Project: Electricity Forecasting", href: "#project-electricity-consumption-forecasting" },
        { label: "Project: Restaurant Traffic Forecasting", href: "#project-restaurant-traffic-forecasting" },
        { label: "Project: Log Web Analysis", href: "#project-log-web-fshop" },
        { label: "Project: Map LinkedIn Email", href: "#project-map-linkedin-email" },
        { label: "Project: Google Maps Business Scraper", href: "#project-crawling-ggmap" }
      ]
    },
    {
      id: "exp-vtcode",
      period: "2022.06 - 2023.03",
      position: "Data Scientist",
      organization: "Data Department, VTCODE Company",
      organizationLink: "https://www.vtcode.vn/",
      location: "Vietnam",
      summary:
        "Deployed face-recognition attendance solutions and built revenue forecasting workflows for F&B operations.",
      highlights: [
        "Deployed camera-based face-recognition attendance with around 97% accuracy.",
        "Built branch-level forecasting workflows for F&B revenue planning.",
        "Processed and integrated multi-source enterprise datasets."
      ],
      relatedLinks: [
        { label: "Project: Face Attendance System", href: "#project-face-recognition-attendance-system" },
        { label: "Project: Revenue Prediction", href: "#project-revenue-prediction" }
      ]
    },
    {
      id: "exp-hcmut-calab",
      period: "2021.01 - 2022.06",
      position: "Research Intern",
      organization: "Control and Automation Laboratory, HCMUT",
      organizationLink: "https://hcmut.edu.vn/en",
      location: "Ho Chi Minh City, Vietnam",
      summary:
        "Designed an automated chicken classification system by collecting farm image data, developing a classification model, and designing mechanical, electrical, and control components for the system.",
      highlights: [
        "Built image collection and model training workflow for chicken classification.",
        "Integrated computer vision with mechanical, electrical, and control components.",
        // "Validated end-to-end prototype performance in lab conditions."
      ],
      relatedLinks: [
        { label: "Project: Automated Chicken Classification", href: "#project-automated-chicken-classification-system" }
      ]
    }
  ],
  skills: [
    {
      title: "AI Research",
      description:
        "Vision-language models, GUI grounding, computer-use agents, deep learning, object detection, and face recognition."
    },
    {
      title: "Data Science",
      description:
        "Time-series forecasting, feature engineering, business analytics, data cleaning, and pipeline automation."
    },
    {
      title: "Programming",
      description:
        "Python, C/C++, MATLAB/Simulink, PyTorch, scikit-learn, OpenCV, YOLO, FastAPI, Pandas, NumPy, PySpark, Selenium."
    },
    {
      title: "Tools",
      description:
        "MongoDB, Git, Jupyter Notebook, Google Colab, SolidWorks, AutoCAD, and Proteus."
    },
    {
      title: "Languages",
      description:
        "Vietnamese (native), English (intermediate, TOEIC 650/990, New TEPS 350/600), Korean (basic, beginner)."
    },
    {
      title: "Certifications",
      description:
        "Coursera ML/DL Specializations, NVIDIA Jetson Nano AI courses, freeCodeCamp Python programs."
    }
  ],
  education: [
    {
      degree: "Master of Science in Artificial Intelligence and Robotics",
      school: "Sejong University, Seoul, South Korea",
      period: "2024 - 2026",
      advisor: "Associate Professor Cheol Jeong",
      // details: "Department of Artificial Intelligence and Robotics",
      thesis: "Confidence-Guided Adaptive Refinement Technique for GUI Grounding",
      gpa: "4.3 / 4.5"
    },
    {
      degree: "Bachelor of Engineering in Mechatronics Engineering",
      school: "Vietnam National University – Ho Chi Minh University of Technology, Ho Chi Minh City, Vietnam",
      period: "2017 - 2023",
      details: "The Excellent Engineer Training Program (PFIEV)",
      advisor: "Ph.D. Pham Cong Bang",
      thesis: "Analysis and Design of an Automated Chicken Classification System",
      gpa: "8.13 / 10"
    }
  ],
  references: {
    // subtitle: "Professional references available for academic and industry roles.",
    items: [
      {
        name: "Dr. Cheol Jeong",
        title: "Associate Professor",
        department: "Department of Artificial Intelligence and Robotics",
        organization: "Sejong University",
        location: "Seoul, Korea",
        phone: "+82 10 6248 7972",
        email: "cjeong72@gmail.com"
      },
      {
        name: "Dr. Pham Cong Bang",
        title: "Ph.D., Vice Dean of Mechanical Engineering",
        department: "Department of Mechanical Engineering",
        organization: "Ho Chi Minh University of Technology",
        location: "VNUHCM, Vietnam",
        phone: "+84 903 686 334",
        email: "pcbang@hcmut.edu.vn"
      },
      {
        name: "Nam Phuoc Truong",
        title: "CEO - Director",
        department: "VTCODE Technology and Science Applications Limited Company",
        organization: "VTCODE",
        location: "Binh Thanh District, Ho Chi Minh City, Vietnam",
        phone: "+84 986 198 731"
      }
    ]
  },
  cv: {
    // subtitle: "The uploaded CV is embedded below so recruiters can review it directly on this page.",
    summary: [
      { label: "Full name", value: "Xuan Hoang Le" },
      { label: "Location", value: "Seoul, South Korea" },
      { label: "Email", value: "lexuanhoang120@gmail.com" },
      { label: "Availability", value: "From July 2026" }
    ],
    actions: [
      { label: "Open Curriculum Vitae (CV)", href: "docs/HOANG_CV.pdf", external: true, primary: true },
      { label: "Open Motivation Letter", href: "docs/HOANG_Motivation_Letter.pdf", external: true }
    ]
  },
  contact: {
    subtitle:
      "I am open to research and applied AI roles in computer vision, agent systems, and data science.",
    actions: [
      { label: "Send Email", href: "mailto:lexuanhoang120@gmail.com", primary: true },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/xuan-hoang1999/", external: true },
      { label: "GitHub", href: "https://github.com/lexuanhoang120", external: true }
    ],
    footerText: "Xuan Hoang Le · Portfolio · Updated May 2026"
  }
};
