

export default function StuWorkSideBar() {
  return [
    {
      text: "🏢 办事基础",
      items: [{ text: "党政办公室", link: "/StuWork/Base/DZB" }],
    },
    {
      text: '💼 证件',
      items: [
        { text: '一卡通系统&校园卡', link: '/StuWork/Document/CampusCard' },
        { text: '一卡通系统&银行卡', link: '/StuWork/Document/BankCard' },
       ],
        collapsed: false
  },
    { text: "📷 查看监控", link: "/StuWork/Monitor" },
    { text: "🚶‍♂️‍➡️ 访客入校", link: "/StuWork/Vistor" },
    {
      text: "📁 常用文件下载",
      link: "/StuWork/Download",
    },

    
  ];
}
