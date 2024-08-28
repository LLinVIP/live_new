export default function LifeSideBar() {
  return [
    {
        text: '🚗 行在矿大',
        items: [
          { text: '校外交通', link: '/Life/Traffic/OutSchool' },
         ],
          collapsed: false
    },
    {
        text: '🏠 住在矿大',
        items: [
          { text: '电', link: '/Life/Dorm/Electricity' },
         ],
          collapsed: false
    },
    {
        text: '💰 消费在矿大',
        items: [
          { text: '一卡通系统&校园卡', link: '/Life/Finance/CampusCard' },
          { text: '一卡通系统&银行卡', link: '/Life/Finance/BankCard' },
         ],
          collapsed: false
    },
    {
      text: '💊 健康在矿大',
      items: [
        { text: '医疗保险', link: '/Life/Health/Medicare' },
       ],
        collapsed: false
  },
    {
        text: '🛜 信息化在矿大',
        items: [
          { text: '一体化网络&手机卡', link: '/Life/Network/IntegratedNetwork' },
          { text: '统一身份认证', link: '/Life/Network/SSO' },
          { text: '校园VPN', link: '/Life/Network/VPN' },
          { text: '5G校园专网', link: '/Life/Network/5GCampusPrivateNetwork' },
         ],
          collapsed: false 
    },
    {
      text: "📁 常用文件下载",
      link: "/Life/Download",
    },

        
        
  ]
}