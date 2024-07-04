export default function PlaySideBar() {
    return [
        {
            text: '🤩 吃喝',
            items: [
                {
                    text: '🥐 校内美食',
                    items: [
                      { text: '校外交通', link: '/Life/Traffic/OutSchool' },
                     ],
                      collapsed: false
                }, 
                {
                  text: '🍄‍🟫 外卖美食',
                  items: [
                    { text: '垦牛堡·手作牛肉汉堡（儿童医院店）', link: '/Play/Eat/TakeAway/垦牛堡·手作牛肉汉堡（儿童医院店）' },
                   ],
                    collapsed: false
              },   
              {
                  text: '🍲 校外美食',
                  items: [
                    {
                        text: '鼓楼区',
                        items: [
                          { text: 'ChaTraMue手标泰式茶', link: '/Play/Eat/OutSchool/GuLou/ChaTraMue手标泰式茶' },
                         ],
                          collapsed: false
                    },
                    {
                      text: '泉山区',
                      items: [
                        { text: '多福临砂锅居', link: '/Play/Eat/OutSchool/QuanShan/多福临砂锅居' },
                        { text: '巨鲸pizza', link: '/Play/Eat/OutSchool/QuanShan/巨鲸pizza' },
                        { text: '南京大排档', link: '/Play/Eat/OutSchool/QuanShan/南京大排档' },
                        { text: '武吉制面日式料理', link: '/Play/Eat/OutSchool/QuanShan/武吉制面日式料理' },
                        { text: '辛香汇', link: '/Play/Eat/OutSchool/QuanShan/辛香汇' },
                        { text: '周老六安庆面馆', link: '/Play/Eat/OutSchool/QuanShan/周老六安庆面馆' },
                        { text: 'L&C Bar', link: '/Play/Eat/OutSchool/QuanShan/L&C Bar' }
                       ],
                        collapsed: false
                  },
                  {
                    text: '云龙区',
                    items: [
                      { text: '鹿巷甜品', link: '/Play/Eat/OutSchool/YunLong/鹿巷甜品' },
                      { text: '马市街饣它汤', link: '/Play/Eat/OutSchool/YunLong/马市街饣它汤' },
                      { text: '味旬甜品', link: '/Play/Eat/OutSchool/YunLong/味旬甜品' },
                      { text: '蟹逅龙虾', link: '/Play/Eat/OutSchool/YunLong/蟹逅龙虾' },
                      { text: 'Temp度C', link: '/Play/Eat/OutSchool/YunLong/Temp度C' },
                     ],
                      collapsed: false
                },
                    {
                        text: '小南门',
                        items: [
                          { text: '凉菜', link: '/Play/Eat/OutSchool/Vicinity/凉菜' },
                          { text: '明记肠粉', link: '/Play/Eat/OutSchool/Vicinity/明记肠粉' },
                          { text: '夜归人菜馆', link: '/Play/Eat/OutSchool/Vicinity/夜归人菜馆' }
                         ],
                          collapsed: false
                    }
                   ],
                    collapsed: false
              },
             ],
              collapsed: false
        }, 
            
    ]
  }