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
      "zh": "AGIBOT / 智元机器人",
      "en": "AGIBOT"
    },
    "photo": "",
    "photoAlt": "Portrait of Bowen Jiang",
    "email": "bowen_2025@outlook.com",
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
        "zh": "智元机器人",
        "en": "AGIBOT"
      },
      "detail": {
        "zh": "精灵（Genie）业务部 & 觅峰",
        "en": "Genie Division & Mifeng"
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
      "title": "RL Augmented MPC",
      "subtitle": {
        "zh": "强化学习增强的双足机器人控制",
        "en": "RL-augmented control for bipedal robots"
      },
      "category": {
        "zh": "控制与学习",
        "en": "Control & Learning"
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
    },
    {
      "title": "Learning Traffic Scenarios",
      "subtitle": {
        "zh": "基于 SocialVAE 的危险驾驶轨迹生成",
        "en": "Generating challenging driving trajectories with SocialVAE"
      },
      "category": {
        "zh": "控制与学习",
        "en": "Control & Learning"
      },
      "period": "2024.03 — 2024.05",
      "description": {
        "zh": "结合 LSTM、时序 VAE 与注意力机制生成交通场景，并通过运动学约束和聚类改善轨迹质量。",
        "en": "Combined LSTM, temporal VAE, and attention mechanisms to generate traffic scenarios, using kinematic constraints and clustering to improve trajectory quality."
      },
      "tags": [
        "VAE",
        "Trajectory Generation"
      ],
      "image": "",
      "imageAlt": {
        "zh": "车辆轨迹生成可视化",
        "en": "Traffic trajectory generation visualization"
      },
      "links": []
    },
    {
      "title": "Aerial Load Transport",
      "subtitle": {
        "zh": "带绳索载荷的无人机控制与轨迹优化",
        "en": "Control and trajectory optimization for a UAV with a suspended load"
      },
      "category": {
        "zh": "规划与优化",
        "en": "Planning & Optimization"
      },
      "period": "2023.11 — 2023.12",
      "description": {
        "zh": "从 A-star 路径搜索到 direct collocation 轨迹优化，建立无人机与绳索载荷的混合模型并设计几何控制器。",
        "en": "Combined A-star path search with direct collocation trajectory optimization, modeled the UAV and suspended load as a hybrid system, and designed a geometric controller."
      },
      "tags": [
        "CasADi",
        "Trajectory Optimization"
      ],
      "image": "",
      "imageAlt": {
        "zh": "无人机载荷轨迹实验",
        "en": "UAV suspended-load trajectory experiment"
      },
      "links": []
    },
    {
      "title": "Ducted-Fan UAV",
      "subtitle": {
        "zh": "微型涵道无人机 MPC 飞控",
        "en": "MPC flight control for a miniature ducted-fan UAV"
      },
      "category": {
        "zh": "规划与优化",
        "en": "Planning & Optimization"
      },
      "period": "2022.12 — 2023.05",
      "description": {
        "zh": "结合空气动力学模拟与飞行数据建立动力学模型，使用 MPC 与 PID 补偿实现轨迹跟踪。",
        "en": "Built a dynamics model from aerodynamic simulations and flight data, and combined MPC with PID compensation for trajectory tracking."
      },
      "tags": [
        "Modeling",
        "MPC",
        "Simulink"
      ],
      "image": "",
      "imageAlt": {
        "zh": "涵道无人机原型",
        "en": "Ducted-fan UAV prototype"
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
    "zh": "个人照片 / 机器人工作照",
    "en": "Portrait / Robotics at work"
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
    "zh": "探索、构建与验证。",
    "en": "Explore. Build. Validate."
  },
  "projectsAside": {
    "zh": "项目与研究",
    "en": "Projects & research"
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
    "en": "Showing {count} projects"
  },
  "description": {
    "zh": "Bowen Jiang 的个人主页：机器人控制、灵巧操作与机器人学习。",
    "en": "Bowen Jiang — robot control, dexterous manipulation, and robot learning."
  }
};
