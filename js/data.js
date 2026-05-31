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
    heading: "I build AI systems that work in the real world.",
    description:
      "M.S. candidate in AI & Robotics at Sejong University, researching vision–language models and GUI grounding at the VLI Lab. Previously built forecasting, computer vision, and analytics systems at FPT and VTCODE that process 96M+ records, serve 450+ restaurants, and classify with 96% accuracy.",
    highlights: [
      { value: "95.9%", label: "Chicken classification accuracy" },
      { value: "80.9%", label: "ScreenSpot-Pro grounding (Top-1)" },
      { value: "< 6% MAPE", label: "Electricity forecasting (13 provinces)" }
    ],
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
    { label: "Current role", value: "M.S. Candidate & Research Assistant, VLI Lab, Sejong University" },
    { label: "Research", value: "Vision–Language Models, GUI Grounding, Computer-Use Agents" },
    { label: "GPA", value: "4.29 / 4.5 (M.S.) · 8.13 / 10 (B.E.)" },
    { label: "Availability", value: "Open to full-time roles from July 2026" },
    { label: "Languages", value: "Vietnamese (Native) · English (Advanced) · Korean (Basic)" }
  ],
  about: {
    subtitle:
      "I bridge research and engineering. I've published first-author papers on GUI grounding, built forecasting systems serving 450+ restaurants and 13 provinces, deployed face recognition in production, and designed a complete mechatronic system from scratch. I care about building things that actually work.",
    cards: [
      {
        title: "Research",
        description: "First-author publications on training-free GUI grounding. Prototype fast, validate rigorously, write for reproducibility."
      },
      {
        title: "Engineering",
        description: "Full pipelines from data to deployment: preprocessing, modeling, evaluation, API serving, and monitoring."
      },
      {
        title: "Impact",
        description: "90% feature reduction. 13% WAPE improvement. 19% better than client baseline. I measure what matters."
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
        description: "Training-free adaptive refinement for GUI grounding. Leverages attention maps from intermediate VLM layers to guide when to stop and how to crop, improving ScreenSpot-Pro accuracy from 73.0% to 80.9% — achieving top-1 leaderboard performance competitive with much larger models.",
        metric: "First Author · Under Review at IEEE Access · Top-1 ScreenSpot-Pro",
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
          "VLM-based CCTV classification using frame sampling and prompt inference on Qwen3-VL and InternVL3. Achieved 94.44% accuracy on test set and 83.53% on a larger 425-video CCTV-only dataset through optimized prompt engineering with surveillance-specific terminology.",
        metric: "94.44% accuracy",
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
          "Vision-guided beamforming pipeline using YOLOv11 for vehicle detection and ByteTrack for tracking, predicting future positions to overcome perception-to-actuation latency. Evaluated on DeepSense 6G across 3 driving scenarios, improving average data rate by 20–29% over baseline.",
        metric: "+20–29% data rate improvement · DeepSense 6G",
        tags: ["Academic", "Computer Vision", "Object Tracking"],
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
          "Processed 96M+ raw web logs into 20 labeled user actions across 32.5M sessions, mapped 5-phase customer journeys, segmented users into 3 behavioral groups, and predicted exit intent with 62.9% precision (+27.7 pp over baseline).",
        metric: "96M+ logs · 32.5M sessions · 62.9% exit precision",
        tags: ["Industry", "Web Analytics", "Behavior Modeling", "Customer Journey"],
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
          "Privacy-aware email-to-LinkedIn enrichment pipeline. Processed 50K emails through authorized profile lookup, matching 4,070 LinkedIn accounts (8.1% rate) including 2,041 profiles with work-experience data and 1,560 with education data.",
        metric: "50K emails · 4,070 matched · 8.1% match rate",
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
          tags: ["Industry", "Web Scraping", "Data Pipeline"],
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
          "Daily guest-count forecasting for 440+ Golden Gate restaurants using XGBoost with restaurant clustering into Global/Local model groups. Reduced features by ~90%, training time by ~70%, and lowered WAPE from 25.3% to 22.0% — a 13% improvement over the previous model.",
        metric: "WAPE 25.3% → 22.0% · 450+ restaurants · 90% fewer features",
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
          "Daily revenue forecasting for 17 ICOOL restaurant locations using Facebook Prophet with logistic growth, custom seasonality, lunar calendar features, and per-store cap/floor constraints. Projected ~360 tỷ VND total revenue across the 10-month forecast period.",
        metric: "17 stores · 10-month horizon · Prophet with custom regressors",
        tags: ["Industry", "Forecasting", "Business Analytics", "Prophet"],
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
          "Monthly electricity forecasting for 13 Vietnamese provinces using STL decomposition into trend (linear), seasonal (statistical), and residual (ARIMA) components. Achieved MAPE < 6% across all provinces and < 4% in six, directly supporting energy planning for CPC.",
        metric: "< 6% MAPE all provinces · < 4% MAPE in 6/13 · 18-month validation",
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
          "Selenium-based web scraper collecting song lyrics and genre metadata from ZingMP3 and NhacCuaTui. Crawled ~19K songs across batched runs using right-click context menu navigation to access hidden song info panels, with 779K successful extractions.",
        metric: "~19K songs · 779K extractions · ZingMP3 + NhacCuaTui",
        tags: ["Industry", "Web Scraping", "Selenium", "Data Processing"],
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
          "Full-stack face recognition management platform — React frontend + FastAPI backend + MongoDB. Built REST APIs for CRUD face lists, MTCNN face detection, VGGFace2 embedding, and real-time recognition dashboard. Embedding computation offloaded to async background tasks.",
        metric: "FastAPI · MongoDB · MTCNN · VGGFace2",
        tags: ["Industry", "Face Recognition", "FastAPI"],
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
          "Real-time face recognition attendance system using SSD detection, centroid tracking, and VGGFace2/ResNet50 embeddings with cosine similarity. Automated check-in/checkout with Vietnamese TTS voice greeting via RTSP camera, logging to SQLite.",
        metric: "~97% recognition accuracy · Real-time · VGGFace2",
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
          "End-to-end automated chicken gender sorting system: self-collected dataset, custom CNN classifier (4 conv + 2 dense), multi-frame majority voting (95.9% accuracy), plus mechanical singulation design and ATMega 2560 control.",
        metric: "95.9% accuracy · CNN · Full mechatronic system · Kaggle",
        tags: ["Academic", "CNN", "Automation", "Mechatronics"],
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
        "First-author research on training-free GUI grounding methods. Building datasets and models for computer-use agents.",
      highlights: [
        "Proposed DART — a training-free adaptive refinement method for GUI grounding. Improved ScreenSpot-Pro accuracy from 73.0% to 80.9% (Top-1 leaderboard), competitive with much larger models. First author, under review at IEEE Access.",
        "Building a dataset for computer-use agents (first author, targeting AAAI 2027).",
        "Contributed to Training-Free ROI Selection via Semantic Vector Fields (second author, under review at ECCV 2026).",
        "Implemented VLM-based CCTV filtering with Qwen3-VL and InternVL3, achieving 94.44% accuracy through optimized prompt engineering.",
        "Developed vision-guided beamforming pipeline, improving data rate by 20–29% on DeepSense 6G."
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
        "Delivered forecasting, analytics, and data-enrichment projects across time-series, behavior modeling, and external data — serving clients including CPC (electricity) and Golden Gate (restaurants).",
      highlights: [
        "Designed electricity-demand forecasting for 13 provinces using STL decomposition + linear/statistical/ARIMA models. Achieved MAPE < 6% (all provinces) and < 4% (6/13), directly supporting CPC energy planning.",
        "Improved daily guest-count forecasting for 440+ Golden Gate restaurants. Reduced features by ~90% and training time by ~70%. Lowered WAPE from 25.3% to 22.0% — a 13% improvement over previous model.",
        "Processed 96M+ FPT Shop web logs into 20 labeled actions across 32.5M sessions. Mapped 5-phase customer journeys and 3 behavioral segments. Predicted exit intent with 62.9% precision (+27.7 pp over baseline).",
        "Automated web scraping across LinkedIn, Google Maps, and Chotot — extracted 1M+ records and 200K+ unique contacts for customer analytics."
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
        "Built and deployed computer vision and forecasting systems for enterprise clients in F&B and data services.",
      highlights: [
        "Built and deployed real-time face-recognition attendance system (SSD + VGGFace2 + centroid tracking, ~97% accuracy). Extended to full-stack web platform with FastAPI + MongoDB + React.",
        "Built daily revenue forecasting for a 17-restaurant chain using Facebook Prophet with custom seasonality, lunar calendar features, and per-store logistic growth constraints.",
        "Built ETL pipelines integrating multi-source company data with external web-scraped data for board-level analytics."
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
        email: "cjeong72@gmail.com"
      },
      {
        name: "Dr. Pham Cong Bang",
        title: "Ph.D., Vice Dean of Mechanical Engineering",
        department: "Department of Mechanical Engineering",
        organization: "Ho Chi Minh University of Technology",
        location: "VNUHCM, Vietnam",
        email: "pcbang@hcmut.edu.vn"
      },
      {
        name: "Nam Phuoc Truong",
        title: "CEO - Director",
        department: "VTCODE Technology and Science Applications Limited Company",
        organization: "VTCODE",
        location: "Binh Thanh District, Ho Chi Minh City, Vietnam"
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
