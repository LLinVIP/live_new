import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import 'uno.css'

import Progress from "./components/Progress.vue"
import Copyright from "./components/Copyright.vue"

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      "doc-top": ()=>h(Progress),
      "doc-footer-before":()=>h(Copyright)
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme
