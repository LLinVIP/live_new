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
    details: 教务系统&培养方案解读&课程考核&学分认定&学费......
    link: "/Study/index"
    linkText: 点击进入
  - title: 学生工作篇
    icon: { src: https://api.iconify.design/material-symbols:work-outline.svg }
    details: 办事基础&证件&查看监控&访客入校......
    link: "/StuWork/index"
    linkText: 点击进入
  - title: 生活篇
    details: 宿舍&水&电&物流&医保&信息化......
    icon: { src: https://api.iconify.design/ph:house-line.svg }
    link: "/Life/index"
    linkText: 点击进入

---

<script setup>
import { VPTeamMembers,VPTeamPage,VPTeamPageTitle } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://q1.qlogo.cn/g?b=qq&nk=1282001814&s=640',
    name: 'Yolo3',
    title: 'Creator',
  },
    {
    avatar: 'https://q1.qlogo.cn/g?b=qq&nk=2071791520&s=640',
    name: 'Jiang',
    title: 'Developer',
  },
      {
    avatar: 'https://q1.qlogo.cn/g?b=qq&nk=1872214575&s=640',
    name: 'Cheng',
    title: 'Developer',
  },
        {
    avatar: 'https://q1.qlogo.cn/g?b=qq&nk=2587836169&s=640',
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
