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
                    { text: '校外交通', link: '/Life/Traffic/OutSchool' },
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
                        text: '学校附近',
                        items: [
                          { text: '凉菜', link: '/Play/Eat/OutSchool/Vicinity/凉菜' },
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