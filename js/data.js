const portfolioDataAll = {
  en: {
    siteTitle: "Le Xuan Hoang | Applied AI Researcher & Data Scientist",
    metaDescription:
      "Portfolio of Le Xuan Hoang, an AI researcher and data scientist in Seoul focused on vision-language models, GUI grounding, computer-use agents, and applied forecasting systems.",
    ui: {
      languageSwitcherLabel: "Language switcher",
      languageNames: {
        en: "English",
        ko: "Korean",
        vi: "Vietnamese"
      },
      profileImageAlt: "Portrait of Le Xuan Hoang",
      cvIframeTitle: "Le Xuan Hoang CV PDF",
      sectionTitles: {
        projects: "Projects",
        experience: "Experience",
        education: "Education",
        cv: "CV",
        skills: "Skills",
        references: "References",
        contact: "Let's Connect"
      },
      labels: {
        advisor: "Advisor",
        thesis: "Thesis title",
        gpa: "GPA",
        phone: "Phone",
        email: "Email"
      },
      cvFallback: {
        before: "If the preview does not load, ",
        link: "open the CV PDF here",
        after: "."
      }
    },
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
        "M.S. candidate in AI & Robotics at Sejong University, researching vision-language models and GUI grounding at the VLI Lab. Earlier industry work at FPT and VTCODE focused on practical forecasting, computer vision, and data analytics systems.",
      actions: [
        { label: "Email Me", href: "mailto:lexuanhoang120@gmail.com", primary: true },
        { label: "Curriculum Vitae (CV)", href: "docs/HOANG_CV.pdf", external: true },
        { label: "Motivation Letter", href: "docs/HOANG_Motivation_Letter.pdf", external: true },
        { label: "CV (한국어)", href: "docs/Le Xuan Hoang - CV - KR.pdf", external: true },
        { label: "Motivation Letter (한국어)", href: "docs/HOANG_Motivation_Letter_KR.pdf", external: true },
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
    projects: {
      subtitle: "",
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
          tags: ["Academic", "Prior Submission", "First Author", "CVPR 2026"],
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
          title: "Web Behavior Analytics",
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
          title: "LinkedIn Email Enrichment",
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
            "Daily revenue forecasting for 17 ICOOL restaurant locations using Facebook Prophet with logistic growth, custom seasonality, lunar calendar features, and per-store cap/floor constraints. Projected approximately VND 360 billion in total revenue across the 10-month forecast period.",
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
          title: "Lyrics and Genre Crawler",
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
          title: "Web Face Recognition Platform",
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
          { label: "Project: Web Behavior Analytics", href: "#project-log-web-fshop" },
          { label: "Project: LinkedIn Email Enrichment", href: "#project-map-linkedin-email" },
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
          "Integrated computer vision with mechanical, electrical, and control components."
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
          "Vietnamese (native), English (advanced, TOEIC 650/990, New TEPS 350/600), Korean (basic)."
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
      subtitle: "",
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
      subtitle: "",
      previewHref: "docs/HOANG_CV.pdf",
      summary: [
        { label: "Full name", value: "Le Xuan Hoang" },
        { label: "Location", value: "Seoul, South Korea" },
        { label: "Email", value: "lexuanhoang120@gmail.com" },
        { label: "Availability", value: "From July 2026" }
      ],
      actions: [
        { label: "Open Curriculum Vitae (CV)", href: "docs/HOANG_CV.pdf", external: true, primary: true },
        { label: "Open Motivation Letter", href: "docs/HOANG_Motivation_Letter.pdf", external: true },
        { label: "CV (한국어)", href: "docs/Le Xuan Hoang - CV - KR.pdf", external: true },
        { label: "Motivation Letter (한국어)", href: "docs/HOANG_Motivation_Letter_KR.pdf", external: true }
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
      footerText: "Le Xuan Hoang · Portfolio · Updated May 2026"
    }
  },

  ko: {
    siteTitle: "레 쑤언 호앙 | 응용 AI 연구원 및 데이터 사이언티스트",
    metaDescription:
      "서울에서 활동하는 AI 연구자 레 쑤언 호앙의 포트폴리오입니다. 비전-언어 모델, GUI 그라운딩, 컴퓨터 사용 에이전트, 실무형 예측 시스템을 연구하고 개발합니다.",
    ui: {
      languageSwitcherLabel: "언어 선택",
      languageNames: {
        en: "영어",
        ko: "한국어",
        vi: "베트남어"
      },
      profileImageAlt: "레 쑤언 호앙 프로필 사진",
      cvIframeTitle: "레 쑤언 호앙 이력서 PDF",
      sectionTitles: {
        projects: "프로젝트",
        experience: "경력",
        education: "학력",
        cv: "이력서",
        skills: "역량",
        references: "추천인",
        contact: "연락처"
      },
      labels: {
        advisor: "지도교수",
        thesis: "논문 제목",
        gpa: "GPA",
        phone: "전화",
        email: "이메일"
      },
      cvFallback: {
        before: "미리보기가 표시되지 않으면 ",
        link: "이력서 PDF를 여세요",
        after: "."
      }
    },
    navItems: [
      { label: "프로젝트", href: "#projects" },
      { label: "경력", href: "#experience" },
      { label: "학력", href: "#education" },
      { label: "추천인", href: "#references" }
    ],
    hero: {
      eyebrow: "AI 연구원 · 데이터 사이언티스트",
      heading: "현실 세계에서 작동하는 AI 시스템을 구축합니다.",
      description:
        "세종대학교 AI 및 로보틱스 석사과정으로 VLI Lab에서 비전-언어 모델과 GUI 그라운딩을 연구하고 있습니다. 이전에는 FPT와 VTCODE에서 예측, 컴퓨터 비전, 데이터 분석 중심의 실무형 AI 프로젝트를 수행했습니다.",
      actions: [
        { label: "이메일 보내기", href: "mailto:lexuanhoang120@gmail.com", primary: true },
        { label: "이력서 (한국어)", href: "docs/Le Xuan Hoang - CV - KR.pdf", external: true },
        { label: "자기소개서 (한국어)", href: "docs/HOANG_Motivation_Letter_KR.pdf", external: true },
        { label: "CV (English)", href: "docs/HOANG_CV.pdf", external: true },
        { label: "Motivation Letter (English)", href: "docs/HOANG_Motivation_Letter.pdf", external: true },
        { label: "GitHub", href: "https://github.com/lexuanhoang120", external: true },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/xuan-hoang1999/", external: true }
      ]
    },
    profile: [
      { label: "위치", value: "대한민국 서울" },
      { label: "현재 역할", value: "세종대학교 VLI Lab 석사과정 및 연구조교" },
      { label: "연구 분야", value: "비전-언어 모델, GUI 그라운딩, 컴퓨터 사용 에이전트" },
      { label: "학점", value: "4.29 / 4.5 (석사) · 8.13 / 10 (학사)" },
      { label: "취업 가능 시기", value: "2026년 7월부터 정규직 가능" },
      { label: "언어", value: "베트남어 (모국어) · 영어 (고급) · 한국어 (기초)" }
    ],
    projects: {
      subtitle: "",
      items: [
        {
          id: "project-cua-dataset",
          title: "컴퓨터 사용 에이전트를 위한 데이터셋",
          period: "2026.06 - 현재",
          sortKey: 202606,
          description: "컴퓨터 사용 에이전트의 그라운딩 및 상호작용 작업을 위한 데이터셋을 구축 및 큐레이션하고 있습니다.",
          metric: "제1저자 · 투고 목표: AAAI 2027",
          tags: ["학술", "준비 중", "제1저자", "AAAI 2027"],
          location: { label: "세종대학교 VLI Lab", href: "#exp-vli-lab" },
          links: [
            { label: "GitHub", href: "https://github.com/lexuanhoang120", external: true },
            { label: "문서", href: "docs/2026_06-cua-dataset-for-computer-use-agents.html#docs" }
          ]
        },
        {
          id: "project-dart",
          title: "DART: 컴퓨터 사용 에이전트의 GUI 그라운딩을 위한 밀도 인식 적응형 정제 기법",
          period: "2026.05",
          sortKey: 202605,
          description: "GUI 그라운딩을 위한 학습 없는 적응형 정제 기법. 중간 VLM 레이어의 어텐션 맵을 활용하여 중단 시점과 크롭 방법을 안내하며, ScreenSpot-Pro 정확도를 73.0%에서 80.9%로 향상시켜 훨씬 더 큰 모델들과 경쟁할 수 있는 Top-1 리더보드 성능을 달성했습니다.",
          metric: "제1저자 · IEEE Access 심사 중 · Top-1 ScreenSpot-Pro",
          tags: ["학술", "심사 중", "제1저자", "IEEE Access"],
          location: { label: "세종대학교 VLI Lab", href: "#exp-vli-lab" },
          links: [
            { label: "GitHub", href: "https://github.com/lexuanhoang120/Density-Aware-Adaptive-Refinement-Technique", external: true },
            { label: "문서", href: "docs/2026_05-dart-gui-grounding.html#docs" }
          ]
        },
        {
          id: "project-roi-selection",
          title: "GUI 그라운딩을 위한 의미론적 벡터 필드 기반 학습 없는 ROI 선택",
          period: "2026.04",
          sortKey: 202604,
          description: "정제 효율성을 개선하기 위한 의미론적 벡터 필드를 사용한 학습 없는 ROI 선택 전략.",
          metric: "제2저자 · ECCV 2026 투고",
          tags: ["학술", "심사 중", "제2저자", "ECCV 2026"],
          location: { label: "세종대학교 VLI Lab", href: "#exp-vli-lab" },
          links: [
            { label: "GitHub", href: "https://github.com/lexuanhoang120", external: true },
            { label: "문서", href: "docs/2026_04-training-free-roi-selection.html#docs" }
          ]
        },
        {
          id: "project-cgar",
          title: "CGAR: GUI 그라운딩을 위한 신뢰도 기반 적응형 정제",
          period: "2026.03",
          sortKey: 202603,
          description: "이전 방법론 반복으로서 GUI 그라운딩을 위한 신뢰도 기반 적응형 정제 접근법.",
          metric: "제1저자 · CVPR 2026 기투고",
          tags: ["학술", "이전 제출", "제1저자", "CVPR 2026"],
          location: { label: "세종대학교 VLI Lab", href: "#exp-vli-lab" },
          links: [
            { label: "GitHub", href: "https://github.com/lexuanhoang120/Confidence-Guided-Adaptive-Refinement", external: true },
            { label: "문서", href: "docs/2026_03-cgar-gui-grounding.html#docs" }
          ]
        },
        {
          id: "project-cctv-video-filtering",
          title: "VLM 기반 CCTV 비디오 필터링",
          period: "2025.12 - 2026.02",
          sortKey: 202512,
          description:
            "Qwen3-VL 및 InternVL3에서 프레임 샘플링과 프롬프트 추론을 사용한 VLM 기반 CCTV 분류. 감시 관련 용어를 활용한 최적화된 프롬프트 엔지니어링을 통해 테스트 세트에서 94.44%, 425개 비디오의 대규모 CCTV 전용 데이터셋에서 83.53%의 정확도를 달성했습니다.",
          metric: "94.44% 정확도",
          tags: ["산업", "VLM", "비디오 이해", "프롬프트 엔지니어링"],
          location: { label: "PIA Space (연구실 인턴십 과제)", href: "https://www.pia.space/", external: true },
          links: [
            { label: "GitHub", href: "https://github.com/lexuanhoang120/CCTV-Video-Filtering", external: true },
            { label: "문서", href: "docs/2025_12-cctv-video-filtering.html#docs" }
          ]
        },
        {
          id: "project-vision-based-communication",
          title: "비전 기반 통신",
          period: "2025.11",
          sortKey: 202511,
          description:
            "차량 감지를 위한 YOLOv11과 추적을 위한 ByteTrack을 사용하여 미래 위치를 예측함으로써 인지-작동 지연을 극복하는 비전 유도 빔포밍 파이프라인. DeepSense 6G에서 3가지 주행 시나리오로 평가하여 기준선 대비 평균 데이터 전송률을 20–29% 개선했습니다.",
          metric: "+20–29% 데이터 전송률 개선 · DeepSense 6G",
          tags: ["학술", "컴퓨터 비전", "객체 추적"],
          location: { label: "세종대학교 VLI Lab", href: "#exp-vli-lab" },
          links: [
            { label: "GitHub", href: "https://github.com/lexuanhoang120/Vision-based-Communication", external: true },
            { label: "문서", href: "docs/2025_11-vision-based-communication.html#docs" }
          ]
        },
        {
          id: "project-log-web-fshop",
          title: "웹 행동 분석",
          period: "2024.04",
          sortKey: 202404,
          description:
            "9,600만 건 이상의 원시 웹 로그를 3,250만 세션에 걸쳐 20개의 레이블링된 사용자 행동으로 처리하고, 5단계 고객 여정을 매핑했으며, 사용자를 3개의 행동 그룹으로 분류하고, 62.9%의 정밀도로 이탈 의도를 예측했습니다 (기준선 대비 +27.7pp).",
          metric: "9,600만+ 로그 · 3,250만 세션 · 62.9% 이탈 정밀도",
          tags: ["산업", "웹 분석", "행동 모델링", "고객 여정"],
          location: { label: "CADS - FPT Corporation", href: "#exp-fpt-cads" },
          links: [
            { label: "GitHub", href: "https://github.com/lexuanhoang120/log-web-fshop", external: true },
            { label: "문서", href: "docs/2024_04-log-web-fshop-analysis.html#docs" }
          ]
        },
        {
          id: "project-map-linkedin-email",
          title: "LinkedIn 이메일 보강",
          period: "2024.03",
          sortKey: 202403,
          description:
            "개인정보 보호를 고려한 이메일-to-LinkedIn 보강 파이프라인. 승인된 프로필 조회를 통해 5만 개의 이메일을 처리하여, 경력 데이터가 있는 2,041개 프로필과 학력 데이터가 있는 1,560개 프로필을 포함한 4,070개의 LinkedIn 계정을 매칭했습니다 (매칭률 8.1%).",
          metric: "5만 이메일 · 4,070개 매칭 · 8.1% 매칭률",
          tags: ["산업", "데이터 파이프라인", "웹 스크래핑"],
          location: { label: "CADS - FPT Corporation", href: "#exp-fpt-cads" },
          links: [
            { label: "GitHub", href: "https://github.com/lexuanhoang120/map-linkedin-email", external: true },
            { label: "문서", href: "docs/2024_03-map-linkedin-email.html#docs" }
          ]
        },
        {
          id: "project-crawling-ggmap",
          title: "Google Maps 비즈니스 스크래퍼",
          period: "2024.02",
          sortKey: 202402,
          description:
            "비즈니스 프로파일링 및 후속 분석을 위해 Google Maps 소스에서 위치 데이터 크롤링 파이프라인을 구축했습니다.",
          metric: "709K+ 행 크롤링, 183K+ 고유 전화번호 추출",
          tags: ["산업", "웹 스크래핑", "데이터 파이프라인"],
          location: { label: "CADS - FPT Corporation", href: "#exp-fpt-cads" },
          links: [
            { label: "GitHub", href: "https://github.com/lexuanhoang120/Google-Maps-Business-Scraper", external: true },
            { label: "문서", href: "docs/2024_02-crawling-ggmap.html#docs" }
          ]
        },
        {
          id: "project-restaurant-traffic-forecasting",
          title: "레스토랑 방문객 수 예측",
          period: "2024.01 - 2024.05",
          sortKey: 202401,
          description:
            "레스토랑을 Global/Local 모델 그룹으로 클러스터링하는 XGBoost를 사용하여 440개 이상의 Golden Gate 레스토랑에 대한 일일 방문객 수 예측. 피처를 약 90% 줄이고, 학습 시간을 약 70% 단축했으며, WAPE를 25.3%에서 22.0%로 낮추어 이전 모델 대비 13% 개선했습니다.",
          metric: "WAPE 25.3% → 22.0% · 450+ 레스토랑 · 90% 피처 감소",
          tags: ["산업", "예측", "피처 엔지니어링", "비즈니스 분석"],
          location: { label: "CADS - FPT Corporation", href: "#exp-fpt-cads" },
          links: [
            { label: "GitHub", href: "https://github.com/lexuanhoang120/Restaurant-Traffic-Forecasting", external: true },
            { label: "문서", href: "docs/2024_01-restaurant-traffic-forecasting.html#docs" }
          ]
        },
        {
          id: "project-revenue-prediction",
          title: "매출 예측",
          period: "2022.06 - 2022.10",
          sortKey: 202206,
          description:
            "로지스틱 성장, 사용자 정의 계절성, 음력 달력 기능, 매장별 상한/하한 제약이 있는 Facebook Prophet을 사용하여 17개의 ICOOL 레스토랑 지점에 대한 일일 매출 예측. 10개월 예측 기간 동안 총 약 3600억 VND의 매출을 예상했습니다.",
          metric: "17개 매장 · 10개월 예측 · 사용자 정의 regressor 포함 Prophet",
          tags: ["산업", "예측", "비즈니스 분석", "Prophet"],
          location: { label: "VTCODE Company", href: "#exp-vtcode" },
          links: [
            { label: "GitHub", href: "https://github.com/lexuanhoang120/Revenue_Prediction", external: true },
            { label: "문서", href: "docs/2023_06-revenue-prediction.html#docs" }
          ]
        },
        {
          id: "project-electricity-consumption-forecasting",
          title: "전력 소비 예측",
          period: "2023.05 - 2023.10",
          sortKey: 202305,
          description:
            "STL 분해를 추세(선형), 계절성(통계적), 잔차(ARIMA) 구성 요소로 사용하여 베트남 13개 성의 월별 전력 소비 예측. 모든 성에서 MAPE < 6%, 6개 성에서 < 4%를 달성하여 CPC의 에너지 계획을 직접 지원했습니다.",
          metric: "모든 성 MAPE < 6% · 6/13개 성 MAPE < 4% · 18개월 검증",
          tags: ["산업", "시계열", "ARIMA", "예측"],
          location: { label: "CADS - FPT Corporation", href: "#exp-fpt-cads" },
          links: [
            { label: "GitHub", href: "https://github.com/lexuanhoang120/Electricity-Consumption-Forecasting", external: true },
            { label: "문서", href: "docs/2023_05-electricity-consumption-forecasting.html#docs" }
          ]
        },
        {
          id: "project-crawl-lyrics-category",
          title: "가사 카테고리 크롤링",
          period: "2022.08",
          sortKey: 202208,
          description:
            "ZingMP3와 NhacCuaTui에서 노래 가사와 장르 메타데이터를 수집하는 Selenium 기반 웹 스크래퍼. 숨겨진 노래 정보 패널에 접근하기 위해 우클릭 컨텍스트 메뉴 탐색을 사용하여 배치 실행으로 약 19,000곡을 크롤링했으며, 779K건의 성공적인 추출을 달성했습니다.",
          metric: "~19K 곡 · 779K 추출 · ZingMP3 + NhacCuaTui",
          tags: ["산업", "웹 스크래핑", "Selenium", "데이터 처리"],
          location: { label: "VTCODE Company", href: "#exp-vtcode" },
          links: [
            { label: "GitHub", href: "https://github.com/lexuanhoang120/Crawl_Lyrics_Category", external: true },
            { label: "문서", href: "docs/2022_08-crawl-lyrics-category.html#docs" }
          ]
        },
        {
          id: "project-web-face-recognition",
          title: "웹 얼굴 인식",
          period: "2022.10",
          sortKey: 202210,
          description:
            "풀스택 얼굴 인식 관리 플랫폼 — React 프론트엔드 + FastAPI 백엔드 + MongoDB. 얼굴 목록 CRUD, MTCNN 얼굴 감지, VGGFace2 임베딩, 실시간 인식 대시보드를 위한 REST API를 구축했습니다. 임베딩 계산은 비동기 백그라운드 작업으로 오프로드했습니다.",
          metric: "FastAPI · MongoDB · MTCNN · VGGFace2",
          tags: ["산업", "얼굴 인식", "FastAPI"],
          location: { label: "VTCODE Company", href: "#exp-vtcode" },
          links: [
            { label: "GitHub", href: "https://github.com/lexuanhoang120/Web_Face_Recognition", external: true },
            { label: "문서", href: "docs/2022_07-web-face-recognition.html#docs" }
          ]
        },
        {
          id: "project-face-recognition-attendance-system",
          title: "얼굴 인식 출석 시스템",
          period: "2022.06 - 2023.03",
          sortKey: 202206,
          description:
            "SSD 감지, 중심점 추적, 코사인 유사도를 사용한 VGGFace2/ResNet50 임베딩을 활용한 실시간 얼굴 인식 출석 시스템. RTSP 카메라를 통한 베트남어 TTS 음성 안내와 함께 자동 체크인/체크아웃, SQLite에 로깅.",
          metric: "~97% 인식 정확도 · 실시간 · VGGFace2",
          tags: ["산업", "얼굴 인식", "컴퓨터 비전", "배포"],
          location: { label: "VTCODE Company", href: "#exp-vtcode" },
          links: [
            { label: "GitHub", href: "https://github.com/lexuanhoang120/Face_Recognition", external: true },
            { label: "문서", href: "docs/2022_06-face-recognition-attendance.html#docs" }
          ]
        },
        {
          id: "project-automated-chicken-classification-system",
          title: "자동 닭 분류 시스템",
          period: "2021.01 - 2022.06",
          sortKey: 202101,
          description:
            "엔드투엔드 자동 닭 성별 분류 시스템: 자체 수집 데이터셋, 맞춤형 CNN 분류기 (4 conv + 2 dense), 다중 프레임 다수결 투표 (95.9% 정확도), 기계식 정렬 설계 및 ATMega 2560 제어.",
          metric: "95.9% 정확도 · CNN · 완전 메카트로닉 시스템 · Kaggle",
          tags: ["학술", "CNN", "자동화", "메카트로닉스"],
          location: { label: "HCMUT 제어 및 자동화 연구실", href: "#exp-hcmut-calab" },
          links: [
            { label: "GitHub", href: "https://github.com/lexuanhoang120/Thesis-Design-a-system-classifying-chicken-gender", external: true },
            { label: "문서", href: "docs/2021_01-automated-chicken-classification.html#docs" }
          ]
        }
      ]
    },
    experience: [
      {
        id: "exp-vli-lab",
        period: "2024.09 - 현재",
        position: "연구조교",
        organization: "비전 언어 지능 연구실 (VLI Lab), 세종대학교",
        organizationLink: "https://sites.google.com/view/vlilab",
        location: "대한민국 서울",
        summary:
          "학습 없는 GUI 그라운딩 방법에 대한 제1저자 연구. 컴퓨터 사용 에이전트를 위한 데이터셋 및 모델 구축.",
        highlights: [
          "DART 제안 — GUI 그라운딩을 위한 학습 없는 적응형 정제 방법. ScreenSpot-Pro 정확도를 73.0%에서 80.9%로 향상 (Top-1 리더보드), 더 큰 모델들과 경쟁. 제1저자, IEEE Access 심사 중.",
          "컴퓨터 사용 에이전트를 위한 데이터셋 구축 (제1저자, AAAI 2027 목표).",
          "의미론적 벡터 필드를 통한 학습 없는 ROI 선택 연구에 기여 (제2저자, ECCV 2026 심사 중).",
          "Qwen3-VL 및 InternVL3을 사용한 VLM 기반 CCTV 필터링 구현, 최적화된 프롬프트 엔지니어링으로 94.44% 정확도 달성.",
          "비전 유도 빔포밍 파이프라인 개발, DeepSense 6G에서 데이터 전송률 20–29% 개선."
        ],
        relatedLinks: [
          { label: "프로젝트: CCTV 비디오 필터링", href: "#project-cctv-video-filtering" },
          { label: "프로젝트: 비전 기반 통신", href: "#project-vision-based-communication" },
          { label: "프로젝트: DART", href: "#project-dart" },
          { label: "프로젝트: ROI 선택", href: "#project-roi-selection" }
        ]
      },
      {
        id: "exp-fpt-cads",
        period: "2023.05 - 2024.08",
        position: "데이터 사이언티스트",
        organization: "응용 데이터 과학 센터 (CADS), FPT Corporation",
        organizationLink: "https://fpt.com/en/",
        location: "베트남",
        summary:
          "CPC(전력) 및 Golden Gate(레스토랑)를 포함한 고객사를 위해 시계열, 행동 모델링, 외부 데이터 전반에 걸친 예측, 분석 및 데이터 보강 프로젝트를 수행했습니다.",
        highlights: [
          "STL 분해 + 선형/통계/ARIMA 모델을 사용하여 13개 성의 전력 수요 예측 설계. MAPE < 6% (모든 성) 및 < 4% (6/13개 성) 달성, CPC 에너지 계획 직접 지원.",
          "440개 이상의 Golden Gate 레스토랑에 대한 일일 방문객 수 예측 개선. 피처 약 90% 감소, 학습 시간 약 70% 단축. WAPE 25.3%에서 22.0%로 개선 — 이전 모델 대비 13% 향상.",
          "9,600만 건 이상의 FPT Shop 웹 로그를 3,250만 세션에 걸쳐 20개의 레이블링된 행동으로 처리. 5단계 고객 여정 및 3개 행동 세그먼트 매핑. 62.9% 정밀도로 이탈 의도 예측 (기준선 대비 +27.7pp).",
          "LinkedIn, Google Maps, Chotot 전반의 웹 스크래핑 자동화 — 고객 분석을 위해 100만 건 이상의 레코드와 20만 개 이상의 고유 연락처 추출."
        ],
        relatedLinks: [
          { label: "프로젝트: 전력 소비 예측", href: "#project-electricity-consumption-forecasting" },
          { label: "프로젝트: 레스토랑 방문객 수 예측", href: "#project-restaurant-traffic-forecasting" },
          { label: "프로젝트: 웹 행동 분석", href: "#project-log-web-fshop" },
          { label: "프로젝트: LinkedIn 이메일 보강", href: "#project-map-linkedin-email" },
          { label: "프로젝트: Google Maps 비즈니스 스크래퍼", href: "#project-crawling-ggmap" }
        ]
      },
      {
        id: "exp-vtcode",
        period: "2022.06 - 2023.03",
        position: "데이터 사이언티스트",
        organization: "데이터 부서, VTCODE Company",
        organizationLink: "https://www.vtcode.vn/",
        location: "베트남",
        summary:
          "F&B 및 데이터 서비스 분야의 기업 고객을 위한 컴퓨터 비전 및 예측 시스템을 구축 및 배포했습니다.",
        highlights: [
          "실시간 얼굴 인식 출석 시스템 구축 및 배포 (SSD + VGGFace2 + 중심점 추적, ~97% 정확도). FastAPI + MongoDB + React로 풀스택 웹 플랫폼으로 확장.",
          "Facebook Prophet을 사용하여 사용자 정의 계절성, 음력 달력 기능, 매장별 로지스틱 성장 제약 조건으로 17개 레스토랑 체인의 일일 매출 예측 구축.",
          "임원급 분석을 위해 다중 소스 회사 데이터를 외부 웹 스크래핑 데이터와 통합하는 ETL 파이프라인 구축."
        ],
        relatedLinks: [
          { label: "프로젝트: 얼굴 인식 출석 시스템", href: "#project-face-recognition-attendance-system" },
          { label: "프로젝트: 매출 예측", href: "#project-revenue-prediction" }
        ]
      },
      {
        id: "exp-hcmut-calab",
        period: "2021.01 - 2022.06",
        position: "연구 인턴",
        organization: "제어 및 자동화 연구실, HCMUT",
        organizationLink: "https://hcmut.edu.vn/en",
        location: "베트남 호치민시",
        summary:
          "농장 이미지 데이터를 수집하고, 분류 모델을 개발하며, 시스템을 위한 기계, 전기 및 제어 구성 요소를 설계하여 자동 닭 분류 시스템을 설계했습니다.",
        highlights: [
          "닭 분류를 위한 이미지 수집 및 모델 학습 워크플로우 구축.",
          "컴퓨터 비전과 기계, 전기 및 제어 구성 요소 통합."
        ],
        relatedLinks: [
          { label: "프로젝트: 자동 닭 분류 시스템", href: "#project-automated-chicken-classification-system" }
        ]
      }
    ],
    skills: [
      {
        title: "AI 연구",
        description:
          "비전-언어 모델, GUI 그라운딩, 컴퓨터 사용 에이전트, 딥러닝, 객체 탐지, 얼굴 인식."
      },
      {
        title: "데이터 사이언스",
        description:
          "시계열 예측, 피처 엔지니어링, 비즈니스 분석, 데이터 정제, 파이프라인 자동화."
      },
      {
        title: "프로그래밍",
        description:
          "Python, C/C++, MATLAB/Simulink, PyTorch, scikit-learn, OpenCV, YOLO, FastAPI, Pandas, NumPy, PySpark, Selenium."
      },
      {
        title: "도구",
        description:
          "MongoDB, Git, Jupyter Notebook, Google Colab, SolidWorks, AutoCAD, Proteus."
      },
      {
        title: "언어",
        description:
          "베트남어 (모국어), 영어 (상급, TOEIC 650/990, New TEPS 350/600), 한국어 (기초)."
      },
      {
        title: "자격증",
        description:
          "Coursera ML/DL Specializations, NVIDIA Jetson Nano AI 강좌, freeCodeCamp Python 프로그램."
      }
    ],
    education: [
      {
        degree: "인공지능 및 로보틱스 공학 석사",
        school: "세종대학교, 대한민국 서울",
        period: "2024 - 2026",
        advisor: "정철 부교수",
        thesis: "GUI 그라운딩을 위한 신뢰도 기반 적응형 정제 기법",
        gpa: "4.3 / 4.5"
      },
      {
        degree: "메카트로닉스 공학 학사",
        school: "베트남 국립대학교 – 호치민 공과대학교, 베트남 호치민시",
        period: "2017 - 2023",
        details: "우수 엔지니어 교육 프로그램 (PFIEV)",
        advisor: "Ph.D. Pham Cong Bang",
        thesis: "자동 닭 분류 시스템의 분석 및 설계",
        gpa: "8.13 / 10"
      }
    ],
    references: {
      subtitle: "",
      items: [
        {
          name: "Dr. Cheol Jeong",
          title: "부교수",
          department: "인공지능 및 로보틱스 학과",
          organization: "세종대학교",
          location: "대한민국 서울",
          email: "cjeong72@gmail.com"
        },
        {
          name: "Dr. Pham Cong Bang",
          title: "Ph.D., 기계공학부 부학장",
          department: "기계공학과",
          organization: "호치민 공과대학교",
          location: "VNUHCM, 베트남",
          email: "pcbang@hcmut.edu.vn"
        },
        {
          name: "Nam Phuoc Truong",
          title: "CEO - 디렉터",
          department: "VTCODE 기술 과학 응용 유한회사",
          organization: "VTCODE",
          location: "호치민시 빈탄군, 베트남"
        }
      ]
    },
    cv: {
      subtitle: "",
      previewHref: "docs/Le Xuan Hoang - CV - KR.pdf",
      summary: [
        { label: "성명", value: "레 쑤언 호앙 (Le Xuan Hoang)" },
        { label: "위치", value: "대한민국 서울" },
        { label: "이메일", value: "lexuanhoang120@gmail.com" },
        { label: "취업 가능 시기", value: "2026년 7월부터" }
      ],
      actions: [
        { label: "이력서 열기 (한국어)", href: "docs/Le Xuan Hoang - CV - KR.pdf", external: true, primary: true },
        { label: "자기소개서 열기 (한국어)", href: "docs/HOANG_Motivation_Letter_KR.pdf", external: true },
        { label: "Open CV (English)", href: "docs/HOANG_CV.pdf", external: true },
        { label: "Open Motivation Letter (English)", href: "docs/HOANG_Motivation_Letter.pdf", external: true }
      ]
    },
    contact: {
      subtitle:
        "컴퓨터 비전, 에이전트 시스템, 데이터 사이언스 분야의 연구 및 응용 AI 역할에 관심이 있습니다.",
      actions: [
        { label: "이메일 보내기", href: "mailto:lexuanhoang120@gmail.com", primary: true },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/xuan-hoang1999/", external: true },
        { label: "GitHub", href: "https://github.com/lexuanhoang120", external: true }
      ],
      footerText: "레 쑤언 호앙 · 포트폴리오 · 2026년 5월 업데이트"
    }
  },

  vi: {
    siteTitle: "Lê Xuân Hoằng | Nhà nghiên cứu AI ứng dụng & Nhà khoa học dữ liệu",
    metaDescription:
      "Portfolio của Lê Xuân Hoằng, nhà nghiên cứu AI và nhà khoa học dữ liệu tại Seoul, tập trung vào mô hình thị giác-ngôn ngữ, GUI grounding, tác tử sử dụng máy tính và hệ thống dự báo ứng dụng.",
    ui: {
      languageSwitcherLabel: "Chọn ngôn ngữ",
      languageNames: {
        en: "Tiếng Anh",
        ko: "Tiếng Hàn",
        vi: "Tiếng Việt"
      },
      profileImageAlt: "Ảnh chân dung Lê Xuân Hoằng",
      cvIframeTitle: "PDF CV của Lê Xuân Hoằng",
      sectionTitles: {
        projects: "Dự án",
        experience: "Kinh nghiệm",
        education: "Học vấn",
        cv: "CV",
        skills: "Kỹ năng",
        references: "Người tham khảo",
        contact: "Liên hệ"
      },
      labels: {
        advisor: "Người hướng dẫn",
        thesis: "Tên luận văn",
        gpa: "GPA",
        phone: "Điện thoại",
        email: "Email"
      },
      cvFallback: {
        before: "Nếu bản xem trước không hiển thị, ",
        link: "mở file CV PDF tại đây",
        after: "."
      }
    },
    navItems: [
      { label: "Dự án", href: "#projects" },
      { label: "Kinh nghiệm", href: "#experience" },
      { label: "Học vấn", href: "#education" },
      { label: "Tham khảo", href: "#references" }
    ],
    hero: {
      eyebrow: "Nhà nghiên cứu AI · Nhà khoa học dữ liệu",
      heading: "Tôi xây dựng các hệ thống AI hoạt động trong thế giới thực.",
      description:
        "Tôi là học viên Thạc sĩ ngành AI & Robotics tại Đại học Sejong, đang nghiên cứu mô hình thị giác-ngôn ngữ và GUI grounding tại VLI Lab. Trước đó, tôi làm các dự án ứng dụng về dự báo, thị giác máy tính và phân tích dữ liệu tại FPT và VTCODE.",
      actions: [
        { label: "Gửi Email", href: "mailto:lexuanhoang120@gmail.com", primary: true },
        { label: "Sơ yếu lý lịch (CV)", href: "docs/HOANG_CV.pdf", external: true },
        { label: "Thư động lực", href: "docs/HOANG_Motivation_Letter.pdf", external: true },
        { label: "CV (한국어)", href: "docs/Le Xuan Hoang - CV - KR.pdf", external: true },
        { label: "Thư động lực (한국어)", href: "docs/HOANG_Motivation_Letter_KR.pdf", external: true },
        { label: "GitHub", href: "https://github.com/lexuanhoang120", external: true },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/xuan-hoang1999/", external: true }
      ]
    },
    profile: [
      { label: "Vị trí", value: "Seoul, Hàn Quốc" },
      { label: "Vai trò hiện tại", value: "Ứng viên Thạc sĩ & Trợ lý Nghiên cứu, VLI Lab, Đại học Sejong" },
      { label: "Nghiên cứu", value: "Mô hình Ngôn ngữ-Thị giác, GUI Grounding, Tác tử Sử dụng Máy tính" },
      { label: "GPA", value: "4.29 / 4.5 (Th.S.) · 8.13 / 10 (Kỹ sư)" },
      { label: "Khả dụng", value: "Sẵn sàng làm việc toàn thời gian từ tháng 7/2026" },
      { label: "Ngôn ngữ", value: "Tiếng Việt (Bản ngữ) · Tiếng Anh (Nâng cao) · Tiếng Hàn (Cơ bản)" }
    ],
    projects: {
      subtitle: "",
      items: [
        {
          id: "project-cua-dataset",
          title: "Bộ dữ liệu cho tác tử sử dụng máy tính",
          period: "2026.06 - Hiện tại",
          sortKey: 202606,
          description: "Xây dựng và tuyển chọn bộ dữ liệu dành cho các tác vụ grounding và tương tác của tác tử sử dụng máy tính.",
          metric: "Tác giả chính · Mục tiêu: AAAI 2027",
          tags: ["Học thuật", "Đang chuẩn bị", "Tác giả chính", "AAAI 2027"],
          location: { label: "VLI Lab, Đại học Sejong", href: "#exp-vli-lab" },
          links: [
            { label: "GitHub", href: "https://github.com/lexuanhoang120", external: true },
            { label: "Tài liệu", href: "docs/2026_06-cua-dataset-for-computer-use-agents.html#docs" }
          ]
        },
        {
          id: "project-dart",
          title: "DART: Tinh chỉnh thích ứng nhận biết mật độ cho GUI grounding",
          period: "2026.05",
          sortKey: 202605,
          description: "Phương pháp tinh chỉnh thích ứng không cần huấn luyện cho GUI grounding. Tận dụng attention maps từ các lớp trung gian của VLM để hướng dẫn khi nào dừng và cách cắt, cải thiện độ chính xác ScreenSpot-Pro từ 73.0% lên 80.9% — đạt hiệu suất top-1 bảng xếp hạng, cạnh tranh với các mô hình lớn hơn nhiều.",
          metric: "Tác giả chính · Đang phản biện tại IEEE Access · Top-1 ScreenSpot-Pro",
          tags: ["Học thuật", "Đang phản biện", "Tác giả chính", "IEEE Access"],
          location: { label: "VLI Lab, Đại học Sejong", href: "#exp-vli-lab" },
          links: [
            { label: "GitHub", href: "https://github.com/lexuanhoang120/Density-Aware-Adaptive-Refinement-Technique", external: true },
            { label: "Tài liệu", href: "docs/2026_05-dart-gui-grounding.html#docs" }
          ]
        },
        {
          id: "project-roi-selection",
          title: "Chọn ROI không cần huấn luyện qua trường vector ngữ nghĩa",
          period: "2026.04",
          sortKey: 202604,
          description: "Chiến lược chọn ROI không cần huấn luyện sử dụng trường vector ngữ nghĩa để cải thiện hiệu quả tinh chỉnh.",
          metric: "Tác giả thứ hai · Đã gửi ECCV 2026",
          tags: ["Học thuật", "Đang phản biện", "Tác giả thứ hai", "ECCV 2026"],
          location: { label: "VLI Lab, Đại học Sejong", href: "#exp-vli-lab" },
          links: [
            { label: "GitHub", href: "https://github.com/lexuanhoang120", external: true },
            { label: "Tài liệu", href: "docs/2026_04-training-free-roi-selection.html#docs" }
          ]
        },
        {
          id: "project-cgar",
          title: "CGAR: Tinh chỉnh thích ứng dựa trên độ tin cậy cho GUI grounding",
          period: "2026.03",
          sortKey: 202603,
          description: "Phương pháp tinh chỉnh thích ứng dựa trên độ tin cậy cho GUI grounding như một phiên bản lặp phương pháp trước đó.",
          metric: "Tác giả chính · Đã từng gửi CVPR 2026",
          tags: ["Học thuật", "Đã nộp trước đây", "Tác giả chính", "CVPR 2026"],
          location: { label: "VLI Lab, Đại học Sejong", href: "#exp-vli-lab" },
          links: [
            { label: "GitHub", href: "https://github.com/lexuanhoang120/Confidence-Guided-Adaptive-Refinement", external: true },
            { label: "Tài liệu", href: "docs/2026_03-cgar-gui-grounding.html#docs" }
          ]
        },
        {
          id: "project-cctv-video-filtering",
          title: "Lọc video CCTV dựa trên VLM",
          period: "2025.12 - 2026.02",
          sortKey: 202512,
          description:
            "Phân loại CCTV dựa trên VLM sử dụng lấy mẫu khung hình và suy luận prompt trên Qwen3-VL và InternVL3. Đạt độ chính xác 94.44% trên tập kiểm tra và 83.53% trên tập dữ liệu CCTV-only lớn hơn 425 video thông qua kỹ thuật prompt tối ưu hóa với thuật ngữ giám sát chuyên biệt.",
          metric: "Độ chính xác 94.44%",
          tags: ["Công nghiệp", "VLM", "Hiểu video", "Prompt Engineering"],
          location: { label: "PIA Space (Dự án thực tập Lab)", href: "https://www.pia.space/", external: true },
          links: [
            { label: "GitHub", href: "https://github.com/lexuanhoang120/CCTV-Video-Filtering", external: true },
            { label: "Tài liệu", href: "docs/2025_12-cctv-video-filtering.html#docs" }
          ]
        },
        {
          id: "project-vision-based-communication",
          title: "Truyền thông dựa trên thị giác",
          period: "2025.11",
          sortKey: 202511,
          description:
            "Pipeline beamforming dẫn hướng bằng thị giác sử dụng YOLOv11 để phát hiện phương tiện và ByteTrack để theo dõi, dự đoán vị trí tương lai để khắc phục độ trễ nhận thức-hành động. Được đánh giá trên DeepSense 6G qua 3 kịch bản lái xe, cải thiện tốc độ dữ liệu trung bình 20–29% so với baseline.",
          metric: "+20–29% cải thiện tốc độ dữ liệu · DeepSense 6G",
          tags: ["Học thuật", "Thị giác máy tính", "Theo dõi đối tượng"],
          location: { label: "VLI Lab, Đại học Sejong", href: "#exp-vli-lab" },
          links: [
            { label: "GitHub", href: "https://github.com/lexuanhoang120/Vision-based-Communication", external: true },
            { label: "Tài liệu", href: "docs/2025_11-vision-based-communication.html#docs" }
          ]
        },
        {
          id: "project-log-web-fshop",
          title: "Phân tích hành vi web",
          period: "2024.04",
          sortKey: 202404,
          description:
            "Xử lý hơn 96 triệu log web thô thành 20 hành động người dùng được gán nhãn trên 32.5 triệu phiên, ánh xạ hành trình khách hàng 5 giai đoạn, phân đoạn người dùng thành 3 nhóm hành vi và dự đoán ý định thoát với độ chính xác 62.9% (+27.7 điểm phần trăm so với baseline).",
          metric: "96M+ log · 32.5M phiên · 62.9% độ chính xác thoát",
          tags: ["Công nghiệp", "Phân tích Web", "Mô hình hóa hành vi", "Hành trình khách hàng"],
          location: { label: "CADS - FPT Corporation", href: "#exp-fpt-cads" },
          links: [
            { label: "GitHub", href: "https://github.com/lexuanhoang120/log-web-fshop", external: true },
            { label: "Tài liệu", href: "docs/2024_04-log-web-fshop-analysis.html#docs" }
          ]
        },
        {
          id: "project-map-linkedin-email",
          title: "Làm giàu email bằng LinkedIn",
          period: "2024.03",
          sortKey: 202403,
          description:
            "Pipeline làm giàu email-to-LinkedIn bảo vệ quyền riêng tư. Xử lý 50K email qua tra cứu hồ sơ được ủy quyền, khớp 4,070 tài khoản LinkedIn (tỷ lệ 8.1%) bao gồm 2,041 hồ sơ có dữ liệu kinh nghiệm làm việc và 1,560 hồ sơ có dữ liệu học vấn.",
          metric: "50K email · 4,070 khớp · Tỷ lệ khớp 8.1%",
          tags: ["Công nghiệp", "Pipeline dữ liệu", "Web Scraping"],
          location: { label: "CADS - FPT Corporation", href: "#exp-fpt-cads" },
          links: [
            { label: "GitHub", href: "https://github.com/lexuanhoang120/map-linkedin-email", external: true },
            { label: "Tài liệu", href: "docs/2024_03-map-linkedin-email.html#docs" }
          ]
        },
        {
          id: "project-crawling-ggmap",
          title: "Google Maps Business Scraper",
          period: "2024.02",
          sortKey: 202402,
          description:
            "Xây dựng pipeline thu thập dữ liệu vị trí từ nguồn Google Maps cho hồ sơ doanh nghiệp và phân tích downstream.",
          metric: "709K+ dòng được thu thập, 183K+ số điện thoại duy nhất được trích xuất",
          tags: ["Công nghiệp", "Web Scraping", "Pipeline dữ liệu"],
          location: { label: "CADS - FPT Corporation", href: "#exp-fpt-cads" },
          links: [
            { label: "GitHub", href: "https://github.com/lexuanhoang120/Google-Maps-Business-Scraper", external: true },
            { label: "Tài liệu", href: "docs/2024_02-crawling-ggmap.html#docs" }
          ]
        },
        {
          id: "project-restaurant-traffic-forecasting",
          title: "Dự báo lượng khách nhà hàng",
          period: "2024.01 - 2024.05",
          sortKey: 202401,
          description:
            "Dự báo số lượng khách hàng ngày cho hơn 440 nhà hàng Golden Gate sử dụng XGBoost với phân cụm nhà hàng thành các nhóm mô hình Global/Local. Giảm ~90% đặc trưng, giảm ~70% thời gian huấn luyện và giảm WAPE từ 25.3% xuống 22.0% — cải thiện 13% so với mô hình trước đó.",
          metric: "WAPE 25.3% → 22.0% · 450+ nhà hàng · 90% ít đặc trưng hơn",
          tags: ["Công nghiệp", "Dự báo", "Kỹ thuật đặc trưng", "Phân tích kinh doanh"],
          location: { label: "CADS - FPT Corporation", href: "#exp-fpt-cads" },
          links: [
            { label: "GitHub", href: "https://github.com/lexuanhoang120/Restaurant-Traffic-Forecasting", external: true },
            { label: "Tài liệu", href: "docs/2024_01-restaurant-traffic-forecasting.html#docs" }
          ]
        },
        {
          id: "project-revenue-prediction",
          title: "Dự báo doanh thu",
          period: "2022.06 - 2022.10",
          sortKey: 202206,
          description:
            "Dự báo doanh thu hàng ngày cho 17 chi nhánh nhà hàng ICOOL sử dụng Facebook Prophet với tăng trưởng logistic, mùa vụ tùy chỉnh, đặc trưng lịch âm và ràng buộc trần/sàn theo từng cửa hàng. Dự báo tổng doanh thu khoảng 360 tỷ VND trong giai đoạn dự báo 10 tháng.",
          metric: "17 cửa hàng · Dự báo 10 tháng · Prophet với regressor tùy chỉnh",
          tags: ["Công nghiệp", "Dự báo", "Phân tích kinh doanh", "Prophet"],
          location: { label: "Công ty VTCODE", href: "#exp-vtcode" },
          links: [
            { label: "GitHub", href: "https://github.com/lexuanhoang120/Revenue_Prediction", external: true },
            { label: "Tài liệu", href: "docs/2023_06-revenue-prediction.html#docs" }
          ]
        },
        {
          id: "project-electricity-consumption-forecasting",
          title: "Dự báo tiêu thụ điện",
          period: "2023.05 - 2023.10",
          sortKey: 202305,
          description:
            "Dự báo điện năng hàng tháng cho 13 tỉnh thành Việt Nam sử dụng phân rã STL thành các thành phần xu hướng (tuyến tính), mùa vụ (thống kê) và phần dư (ARIMA). Đạt MAPE < 6% trên tất cả các tỉnh và < 4% ở sáu tỉnh, hỗ trợ trực tiếp cho quy hoạch năng lượng của CPC.",
          metric: "< 6% MAPE tất cả các tỉnh · < 4% MAPE ở 6/13 tỉnh · Xác thực 18 tháng",
          tags: ["Công nghiệp", "Chuỗi thời gian", "ARIMA", "Dự báo"],
          location: { label: "CADS - FPT Corporation", href: "#exp-fpt-cads" },
          links: [
            { label: "GitHub", href: "https://github.com/lexuanhoang120/Electricity-Consumption-Forecasting", external: true },
            { label: "Tài liệu", href: "docs/2023_05-electricity-consumption-forecasting.html#docs" }
          ]
        },
        {
          id: "project-crawl-lyrics-category",
          title: "Crawler lời bài hát và thể loại",
          period: "2022.08",
          sortKey: 202208,
          description:
            "Trình thu thập web dựa trên Selenium để lấy lời bài hát và metadata thể loại từ ZingMP3 và NhacCuaTui. Đã thu thập khoảng 19K bài hát qua các lần chạy theo lô, sử dụng điều hướng menu ngữ cảnh chuột phải để truy cập bảng thông tin ẩn của bài hát, với 779K lần trích xuất thành công.",
          metric: "~19K bài hát · 779K lần trích xuất · ZingMP3 + NhacCuaTui",
          tags: ["Công nghiệp", "Web Scraping", "Selenium", "Xử lý dữ liệu"],
          location: { label: "Công ty VTCODE", href: "#exp-vtcode" },
          links: [
            { label: "GitHub", href: "https://github.com/lexuanhoang120/Crawl_Lyrics_Category", external: true },
            { label: "Tài liệu", href: "docs/2022_08-crawl-lyrics-category.html#docs" }
          ]
        },
        {
          id: "project-web-face-recognition",
          title: "Nền tảng nhận diện khuôn mặt trên web",
          period: "2022.10",
          sortKey: 202210,
          description:
            "Nền tảng quản lý nhận diện khuôn mặt full-stack — Frontend React + Backend FastAPI + MongoDB. Xây dựng REST APIs cho CRUD danh sách khuôn mặt, phát hiện khuôn mặt MTCNN, embedding VGGFace2 và bảng điều khiển nhận diện thời gian thực. Tính toán embedding được chuyển sang tác vụ nền bất đồng bộ.",
          metric: "FastAPI · MongoDB · MTCNN · VGGFace2",
          tags: ["Công nghiệp", "Nhận diện khuôn mặt", "FastAPI"],
          location: { label: "Công ty VTCODE", href: "#exp-vtcode" },
          links: [
            { label: "GitHub", href: "https://github.com/lexuanhoang120/Web_Face_Recognition", external: true },
            { label: "Tài liệu", href: "docs/2022_07-web-face-recognition.html#docs" }
          ]
        },
        {
          id: "project-face-recognition-attendance-system",
          title: "Hệ thống điểm danh bằng nhận diện khuôn mặt",
          period: "2022.06 - 2023.03",
          sortKey: 202206,
          description:
            "Hệ thống điểm danh nhận diện khuôn mặt thời gian thực sử dụng phát hiện SSD, theo dõi centroid và embedding VGGFace2/ResNet50 với độ tương đồng cosine. Tự động check-in/check-out với chào giọng nói TTS tiếng Việt qua camera RTSP, ghi log vào SQLite.",
          metric: "~97% độ chính xác nhận diện · Thời gian thực · VGGFace2",
          tags: ["Công nghiệp", "Nhận diện khuôn mặt", "Thị giác máy tính", "Triển khai"],
          location: { label: "Công ty VTCODE", href: "#exp-vtcode" },
          links: [
            { label: "GitHub", href: "https://github.com/lexuanhoang120/Face_Recognition", external: true },
            { label: "Tài liệu", href: "docs/2022_06-face-recognition-attendance.html#docs" }
          ]
        },
        {
          id: "project-automated-chicken-classification-system",
          title: "Hệ thống phân loại gà tự động",
          period: "2021.01 - 2022.06",
          sortKey: 202101,
          description:
            "Hệ thống phân loại giới tính gà tự động end-to-end: bộ dữ liệu tự thu thập, bộ phân loại CNN tùy chỉnh (4 conv + 2 dense), bỏ phiếu đa số trên nhiều khung hình (độ chính xác 95.9%), cùng với thiết kế cơ khí tách gà và điều khiển ATMega 2560.",
          metric: "95.9% độ chính xác · CNN · Hệ thống cơ điện tử hoàn chỉnh · Kaggle",
          tags: ["Học thuật", "CNN", "Tự động hóa", "Cơ điện tử"],
          location: { label: "Phòng Lab Điều Khiển & Tự Động Hóa, HCMUT", href: "#exp-hcmut-calab" },
          links: [
            { label: "GitHub", href: "https://github.com/lexuanhoang120/Thesis-Design-a-system-classifying-chicken-gender", external: true },
            { label: "Tài liệu", href: "docs/2021_01-automated-chicken-classification.html#docs" }
          ]
        }
      ]
    },
    experience: [
      {
        id: "exp-vli-lab",
        period: "2024.09 - Hiện tại",
        position: "Trợ lý Nghiên cứu",
        organization: "Phòng Thí Nghiệm Trí Tuệ Ngôn Ngữ Thị Giác (VLI Lab), Đại học Sejong",
        organizationLink: "https://sites.google.com/view/vlilab",
        location: "Seoul, Hàn Quốc",
        summary:
          "Nghiên cứu tác giả chính về các phương pháp GUI grounding không cần huấn luyện. Xây dựng bộ dữ liệu và mô hình cho tác tử sử dụng máy tính.",
        highlights: [
          "Đề xuất DART — phương pháp tinh chỉnh thích ứng không cần huấn luyện cho GUI grounding. Cải thiện độ chính xác ScreenSpot-Pro từ 73.0% lên 80.9% (Top-1 bảng xếp hạng), cạnh tranh với các mô hình lớn hơn nhiều. Tác giả chính, đang phản biện tại IEEE Access.",
          "Xây dựng bộ dữ liệu cho tác tử sử dụng máy tính (tác giả chính, mục tiêu AAAI 2027).",
          "Đóng góp vào nghiên cứu Chọn ROI Không Cần Huấn Luyện qua Trường Vector Ngữ Nghĩa (tác giả thứ hai, đang phản biện tại ECCV 2026).",
          "Triển khai lọc CCTV dựa trên VLM với Qwen3-VL và InternVL3, đạt độ chính xác 94.44% thông qua prompt engineering tối ưu hóa.",
          "Phát triển pipeline beamforming dẫn hướng thị giác, cải thiện tốc độ dữ liệu 20–29% trên DeepSense 6G."
        ],
        relatedLinks: [
          { label: "Dự án: Lọc video CCTV", href: "#project-cctv-video-filtering" },
          { label: "Dự án: Truyền thông dựa trên thị giác", href: "#project-vision-based-communication" },
          { label: "Dự án: DART", href: "#project-dart" },
          { label: "Dự án: Chọn ROI", href: "#project-roi-selection" }
        ]
      },
      {
        id: "exp-fpt-cads",
        period: "2023.05 - 2024.08",
        position: "Nhà khoa học dữ liệu",
        organization: "Trung tâm Khoa học Dữ liệu Ứng dụng (CADS), FPT Corporation",
        organizationLink: "https://fpt.com/en/",
        location: "Việt Nam",
        summary:
          "Thực hiện các dự án dự báo, phân tích và làm giàu dữ liệu trên các lĩnh vực chuỗi thời gian, mô hình hóa hành vi và dữ liệu bên ngoài — phục vụ khách hàng bao gồm CPC (điện lực) và Golden Gate (nhà hàng).",
        highlights: [
          "Thiết kế dự báo nhu cầu điện cho 13 tỉnh thành sử dụng phân rã STL + mô hình tuyến tính/thống kê/ARIMA. Đạt MAPE < 6% (tất cả các tỉnh) và < 4% (6/13 tỉnh), hỗ trợ trực tiếp quy hoạch năng lượng CPC.",
          "Cải thiện dự báo lượng khách hàng ngày cho 440+ nhà hàng Golden Gate. Giảm ~90% đặc trưng và ~70% thời gian huấn luyện. Giảm WAPE từ 25.3% xuống 22.0% — cải thiện 13% so với mô hình trước.",
          "Xử lý 96M+ log web FPT Shop thành 20 hành động được gán nhãn trên 32.5M phiên. Ánh xạ hành trình khách hàng 5 giai đoạn và 3 phân khúc hành vi. Dự đoán ý định thoát với độ chính xác 62.9% (+27.7 điểm phần trăm so với baseline).",
          "Tự động hóa web scraping trên LinkedIn, Google Maps và Chotot — trích xuất hơn 1M bản ghi và hơn 200K liên hệ duy nhất cho phân tích khách hàng."
        ],
        relatedLinks: [
          { label: "Dự án: Dự báo tiêu thụ điện", href: "#project-electricity-consumption-forecasting" },
          { label: "Dự án: Dự báo lượng khách nhà hàng", href: "#project-restaurant-traffic-forecasting" },
          { label: "Dự án: Phân tích hành vi web", href: "#project-log-web-fshop" },
          { label: "Dự án: Làm giàu email bằng LinkedIn", href: "#project-map-linkedin-email" },
          { label: "Dự án: Google Maps Scraper", href: "#project-crawling-ggmap" }
        ]
      },
      {
        id: "exp-vtcode",
        period: "2022.06 - 2023.03",
        position: "Nhà khoa học dữ liệu",
        organization: "Phòng Dữ liệu, Công ty VTCODE",
        organizationLink: "https://www.vtcode.vn/",
        location: "Việt Nam",
        summary:
          "Xây dựng và triển khai các hệ thống thị giác máy tính và dự báo cho khách hàng doanh nghiệp trong lĩnh vực F&B và dịch vụ dữ liệu.",
        highlights: [
          "Xây dựng và triển khai hệ thống điểm danh nhận diện khuôn mặt thời gian thực (SSD + VGGFace2 + centroid tracking, ~97% độ chính xác). Mở rộng thành nền tảng web full-stack với FastAPI + MongoDB + React.",
          "Xây dựng dự báo doanh thu hàng ngày cho chuỗi 17 nhà hàng sử dụng Facebook Prophet với mùa vụ tùy chỉnh, đặc trưng lịch âm và ràng buộc tăng trưởng logistic theo từng cửa hàng.",
          "Xây dựng pipeline ETL tích hợp dữ liệu đa nguồn của công ty với dữ liệu web scraping bên ngoài cho phân tích cấp hội đồng quản trị."
        ],
        relatedLinks: [
          { label: "Dự án: Hệ thống điểm danh", href: "#project-face-recognition-attendance-system" },
          { label: "Dự án: Dự báo doanh thu", href: "#project-revenue-prediction" }
        ]
      },
      {
        id: "exp-hcmut-calab",
        period: "2021.01 - 2022.06",
        position: "Thực tập sinh nghiên cứu",
        organization: "Phòng thí nghiệm Điều khiển và Tự động hóa, HCMUT",
        organizationLink: "https://hcmut.edu.vn/en",
        location: "TP. Hồ Chí Minh, Việt Nam",
        summary:
          "Thiết kế hệ thống phân loại gà tự động bằng cách thu thập dữ liệu hình ảnh trang trại, phát triển mô hình phân loại và thiết kế các thành phần cơ khí, điện và điều khiển cho hệ thống.",
        highlights: [
          "Xây dựng quy trình thu thập hình ảnh và huấn luyện mô hình cho phân loại gà.",
          "Tích hợp thị giác máy tính với các thành phần cơ khí, điện và điều khiển."
        ],
        relatedLinks: [
          { label: "Dự án: Hệ thống phân loại gà", href: "#project-automated-chicken-classification-system" }
        ]
      }
    ],
    skills: [
      {
        title: "Nghiên cứu AI",
        description:
          "Mô hình ngôn ngữ-thị giác, GUI grounding, tác tử sử dụng máy tính, học sâu, phát hiện đối tượng, nhận diện khuôn mặt."
      },
      {
        title: "Khoa học dữ liệu",
        description:
          "Dự báo chuỗi thời gian, kỹ thuật đặc trưng, phân tích kinh doanh, làm sạch dữ liệu, tự động hóa pipeline."
      },
      {
        title: "Lập trình",
        description:
          "Python, C/C++, MATLAB/Simulink, PyTorch, scikit-learn, OpenCV, YOLO, FastAPI, Pandas, NumPy, PySpark, Selenium."
      },
      {
        title: "Công cụ",
        description:
          "MongoDB, Git, Jupyter Notebook, Google Colab, SolidWorks, AutoCAD, Proteus."
      },
      {
        title: "Ngôn ngữ",
        description:
          "Tiếng Việt (bản ngữ), Tiếng Anh (nâng cao, TOEIC 650/990, New TEPS 350/600), Tiếng Hàn (cơ bản)."
      },
      {
        title: "Chứng chỉ",
        description:
          "Coursera ML/DL Specializations, NVIDIA Jetson Nano AI courses, freeCodeCamp Python programs."
      }
    ],
    education: [
      {
        degree: "Thạc sĩ Khoa học ngành Trí tuệ nhân tạo và Robotics",
        school: "Đại học Sejong, Seoul, Hàn Quốc",
        period: "2024 - 2026",
        advisor: "Phó Giáo sư Cheol Jeong",
        thesis: "Kỹ Thuật Tinh Chỉnh Thích Ứng Dựa Trên Độ Tin Cậy cho GUI Grounding",
        gpa: "4.3 / 4.5"
      },
      {
        degree: "Kỹ Sư ngành Kỹ Thuật Cơ Điện Tử",
        school: "Đại học Quốc Gia Việt Nam – Đại học Bách Khoa TP. Hồ Chí Minh, TP. Hồ Chí Minh, Việt Nam",
        period: "2017 - 2023",
        details: "Chương trình Đào Tạo Kỹ Sư Xuất Sắc (PFIEV)",
        advisor: "TS. Phạm Công Bằng",
        thesis: "Phân tích và thiết kế hệ thống phân loại gà tự động",
        gpa: "8.13 / 10"
      }
    ],
    references: {
      subtitle: "",
      items: [
        {
          name: "TS. Cheol Jeong",
          title: "Phó Giáo sư",
          department: "Khoa Trí Tuệ Nhân Tạo và Robotics",
          organization: "Đại học Sejong",
          location: "Seoul, Hàn Quốc",
          email: "cjeong72@gmail.com"
        },
        {
          name: "TS. Phạm Công Bằng",
          title: "Tiến sĩ, Phó trưởng Khoa Cơ khí",
          department: "Khoa Cơ Khí",
          organization: "Đại học Bách Khoa TP. Hồ Chí Minh",
          location: "VNUHCM, Việt Nam",
          email: "pcbang@hcmut.edu.vn"
        },
        {
          name: "Trương Nam Phước",
          title: "CEO - Giám đốc",
          department: "Công ty TNHH Ứng dụng Khoa học Công nghệ VTCODE",
          organization: "VTCODE",
          location: "Quận Bình Thạnh, TP. Hồ Chí Minh, Việt Nam"
        }
      ]
    },
    cv: {
      subtitle: "",
      previewHref: "docs/HOANG_CV.pdf",
      summary: [
        { label: "Họ và tên", value: "Lê Xuân Hoằng" },
        { label: "Địa điểm", value: "Seoul, Hàn Quốc" },
        { label: "Email", value: "lexuanhoang120@gmail.com" },
        { label: "Khả dụng", value: "Từ tháng 7 năm 2026" }
      ],
      actions: [
        { label: "Mở Sơ yếu lý lịch (CV)", href: "docs/HOANG_CV.pdf", external: true, primary: true },
        { label: "Mở Thư Động Lực", href: "docs/HOANG_Motivation_Letter.pdf", external: true },
        { label: "CV (한국어)", href: "docs/Le Xuan Hoang - CV - KR.pdf", external: true },
        { label: "Thư động lực (한국어)", href: "docs/HOANG_Motivation_Letter_KR.pdf", external: true }
      ]
    },
    contact: {
      subtitle:
        "Tôi sẵn sàng cho các vai trò nghiên cứu và AI ứng dụng trong lĩnh vực thị giác máy tính, hệ thống tác tử và khoa học dữ liệu.",
      actions: [
        { label: "Gửi Email", href: "mailto:lexuanhoang120@gmail.com", primary: true },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/xuan-hoang1999/", external: true },
        { label: "GitHub", href: "https://github.com/lexuanhoang120", external: true }
      ],
      footerText: "Lê Xuân Hoằng · Portfolio · Cập nhật tháng 5/2026"
    }
  }
};

// portfolioData is set dynamically by main.js based on currentLang
