/* 内容入口：共享字段用字符串，需要翻译的字段用 { zh: "中文", en: "English" }。
 * 姓名、邮箱和素材路径共用；不要在姓名字段填写中文姓名。
 * 图片：assets/images/profile.jpg；简历：assets/files/resume.pdf；空链接自动隐藏。
 */
window.SITE_CONTENT = {
  "profile": {
    "name": "Bowen Jiang",
    "headline": {
      "zh": "机器人控制 · 灵巧操作 · 机器人学习",
      "en": "Robot Control · Dexterous Manipulation · Robot Learning"
    },
    "intro": {
      "zh": "关注机器人如何感知、学习并与真实世界交互。我的工作围绕运动控制、遥操作与数据管线展开，探索从算法到真机的完整路径。",
      "en": "I work on how robots perceive, learn, and interact with the physical world. My work spans motion control, teleoperation, and data pipelines, connecting algorithms with real robot systems."
    },
    "location": {
      "zh": "中国 · 上海",
      "en": "Shanghai, China"
    },
    "affiliation": {
      "zh": "AGI / MF",
      "en": "AGI / MF"
    },
    "photo": "assets/images/github-avatar.jpg",
    "photoAlt": { "zh": "Bowen Jiang 的 GitHub 头像", "en": "Bowen Jiang’s GitHub avatar" },
    "email": "bowen_2025@outlook.com",
    "linkedin": "https://www.linkedin.com/in/bowen-j-976283229/",
    "resume": "",
    "focus": [
      "Motion Control",
      "Dexterous Manipulation",
      "Teleoperation",
      "Robot Learning"
    ],
    "contactText": {
      "zh": "欢迎就机器人控制、灵巧操作和有趣的工程问题与我交流。",
      "en": "Feel free to reach out about robot control, dexterous manipulation, or interesting engineering problems."
    }
  },
  "experience": [
    {
      "company": {
        "zh": "AGI / MF",
        "en": "AGI / MF"
      },
      "detail": {
        "zh": "机器人与数据业务",
        "en": "Robotics & Data"
      },
      "role": {
        "zh": "运控算法工程师 / 数据算法工程师",
        "en": "Motion Control / Data Algorithm Engineer"
      },
      "period": {
        "zh": "2025.07 — 至今",
        "en": "2025.07 — Present"
      },
      "location": {
        "zh": "上海",
        "en": "Shanghai"
      },
      "bullets": {
        "zh": [
          "开发无本体异构真机对齐与重定向管线，支持多型机器人、夹爪和灵巧手。",
          "开发通用灵巧手 IK 求解器，支持位姿与向量模式。",
          "参与灵巧操作数采链路搭建，研发并维护机器人遥操作与重定向模块。"
        ],
        "en": [
          "Developed embodiment-free retargeting and robot alignment pipelines for multiple robot platforms, grippers, and dexterous hands.",
          "Developed a general-purpose dexterous-hand IK solver supporting pose-based and vector-based modes.",
          "Contributed to dexterous manipulation data collection pipelines; developed and maintained robot teleoperation and retargeting modules."
        ]
      },
      "tags": [
        "Retargeting",
        "Inverse Kinematics",
        "Teleoperation"
      ]
    },
    {
      "company": {
        "zh": "小鹏汽车",
        "en": "XPeng"
      },
      "detail": {
        "zh": "机器人中心 · 鹏行智能",
        "en": "Robotics Center · Pengxing Intelligence"
      },
      "role": {
        "zh": "足式机器人运控实习生",
        "en": "Legged Robot Motion Control Intern"
      },
      "period": "2024.05 — 2024.09",
      "location": {
        "zh": "深圳",
        "en": "Shenzhen"
      },
      "bullets": {
        "zh": [
          "参与 PX5 双足机器人 MPC 控制器开发与实时优化。",
          "设计步态和加速度规划器，搭建动捕数据采集与后处理管线。"
        ],
        "en": [
          "Contributed to MPC controller development and real-time optimization for the PX5 bipedal robot.",
          "Designed gait and acceleration planners and built motion capture data collection and post-processing pipelines."
        ]
      },
      "tags": [
        "MPC",
        "Bipedal Robotics",
        "Motion Capture"
      ]
    }
  ],
  "projects": [
    {
      "title": "Cross-Embodiment Data",
      "subtitle": {
        "zh": "MF · 无本体数据迁移与通用重定向",
        "en": "MF · Embodiment-free data transfer and retargeting"
      },
      "category": {
        "zh": "数据与系统",
        "en": "Data & Systems"
      },
      "period": "2026",
      "description": {
        "zh": "围绕无本体数据对目标机器人的可迁移性，设计可扩展的重定向框架，连接多种数据来源与机器人构型，并结合真机回放验证结果。",
        "en": "Designed an extensible retargeting framework to study how embodiment-free data transfers to target robots, connecting different data sources and robot configurations with real-robot replay validation."
      },
      "tags": [
        "Retargeting",
        "Inverse Kinematics",
        "Framework Design"
      ],
      "image": "",
      "imageAlt": {
        "zh": "代表性工作配图",
        "en": "Selected work illustration"
      },
      "links": []
    },
    {
      "title": "Robot Data Systems",
      "subtitle": {
        "zh": "MF · 数据规格、系统语义与交付",
        "en": "MF · Data specifications, system semantics, and delivery"
      },
      "category": {
        "zh": "数据与系统",
        "en": "Data & Systems"
      },
      "period": "2026",
      "description": {
        "zh": "将外部数据需求转化为机器人数据规格和处理方案，贯通端侧信号含义、时间基准与数据处理链路，承担关键模块开发、系统集成与交付。",
        "en": "Translated external data requirements into robot data specifications and processing solutions, connecting on-robot signal semantics and time bases with data pipelines through implementation, integration, and delivery."
      },
      "tags": [
        "Data Architecture",
        "Systems Integration",
        "Technical Delivery"
      ],
      "image": "",
      "imageAlt": {
        "zh": "代表性工作配图",
        "en": "Selected work illustration"
      },
      "links": []
    },
    {
      "title": "Teleoperation & Manipulation",
      "subtitle": {
        "zh": "AGI · 遥操作、全身控制与灵巧操作",
        "en": "AGI · Teleoperation, whole-body control, and dexterous manipulation"
      },
      "category": {
        "zh": "运动控制",
        "en": "Motion Control"
      },
      "period": "2025.07 — 2026.03",
      "description": {
        "zh": "负责机器人端 VR 遥操作与轮式双臂全身运动控制开发，独立建设灵巧手运控能力，并参与真机强化学习中的端侧遥操作接管链路适配。",
        "en": "Developed on-robot VR teleoperation and whole-body motion control for wheeled dual-arm robots, independently built dexterous-hand control capabilities, and contributed the teleoperation takeover path for real-robot reinforcement learning."
      },
      "tags": [
        "Teleoperation",
        "Whole-Body Control",
        "Dexterous Manipulation"
      ],
      "image": "",
      "imageAlt": {
        "zh": "代表性工作配图",
        "en": "Selected work illustration"
      },
      "links": []
    },
    {
      "title": "Bipedal Motion Control",
      "subtitle": {
        "zh": "小鹏机器人 · 实时优化与运动规划",
        "en": "XPeng Robotics · Real-time optimization and motion planning"
      },
      "category": {
        "zh": "运动控制",
        "en": "Motion Control"
      },
      "period": "2024.05 — 2024.09",
      "description": {
        "zh": "参与双足机器人 MPC 控制器与实时优化开发，设计步态和加速度规划器，并搭建动捕数据后处理管线，连接运动数据与机器人控制。",
        "en": "Contributed to a bipedal robot MPC controller and real-time optimization, designed gait and acceleration planners, and built motion capture post-processing pipelines connecting motion data with robot control."
      },
      "tags": [
        "MPC",
        "Motion Planning",
        "Motion Capture"
      ],
      "image": "",
      "imageAlt": {
        "zh": "代表性工作配图",
        "en": "Selected work illustration"
      },
      "links": []
    },
    {
      "title": "RL Augmented MPC",
      "subtitle": {
        "zh": "强化学习增强的双足机器人控制",
        "en": "RL-augmented control for bipedal robots"
      },
      "category": {
        "zh": "研究与课程",
        "en": "Research & Coursework"
      },
      "period": "2025.02 — 2025.05",
      "description": {
        "zh": "基于 OSQP 开发线足 MPC 控制器，通过 PPO 提供加速度规划，探索双足机器人在外部扰动下的自适应行走。",
        "en": "Developed a line-foot MPC controller using OSQP and used PPO for acceleration planning to explore adaptive bipedal walking under external disturbances."
      },
      "tags": [
        "PPO",
        "MPC",
        "OSQP"
      ],
      "image": "",
      "imageAlt": {
        "zh": "双足机器人控制实验",
        "en": "Bipedal robot control experiment"
      },
      "links": []
    }
  ],
  "education": [
    {
      "school": {
        "zh": "宾夕法尼亚大学",
        "en": "University of Pennsylvania"
      },
      "english": {
        "zh": "University of Pennsylvania",
        "en": ""
      },
      "degree": "MSE · Mechanical Engineering and Applied Mechanics",
      "note": "Control and Robotics · GPA 3.97 / 4.0",
      "period": "2023.08 — 2025.05"
    },
    {
      "school": {
        "zh": "上海交通大学",
        "en": "Shanghai Jiao Tong University"
      },
      "english": {
        "zh": "Shanghai Jiao Tong University",
        "en": ""
      },
      "degree": {
        "zh": "工学学士 · 机械工程",
        "en": "Bachelor of Engineering · Mechanical Engineering"
      },
      "note": "GPA 3.6 / 4.0",
      "period": "2019.09 — 2023.06"
    }
  ],
  "skills": [
    {
      "label": {
        "zh": "编程",
        "en": "Programming"
      },
      "items": [
        "Python",
        "C / C++",
        "MATLAB"
      ]
    },
    {
      "label": {
        "zh": "控制与仿真",
        "en": "Control & Simulation"
      },
      "items": [
        "MuJoCo",
        "OSQP",
        "CasADi",
        "Simulink"
      ]
    },
    {
      "label": {
        "zh": "工程工具",
        "en": "Engineering Tools"
      },
      "items": [
        "PyTorch",
        "Docker",
        "SolidWorks"
      ]
    }
  ]
};

