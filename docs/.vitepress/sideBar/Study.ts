export default function StudySideBar() {
  return [
    {
      text: "📕 培养方案",
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
      text: "💯 课程考核",
      link: "/Study/CourseAssesment",
    },
    {
      text: "📁 常用文件下载",
      link: "/Study/Download",
    },
  ];
}
