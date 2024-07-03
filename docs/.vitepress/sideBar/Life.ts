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
          { text: '住在矿大&电', link: '/Life/Dorm/Electricity' },
         ],
          collapsed: false
    },
    {
        text: '💰 消费在矿大',
        items: [
          { text: '一卡通系统&银行卡', link: '/Life/Finance/BankCard' },
          { text: '一卡通系统&校园卡', link: '/Life/Finance/CampusCard' },
         ],
          collapsed: false
    },
    {
        text: '🛜 网络在矿大',
        items: [
          { text: '校园网&手机卡', link: '/Life/Network/IntegratedNetwork' },
         ],
          collapsed: false
    },

        
        
  ]
}