// 页面固定文案。
window.SITE_I18N = {
  "skip": {
    "zh": "跳到主要内容",
    "en": "Skip to main content"
  },
  "home": {
    "zh": "返回首页",
    "en": "Back to home"
  },
  "nav": {
    "zh": "主导航",
    "en": "Main navigation"
  },
  "about": {
    "zh": "关于",
    "en": "About"
  },
  "experience": {
    "zh": "经历",
    "en": "Experience"
  },
  "projects": {
    "zh": "项目",
    "en": "Projects"
  },
  "education": {
    "zh": "教育",
    "en": "Education"
  },
  "contact": {
    "zh": "联系我",
    "en": "Contact"
  },
  "portrait": {
    "zh": "GitHub 头像",
    "en": "GitHub avatar"
  },
  "experienceTitle": {
    "zh": "在真实世界中，让机器人动起来。",
    "en": "Making robots move in the real world."
  },
  "experienceAside": {
    "zh": "工作与实习经历",
    "en": "Work & internships"
  },
  "projectsTitle": {
    "zh": "从算法到系统，再到真机。",
    "en": "From algorithms to real robot systems."
  },
  "projectsAside": {
    "zh": "代表性工作与研究",
    "en": "Selected work & research"
  },
  "educationTitle": {
    "zh": "教育与技术积累",
    "en": "Education & technical background"
  },
  "educationNote": {
    "zh": "从机械工程出发，连接控制、优化与学习。",
    "en": "From mechanical engineering to control, optimization, and learning."
  },
  "contactTitle": {
    "zh": "从一次交流开始。",
    "en": "Let’s start a conversation."
  },
  "backTop": {
    "zh": "返回顶部",
    "en": "Back to top"
  },
  "filterLabel": {
    "zh": "按方向筛选项目",
    "en": "Filter projects by area"
  },
  "allProjects": {
    "zh": "全部项目",
    "en": "All projects"
  },
  "projectVisual": {
    "zh": "PROJECT VISUAL / 待添加",
    "en": "PROJECT VISUAL / COMING SOON"
  },
  "resume": {
    "zh": "简历 PDF ↓",
    "en": "Résumé PDF ↓"
  },
  "projectCount": {
    "zh": "显示 {count} 个项目",
    "en": "Projects shown: {count}"
  },
  "description": {
    "zh": "Bowen Jiang 的个人主页：机器人控制、灵巧操作与机器人学习。",
    "en": "Bowen Jiang — robot control, dexterous manipulation, and robot learning."
  }
};
