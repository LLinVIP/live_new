export default function StuWorkSideBar() {
  return [
    {
      text: "🏢 办事基础",
      items: [{ text: "党政办公室", link: "/StuWork/Base/DZB" }],
    },
    {
      text: "💼 证件",
      items: [
        { text: "一卡通系统&校园卡", link: "/StuWork/Document/CampusCard" },
        { text: "一卡通系统&银行卡", link: "/StuWork/Document/BankCard" },
        { text: "身份证", link: "/StuWork/Document/ID" },
        { text: "学生证", link: "/StuWork/Document/StuID" },
      ],
      collapsed: false,
    },
    {
      text: "📈 综测",
      items: [
        { text: "综合素质测评（Z）", link: "/StuWork/ComprehensiveAssessment" },
        { text: "基本素质测评（J）", link: "/StuWork/ComprehensiveAssessment/Fundamental" },
        { text: "发展素质测评（F）", link: "/StuWork/ComprehensiveAssessment/Development" },
      ],
      collapsed: false,
    },
    { text: "🏃 体质健康测试", link: "/StuWork/PhysicalTest" },
    { text: "📷 查看监控", link: "/StuWork/Monitor" },
    { text: "🚪 教室借用", link: "/StuWork/ClassroomBorrowing" },
    { text: "🚶‍♂️‍➡️ 访客入校", link: "/StuWork/Vistor" },
    {
      text: "📁 常用文件下载",
      link: "/StuWork/Download",
    },
  ];
}
