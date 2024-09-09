export default function StudySideBar() {
  return [
    {
      text: "🌀 教务管理系统",
      link: "/Study/EduAdminSystem",
    },
    {
      text: "📚 教材",
      link: "/Study/Textbook",
    },
    {
      text: "📕 培养方案解读（2020版）",
      items: [
        {
          text: "培养方案基础知识",
          link: "/Study/DegreeProgram/BasicKnowledge",
        },
        { text: "课程体系", link: "/Study/DegreeProgram/System" },
        {
          text: "培养方案解读&通识教育选修课",
          link: "/Study/DegreeProgram/PublicElectiveCourse",
        },
      ],
      collapsed: false,
    },
    {
      text: "💯 课程考核",
      items: [
        {
          text: "课程考核基础知识",
          link: "/Study/CourseAssesment/BaseKnowledge",
        },
        { text: "免修/补考/缓考/重新学习", link: "/Study/CourseAssesment/Special" },

      ],
    },
    {
      text: "🕶️ 学分认定",
      items: [
        {
          text: "学分认定",
          link: "/Study/CreditRecognition/CreditRecognition",
        },
        {
          text: "课程替代",
          link: "/Study/CreditRecognition/CourseReplacement",
        },
        {
          text: "课程节点替代",
          link: "/Study/CreditRecognition/CourseNodeReplacement",
        },
      ],
      collapsed: false,
    },
    {
      text: "✈️ 出国留学",
      items: [
        {
          text: "为何出国",
          link: "/Study/StudyAbroad/WhyGoAbroad",
        },
        {
          text: "语言与标化考试",
          link:"/Study/StudyAbroad/Tests",
        },
        {
          text: "本科转学",
          link: "/Study/StudyAbroad/Transfer",
        },
        {
          text: "硕士申请",
          link: "/Study/StudyAbroad/Graduated",
        },
        
      ],
      collapsed: true,
    },

    {
      text: "💎 学费",
      link: "/Study/Tuition",
    },
    {
      text: "📁 常用文件下载",
      link: "/Study/Download",
    },
  ];
}
