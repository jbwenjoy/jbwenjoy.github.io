/* 内容入口：只需修改本文件。所有路径相对于网站根目录；空链接不会显示。
 * 以下内容摘录自现有 cv_4.tex，请在公开发布前更新日期、描述和公开范围。
 * 图片示例："assets/images/profile.jpg"；简历示例："assets/files/resume.pdf"。
 */
window.SITE_CONTENT = {
  profile: {
    name: "Bowen Jiang",
    headline: "机器人控制 · 灵巧操作 · 机器人学习",
    intro: "关注机器人如何感知、学习并与真实世界交互。我的工作围绕运动控制、遥操作与数据管线展开，探索从算法到真机的完整路径。",
    location: "中国 · 上海", affiliation: "AGIBOT / 智元机器人",
    photo: "", photoAlt: "Portrait of Bowen Jiang",
    email: "bowen_2025@outlook.com",
    resume: "",
    focus: ["Motion Control", "Dexterous Manipulation", "Teleoperation", "Robot Learning"],
    contactText: "欢迎就机器人控制、灵巧操作和有趣的工程问题与我交流。"
  },
  experience: [
    { company: "智元机器人", detail: "精灵（Genie）业务部 & 觅峰", role: "运控算法工程师 / 数据算法工程师", period: "2025.07 — 至今", location: "上海",
      bullets: ["开发无本体异构真机对齐与重定向管线，支持多型机器人、夹爪和灵巧手。", "开发通用灵巧手 IK 求解器，支持位姿与向量模式。", "参与灵巧操作数采链路搭建，研发并维护机器人遥操作与重定向模块。"], tags: ["Retargeting", "Inverse Kinematics", "Teleoperation"] },
    { company: "小鹏汽车", detail: "机器人中心 · 鹏行智能", role: "足式机器人运控实习生", period: "2024.05 — 2024.09", location: "深圳",
      bullets: ["参与 PX5 双足机器人 MPC 控制器开发与实时优化。", "设计步态和加速度规划器，搭建动捕数据采集与后处理管线。"], tags: ["MPC", "Bipedal Robotics", "Motion Capture"] }
  ],
  // category 决定筛选按钮；image 为空时显示占位插画；links 可自由增删。
  projects: [
    { title: "RL Augmented MPC", subtitle: "强化学习增强的双足机器人控制", category: "控制与学习", period: "2025.02 — 2025.05", description: "基于 OSQP 开发线足 MPC 控制器，通过 PPO 提供加速度规划，探索双足机器人在外部扰动下的自适应行走。", tags: ["PPO", "MPC", "OSQP"], image: "", imageAlt: "双足机器人控制实验", links: [] },
    { title: "Learning Traffic Scenarios", subtitle: "基于 SocialVAE 的危险驾驶轨迹生成", category: "控制与学习", period: "2024.03 — 2024.05", description: "结合 LSTM、时序 VAE 与注意力机制生成交通场景，并通过运动学约束和聚类改善轨迹质量。", tags: ["VAE", "Trajectory Generation"], image: "", imageAlt: "车辆轨迹生成可视化", links: [] },
    { title: "Aerial Load Transport", subtitle: "带绳索载荷的无人机控制与轨迹优化", category: "规划与优化", period: "2023.11 — 2023.12", description: "从 A-star 路径搜索到 direct collocation 轨迹优化，建立无人机与绳索载荷的混合模型并设计几何控制器。", tags: ["CasADi", "Trajectory Optimization"], image: "", imageAlt: "无人机载荷轨迹实验", links: [] },
    { title: "Ducted-Fan UAV", subtitle: "微型涵道无人机 MPC 飞控", category: "规划与优化", period: "2022.12 — 2023.05", description: "结合空气动力学模拟与飞行数据建立动力学模型，使用 MPC 与 PID 补偿实现轨迹跟踪。", tags: ["Modeling", "MPC", "Simulink"], image: "", imageAlt: "涵道无人机原型", links: [] }
  ],
  education: [
    { school: "宾夕法尼亚大学", english: "University of Pennsylvania", degree: "MSE · Mechanical Engineering and Applied Mechanics", note: "Control and Robotics · GPA 3.97 / 4.0", period: "2023.08 — 2025.05" },
    { school: "上海交通大学", english: "Shanghai Jiao Tong University", degree: "工学学士 · 机械工程", note: "GPA 3.6 / 4.0", period: "2019.09 — 2023.06" }
  ],
  skills: [
    { label: "编程", items: ["Python", "C / C++", "MATLAB"] },
    { label: "控制与仿真", items: ["MuJoCo", "OSQP", "CasADi", "Simulink"] },
    { label: "工程工具", items: ["PyTorch", "Docker", "SolidWorks"] }
  ]
};
