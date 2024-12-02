export default function LifeSideBar() {
  return [
    {
        text: '🚗 行在矿大',
        items: [
          { text: '门禁', link: '/Life/Traffic/Access' },
          { text: '校际交通', link: '/Life/Traffic/BetweenCampus' },
          { text: '校外交通', link: '/Life/Traffic/OutCampus' },
          { text: '来校/离校指南', link: '/Life/Traffic/Guide' },
         ],
          collapsed: false
    },
    {
        text: '🏠 住在矿大',
        items: [
          { text: '宿舍用电', link: '/Life/Dorm/Electricity' },
          { text: '饮用用水', link: '/Life/Dorm/DrinkWater' },
          { text: '宿舍洗浴', link: '/Life/Dorm/Bath' },
         ],
          collapsed: false
    },
    {
      text: '🍾 生活服务',
      items: [
        { text: '物流服务', link: '/Life/Service/Logistics' },
       ],
        collapsed: false
  },
    {
      text: '💊 健康在矿大',
      items: [
        { text: '疫苗', link: '/Life/Health/Vaccine' },
        { text: '就诊&购买药物', link: '/Life/Health/Visit' },
        { text: '医疗保险', link: '/Life/Health/Medicare' },
       ],
        collapsed: false
  },
    {
        text: '🛜 信息化在矿大',
        items: [
          { text: '一体化网络', link: '/Life/Network/IntegratedNetwork' },
          { text: '运营商套餐及校园手机卡', link: '/Life/Network/CampusMobilePhoneCard'},
          { text: '统一身份认证', link: '/Life/Network/SSO' },
          { text: '校园VPN', link: '/Life/Network/VPN' },
          { text: '校园邮箱', link: '/Life/Network/EduMail' },
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