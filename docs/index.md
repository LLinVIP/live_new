---
layout: home

hero:
  name: CUMT生存手册
  text: A Book For CUMTer
  tagline: 📘旨在为你提供一份煤球的生存指南
  actions:
    - theme: brand
      text: 开始使用
      link: /Preface/
    - theme: brand
      text: 新生专区
      link: /Freshman/
    - theme: brand
      text: 吃喝玩乐
      link: /Play/  
    - theme: alt
      text: 更新日志
      link: /UpdateLog

features:
  - title: 学习篇
    icon: { src: https://api.iconify.design/mdi:learn-outline.svg }
    details: 教务系统 & 培养方案解读 & 课程考核 & 学分认定 & 学费......
    link: "/Study/index"
    linkText: 点击进入
  - title: 学生工作篇
    icon: { src: https://api.iconify.design/material-symbols:work-outline.svg }
    details: 办事基础 & 证件 & 查看监控 & 访客入校......
    link: "/StuWork/index"
    linkText: 点击进入
  - title: 生活篇
    details: 宿舍 & 水 & 电 & 物流 & 医保 & 信息化......
    icon: { src: https://api.iconify.design/ph:house-line.svg }
    link: "/Life/index"
    linkText: 点击进入

---

<script setup>
import { VPTeamMembers,VPTeamPage,VPTeamPageTitle } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://s2.loli.net/2024/10/01/Sn63tHuKXyieUqA.jpg',
    name: 'Yolo3',
    title: 'Creator',
  },
    {
    avatar: 'https://s2.loli.net/2024/09/28/1G6tYjDuzM4pWRU.png',
    name: 'Jiang',
    title: 'Developer',
  },
      {
    avatar: "https://s2.loli.net/2024/10/01/DMjBg6NYVukofnQ.jpg",
    name: 'Hezi',
    title: 'Developer',
  },
        {
    avatar: 'https://s2.loli.net/2024/10/01/2XFyiH7MQCD5EKe.jpg',
    name: 'Clo0oOoud',
    title: 'Developer',
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <!-- <template #lead>
      The development of VitePress is guided by an international
      team, some of whom have chosen to be featured below.
    </template> -->
  </VPTeamPageTitle>
  <VPTeamMembers size="small" :members="members" class="" />
</VPTeamPage>

<HomeContributors/>
