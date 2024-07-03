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
      text: 吃喝玩乐
      link: /Play/
    - theme: alt
      text: 更新日志
      link: /UpdateLog

features:
  - title: 学习相关
    icon: { src: https://api.iconify.design/guidance:study-room.svg }
    details: 学籍/转专业/课程/培养方案/考试/保研......
  - title: 学生工作
    icon: { src: https://api.iconify.design/ph:student.svg }
    details: 大创/素质测评/评奖/处分......
  - title: 生活在矿大
    details: 食堂/宿舍/交通......
    icon: { src: https://api.iconify.design/ph:house-line.svg }
  - title: 常用文件下载
    details: 提供各类文件/表格的下载
    icon: { src: https://api.iconify.design/solar:document-outline.svg }
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
