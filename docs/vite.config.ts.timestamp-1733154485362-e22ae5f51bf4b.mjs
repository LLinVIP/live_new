// docs/vite.config.ts
import { resolve } from "node:path";
import { createRequire } from "node:module";
import { defineConfig } from "file:///E:/CUMT%20Projects/live_new/node_modules/.pnpm/vite@6.0.1_@types+node@22.10.1/node_modules/vite/dist/node/index.js";
import UnoCSS from "file:///E:/CUMT%20Projects/live_new/node_modules/.pnpm/unocss@0.65.0-beta.2_postcss@8.4.49_vite@6.0.1_vue@3.5.13/node_modules/unocss/dist/vite.mjs";
import Icons from "file:///E:/CUMT%20Projects/live_new/node_modules/.pnpm/unplugin-icons@0.20.2/node_modules/unplugin-icons/dist/vite.js";
import IconsResolver from "file:///E:/CUMT%20Projects/live_new/node_modules/.pnpm/unplugin-icons@0.20.2/node_modules/unplugin-icons/dist/resolver.js";
import Components from "file:///E:/CUMT%20Projects/live_new/node_modules/.pnpm/unplugin-vue-components@0.27.5_vue@3.5.13/node_modules/unplugin-vue-components/dist/vite.js";

// docs/.vitepress/plugins/pageInfo.ts
function getWords(content) {
  return content.match(/[\w\d\s,.\u00C0-\u024F\u0400-\u04FF]+/giu);
}
function getChinese(content) {
  return content.match(/[\u4E00-\u9FD5]/gu);
}
function getEnWordCount(content) {
  return getWords(content)?.reduce(
    (accumulator, word) => accumulator + (word.trim() === "" ? 0 : word.trim().split(/\s+/u).length),
    0
  ) || 0;
}
function getCnWordCount(content) {
  return getChinese(content)?.length || 0;
}
function getWordNumber(content) {
  return getEnWordCount(content) + getCnWordCount(content);
}
function getReadingTime(content, cnWordPerMinute = 350, enwordPerMinute = 160) {
  const count = getWordNumber(content || "");
  const words = count >= 1e3 ? `${Math.round(count / 100) / 10}k` : count;
  const enWord = getEnWordCount(content);
  const cnWord = getCnWordCount(content);
  const readingTime = cnWord / cnWordPerMinute + enWord / enwordPerMinute;
  const readTime = readingTime < 1 ? "1" : Number.parseInt(`${readingTime}`, 10);
  return {
    readTime,
    words
  };
}

// docs/.vitepress/plugins/markdownTransform.ts
function MarkdownTransform() {
  return {
    name: "chodocs-md-transform",
    enforce: "pre",
    async transform(code, id) {
      if (!id.match(/\.md\b/)) return null;
      const [_name, i] = id.split("/").slice(-2);
      const textColorPattern = /\【(\w+)\|(.+?)\】/;
      code = code.replace(textColorPattern, replaceMatch);
      const imgRegex = /!\[(.+?)\]\((.+?)\)/g;
      let imgMatches = imgRegex.exec(code);
      if (id.match(/Play/)) {
        while (imgMatches) {
          const [text, link] = imgMatches.slice(1);
          code = code.replace(
            imgMatches[0],
            `<img src="${link}" alt="${text || "img"}" class="mx-auto w-80%"/><br>`
          );
          imgMatches = imgRegex.exec(code);
        }
      } else {
        while (imgMatches) {
          const [text, link] = imgMatches.slice(1);
          const width = extractPicWidth(text);
          code = code.replace(
            imgMatches[0],
            `<img src="${link}" alt="${text || "img"}" class="mx-auto w-${width}%"/>`
          );
          imgMatches = imgRegex.exec(code);
        }
      }
      if (_name === "docs" && i === "index.md") return code;
      const { readTime, words } = getReadingTime(code);
      code = code.replace(
        /#111/,
        `

<PageInfo readTime="${readTime}" words="${words}"/>
`
      );
      return code;
    }
  };
}
function extractPicWidth(input) {
  const regex = /w-(\d+)/;
  const match = input.match(regex);
  if (match && match[1]) {
    return parseInt(match[1], 10);
  }
  return 70;
}
function replaceMatch(match, color, content) {
  return `<text c-${color}-600 font-bold>${content}</text>`;
}

// docs/vite.config.ts
var __vite_injected_original_dirname = "E:\\CUMT Projects\\live_new\\docs";
var __vite_injected_original_import_meta_url = "file:///E:/CUMT%20Projects/live_new/docs/vite.config.ts";
var require2 = createRequire(__vite_injected_original_import_meta_url);
var vite_config_default = defineConfig(async () => {
  return {
    server: {
      hmr: {
        overlay: false
      },
      fs: {
        allow: [
          resolve(__vite_injected_original_dirname, "..")
        ]
      },
      port: 16500
    },
    plugins: [
      // custom
      MarkdownTransform(),
      // plugins
      Components({
        dirs: resolve(__vite_injected_original_dirname, ".vitepress/theme/components"),
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        resolvers: [
          IconsResolver({
            componentPrefix: ""
          })
        ],
        dts: "./.vitepress/components.d.ts",
        transformer: "vue3"
      }),
      Icons({
        compiler: "vue3",
        autoInstall: true,
        defaultStyle: "display: inline-block"
      }),
      UnoCSS()
    ],
    css: {
      postcss: {
        // plugins: [
        //   require('postcss-nested'),
        // ],
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy92aXRlLmNvbmZpZy50cyIsICJkb2NzLy52aXRlcHJlc3MvcGx1Z2lucy9wYWdlSW5mby50cyIsICJkb2NzLy52aXRlcHJlc3MvcGx1Z2lucy9tYXJrZG93blRyYW5zZm9ybS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6XFxcXENVTVQgUHJvamVjdHNcXFxcbGl2ZV9uZXdcXFxcZG9jc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcQ1VNVCBQcm9qZWN0c1xcXFxsaXZlX25ld1xcXFxkb2NzXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9DVU1UJTIwUHJvamVjdHMvbGl2ZV9uZXcvZG9jcy92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdub2RlOnBhdGgnXHJcbmltcG9ydCB7IGNyZWF0ZVJlcXVpcmUgfSBmcm9tICdub2RlOm1vZHVsZSdcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHR5cGUgeyBVc2VyQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IFVub0NTUyBmcm9tICd1bm9jc3Mvdml0ZSdcclxuaW1wb3J0IEljb25zIGZyb20gJ3VucGx1Z2luLWljb25zL3ZpdGUnXHJcbmltcG9ydCBJY29uc1Jlc29sdmVyIGZyb20gJ3VucGx1Z2luLWljb25zL3Jlc29sdmVyJ1xyXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJ1xyXG5pbXBvcnQgeyBNYXJrZG93blRyYW5zZm9ybSB9IGZyb20gJy4vLnZpdGVwcmVzcy9wbHVnaW5zL21hcmtkb3duVHJhbnNmb3JtJ1xyXG5cclxuY29uc3QgcmVxdWlyZSA9IGNyZWF0ZVJlcXVpcmUoaW1wb3J0Lm1ldGEudXJsKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKGFzeW5jICgpID0+IHtcclxuICByZXR1cm4gPFVzZXJDb25maWc+e1xyXG4gICAgc2VydmVyOiB7XHJcbiAgICAgIGhtcjoge1xyXG4gICAgICAgIG92ZXJsYXk6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgICBmczoge1xyXG4gICAgICAgIGFsbG93OiBbXHJcbiAgICAgICAgICByZXNvbHZlKF9fZGlybmFtZSwgJy4uJyksXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAgcG9ydDogMTY1MDBcclxuICAgIH0sXHJcbiAgICBwbHVnaW5zOiBbXHJcbiAgICAgIC8vIGN1c3RvbVxyXG4gICAgICBNYXJrZG93blRyYW5zZm9ybSgpLFxyXG4gICAgICAvLyBwbHVnaW5zXHJcbiAgICAgIENvbXBvbmVudHMoe1xyXG4gICAgICAgIGRpcnM6IHJlc29sdmUoX19kaXJuYW1lLCAnLnZpdGVwcmVzcy90aGVtZS9jb21wb25lbnRzJyksXHJcbiAgICAgICAgaW5jbHVkZTogWy9cXC52dWUkLywgL1xcLnZ1ZVxcP3Z1ZS8sIC9cXC5tZCQvXSxcclxuICAgICAgICByZXNvbHZlcnM6IFtcclxuICAgICAgICAgIEljb25zUmVzb2x2ZXIoe1xyXG4gICAgICAgICAgICBjb21wb25lbnRQcmVmaXg6ICcnLFxyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgXSxcclxuICAgICAgICBkdHM6ICcuLy52aXRlcHJlc3MvY29tcG9uZW50cy5kLnRzJyxcclxuICAgICAgICB0cmFuc2Zvcm1lcjogJ3Z1ZTMnLFxyXG4gICAgICB9KSxcclxuICAgICAgSWNvbnMoe1xyXG4gICAgICAgIGNvbXBpbGVyOiAndnVlMycsXHJcbiAgICAgICAgYXV0b0luc3RhbGw6IHRydWUsXHJcbiAgICAgICAgZGVmYXVsdFN0eWxlOiAnZGlzcGxheTogaW5saW5lLWJsb2NrJyxcclxuICAgICAgfSksXHJcbiAgICAgIFVub0NTUygpLFxyXG4gICAgXSxcclxuICAgIGNzczoge1xyXG4gICAgICBwb3N0Y3NzOiB7XHJcbiAgICAgICAgLy8gcGx1Z2luczogW1xyXG4gICAgICAgIC8vICAgcmVxdWlyZSgncG9zdGNzcy1uZXN0ZWQnKSxcclxuICAgICAgICAvLyBdLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9XHJcbn0pXHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTpcXFxcQ1VNVCBQcm9qZWN0c1xcXFxsaXZlX25ld1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxccGx1Z2luc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcQ1VNVCBQcm9qZWN0c1xcXFxsaXZlX25ld1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxccGx1Z2luc1xcXFxwYWdlSW5mby50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovQ1VNVCUyMFByb2plY3RzL2xpdmVfbmV3L2RvY3MvLnZpdGVwcmVzcy9wbHVnaW5zL3BhZ2VJbmZvLnRzXCI7XHJcbmV4cG9ydCBpbnRlcmZhY2UgUGFnZUluZm8ge1xyXG4gIHJlYWRUaW1lOiBudW1iZXIgfCBzdHJpbmc7XHJcbiAgd29yZHM6IG51bWJlciB8IHN0cmluZztcclxufWV4cG9ydCBmdW5jdGlvbiBnZXRXb3Jkcyhjb250ZW50OiBzdHJpbmcpOiBSZWdFeHBNYXRjaEFycmF5IHwgbnVsbCB7XHJcbiAgcmV0dXJuIGNvbnRlbnQubWF0Y2goL1tcXHdcXGRcXHMsLlxcdTAwQzAtXFx1MDI0RlxcdTA0MDAtXFx1MDRGRl0rL2dpdSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENoaW5lc2UoY29udGVudDogc3RyaW5nKTogUmVnRXhwTWF0Y2hBcnJheSB8IG51bGwge1xyXG4gIHJldHVybiBjb250ZW50Lm1hdGNoKC9bXFx1NEUwMC1cXHU5RkQ1XS9ndSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEVuV29yZENvdW50KGNvbnRlbnQ6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgcmV0dXJuIGdldFdvcmRzKGNvbnRlbnQpPy5yZWR1Y2U8bnVtYmVyPihcclxuICAgIChhY2N1bXVsYXRvciwgd29yZCkgPT5cclxuICAgICAgYWNjdW11bGF0b3IgKyAod29yZC50cmltKCkgPT09ICcnID8gMCA6IHdvcmQudHJpbSgpLnNwbGl0KC9cXHMrL3UpLmxlbmd0aCksXHJcbiAgICAwLFxyXG4gICkgfHwgMFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q25Xb3JkQ291bnQoY29udGVudDogc3RyaW5nKTogbnVtYmVyIHtcclxuICByZXR1cm4gZ2V0Q2hpbmVzZShjb250ZW50KT8ubGVuZ3RoIHx8IDBcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFdvcmROdW1iZXIoY29udGVudDogc3RyaW5nKTogbnVtYmVyIHtcclxuICByZXR1cm4gZ2V0RW5Xb3JkQ291bnQoY29udGVudCkgKyBnZXRDbldvcmRDb3VudChjb250ZW50KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVhZGluZ1RpbWUoY29udGVudDogc3RyaW5nLFxyXG4gIGNuV29yZFBlck1pbnV0ZSA9IDM1MCxcclxuICBlbndvcmRQZXJNaW51dGUgPSAxNjApOiBQYWdlSW5mbyB7XHJcbiAgY29uc3QgY291bnQgPSBnZXRXb3JkTnVtYmVyKGNvbnRlbnQgfHwgJycpXHJcbiAgY29uc3Qgd29yZHMgPSBjb3VudCA+PSAxMDAwID8gYCR7TWF0aC5yb3VuZChjb3VudCAvIDEwMCkgLyAxMH1rYCA6IGNvdW50XHJcblxyXG4gIGNvbnN0IGVuV29yZCA9IGdldEVuV29yZENvdW50KGNvbnRlbnQpXHJcbiAgY29uc3QgY25Xb3JkID0gZ2V0Q25Xb3JkQ291bnQoY29udGVudClcclxuXHJcbiAgY29uc3QgcmVhZGluZ1RpbWUgPSBjbldvcmQgLyBjbldvcmRQZXJNaW51dGUgKyBlbldvcmQgLyBlbndvcmRQZXJNaW51dGVcclxuICBjb25zdCByZWFkVGltZSA9IHJlYWRpbmdUaW1lIDwgMSA/ICcxJyA6IE51bWJlci5wYXJzZUludChgJHtyZWFkaW5nVGltZX1gLCAxMClcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHJlYWRUaW1lLFxyXG4gICAgd29yZHMsXHJcbiAgfVxyXG59XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTpcXFxcQ1VNVCBQcm9qZWN0c1xcXFxsaXZlX25ld1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxccGx1Z2luc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcQ1VNVCBQcm9qZWN0c1xcXFxsaXZlX25ld1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxccGx1Z2luc1xcXFxtYXJrZG93blRyYW5zZm9ybS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovQ1VNVCUyMFByb2plY3RzL2xpdmVfbmV3L2RvY3MvLnZpdGVwcmVzcy9wbHVnaW5zL21hcmtkb3duVHJhbnNmb3JtLnRzXCI7aW1wb3J0IHR5cGUgeyBQbHVnaW4gfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgeyBnZXRSZWFkaW5nVGltZSB9IGZyb20gXCIuL3BhZ2VJbmZvXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTWFya2Rvd25UcmFuc2Zvcm0oKTogUGx1Z2luIHtcclxuICByZXR1cm4ge1xyXG4gICAgbmFtZTogXCJjaG9kb2NzLW1kLXRyYW5zZm9ybVwiLFxyXG4gICAgZW5mb3JjZTogXCJwcmVcIixcclxuICAgIGFzeW5jIHRyYW5zZm9ybShjb2RlLCBpZCkge1xyXG4gICAgICAvLyBcdTgyRTVcdTRFMERcdTRFRTVtZFx1N0VEM1x1NUMzRVx1RkYwQ1x1NTIxOVx1NUZGRFx1NzU2NVx1NTkwNFx1NzQwNlxyXG4gICAgICBpZiAoIWlkLm1hdGNoKC9cXC5tZFxcYi8pKSByZXR1cm4gbnVsbDtcclxuICAgICAgY29uc3QgW19uYW1lLCBpXSA9IGlkLnNwbGl0KFwiL1wiKS5zbGljZSgtMik7XHJcbiAgICAgIFxyXG4gICAgICAvLyB0cmFuc2ZlciBjb2xvclxyXG4gICAgICBjb25zdCB0ZXh0Q29sb3JQYXR0ZXJuID0gL1xcXHUzMDEwKFxcdyspXFx8KC4rPylcXFx1MzAxMS87XHJcbiAgICAgIGNvZGUgPSBjb2RlLnJlcGxhY2UodGV4dENvbG9yUGF0dGVybiwgcmVwbGFjZU1hdGNoKVxyXG5cclxuICAgICAgLy8gY29udmVydCBpbWdcclxuICAgICAgY29uc3QgaW1nUmVnZXggPSAvIVxcWyguKz8pXFxdXFwoKC4rPylcXCkvZztcclxuICAgICAgbGV0IGltZ01hdGNoZXMgPSBpbWdSZWdleC5leGVjKGNvZGUpO1xyXG5cclxuICAgICAgaWYgKGlkLm1hdGNoKC9QbGF5LykpIHtcclxuICAgICAgICB3aGlsZSAoaW1nTWF0Y2hlcykge1xyXG4gICAgICAgICAgY29uc3QgW3RleHQsIGxpbmtdID0gaW1nTWF0Y2hlcy5zbGljZSgxKTtcclxuICAgICAgICAgIGNvZGUgPSBjb2RlLnJlcGxhY2UoXHJcbiAgICAgICAgICAgIGltZ01hdGNoZXNbMF0sXHJcbiAgICAgICAgICAgIGA8aW1nIHNyYz1cIiR7bGlua31cIiBhbHQ9XCIke1xyXG4gICAgICAgICAgICAgIHRleHQgfHwgXCJpbWdcIlxyXG4gICAgICAgICAgICB9XCIgY2xhc3M9XCJteC1hdXRvIHctODAlXCIvPjxicj5gXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgaW1nTWF0Y2hlcyA9IGltZ1JlZ2V4LmV4ZWMoY29kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdoaWxlIChpbWdNYXRjaGVzKSB7XHJcbiAgICAgICAgICBjb25zdCBbdGV4dCwgbGlua10gPSBpbWdNYXRjaGVzLnNsaWNlKDEpO1xyXG4gICAgICAgICAgY29uc3Qgd2lkdGggPSBleHRyYWN0UGljV2lkdGgodGV4dClcclxuICAgICAgICAgIGNvZGUgPSBjb2RlLnJlcGxhY2UoXHJcbiAgICAgICAgICAgIGltZ01hdGNoZXNbMF0sXHJcbiAgICAgICAgICAgIGA8aW1nIHNyYz1cIiR7bGlua31cIiBhbHQ9XCIke3RleHQgfHwgXCJpbWdcIn1cIiBjbGFzcz1cIm14LWF1dG8gdy0ke3dpZHRofSVcIi8+YFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGltZ01hdGNoZXMgPSBpbWdSZWdleC5leGVjKGNvZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gY29udmVydCBsaW5rcyB0byBjb21wb25lbnRzXHJcbiAgICAgIC8vIGNvbnN0IGxpbmtSZWdleCA9IC9cXFsoLis/KVxcXVxcKCguKz8pXFwpL2dcclxuICAgICAgLy8gbGV0IG1hdGNoZXMgPSBsaW5rUmVnZXguZXhlYyhjb2RlKVxyXG4gICAgICAvLyB3aGlsZSAobWF0Y2hlcykge1xyXG4gICAgICAvLyAgIGNvbnN0IFt0ZXh0LCBsaW5rXSA9IG1hdGNoZXMuc2xpY2UoMSlcclxuICAgICAgLy8gICBjb2RlID0gY29kZS5yZXBsYWNlKG1hdGNoZXNbMF0sIGA8Q3VzdG9tTGluayB0aXRsZT1cIiR7dGV4dH1cIiBocmVmPVwiJHtsaW5rfVwiIC8+YClcclxuICAgICAgLy8gICBtYXRjaGVzID0gbGlua1JlZ2V4LmV4ZWMoY29kZSlcclxuICAgICAgLy8gfVxyXG5cclxuICAgICAgLy8gY3V0IGluZGV4Lm1kXHJcbiAgICAgIGlmIChfbmFtZSA9PT0gXCJkb2NzXCIgJiYgaSA9PT0gXCJpbmRleC5tZFwiKSByZXR1cm4gY29kZTtcclxuXHJcbiAgICAgIC8vIGNvbnN0IHsgZm9vdGVyIH0gPSBhd2FpdCBnZXREb2NzTWFya2Rvd24oKVxyXG4gICAgICAvLyBjb2RlID0gcmVwbGFjZXIoY29kZSwgZm9vdGVyLCAnRk9PVEVSJywgJ3RhaWwnKVxyXG4gICAgICBjb25zdCB7IHJlYWRUaW1lLCB3b3JkcyB9ID0gZ2V0UmVhZGluZ1RpbWUoY29kZSk7XHJcbiAgICAgIGNvZGUgPSBjb2RlLnJlcGxhY2UoXHJcbiAgICAgICAgLyMxMTEvLFxyXG4gICAgICAgIGBcXG5cXG48UGFnZUluZm8gcmVhZFRpbWU9XCIke3JlYWRUaW1lfVwiIHdvcmRzPVwiJHt3b3Jkc31cIi8+XFxuYFxyXG4gICAgICApO1xyXG5cclxuICAgICAgXHJcbiAgICAgIHJldHVybiBjb2RlO1xyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jc01hcmtkb3duKCkge1xyXG4vLyAgIGNvbnN0IENvbnRyaWJ1dG9yc1NlY3Rpb24gPSBgIyMgQ29udHJpYnV0b3JzXHJcbi8vICAgPENvbnRyaWJ1dG9ycy8+YFxyXG5cclxuLy8gICBjb25zdCBDb3B5UmlnaHRTZWN0aW9uID0gYFxyXG4vLyAgIDxDb3B5UmlnaHQvPmBcclxuXHJcbi8vICAgY29uc3QgZm9vdGVyID0gYCR7Q29udHJpYnV0b3JzU2VjdGlvbn1cXG4ke0NvcHlSaWdodFNlY3Rpb259XFxuYFxyXG5cclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgZm9vdGVyLFxyXG4vLyAgIH1cclxuLy8gfVxyXG5mdW5jdGlvbiBleHRyYWN0UGljV2lkdGgoaW5wdXQ6IHN0cmluZyk6IG51bWJlciB8IG51bGwge1xyXG4gIGNvbnN0IHJlZ2V4ID0gL3ctKFxcZCspLztcclxuICBjb25zdCBtYXRjaCA9IGlucHV0Lm1hdGNoKHJlZ2V4KTtcclxuICBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtcclxuICAgICAgcmV0dXJuIHBhcnNlSW50KG1hdGNoWzFdLCAxMCk7XHJcbiAgfVxyXG4gIHJldHVybiA3MDtcclxufVxyXG5mdW5jdGlvbiByZXBsYWNlTWF0Y2gobWF0Y2g6UmVnRXhwLCBjb2xvcjpzdHJpbmcsIGNvbnRlbnQ6c3RyaW5nKSB7XHJcbiAgcmV0dXJuIGA8dGV4dCBjLSR7Y29sb3J9LTYwMCBmb250LWJvbGQ+JHtjb250ZW50fTwvdGV4dD5gO1xyXG59Il0sCiAgIm1hcHBpbmdzIjogIjtBQUFzUixTQUFTLGVBQWU7QUFDOVMsU0FBUyxxQkFBcUI7QUFDOUIsU0FBUyxvQkFBb0I7QUFFN0IsT0FBTyxZQUFZO0FBQ25CLE9BQU8sV0FBVztBQUNsQixPQUFPLG1CQUFtQjtBQUMxQixPQUFPLGdCQUFnQjs7O0FDSGYsU0FBUyxTQUFTLFNBQTBDO0FBQ2xFLFNBQU8sUUFBUSxNQUFNLDBDQUEwQztBQUNqRTtBQUVPLFNBQVMsV0FBVyxTQUEwQztBQUNuRSxTQUFPLFFBQVEsTUFBTSxtQkFBbUI7QUFDMUM7QUFFTyxTQUFTLGVBQWUsU0FBeUI7QUFDdEQsU0FBTyxTQUFTLE9BQU8sR0FBRztBQUFBLElBQ3hCLENBQUMsYUFBYSxTQUNaLGVBQWUsS0FBSyxLQUFLLE1BQU0sS0FBSyxJQUFJLEtBQUssS0FBSyxFQUFFLE1BQU0sTUFBTSxFQUFFO0FBQUEsSUFDcEU7QUFBQSxFQUNGLEtBQUs7QUFDUDtBQUVPLFNBQVMsZUFBZSxTQUF5QjtBQUN0RCxTQUFPLFdBQVcsT0FBTyxHQUFHLFVBQVU7QUFDeEM7QUFFTyxTQUFTLGNBQWMsU0FBeUI7QUFDckQsU0FBTyxlQUFlLE9BQU8sSUFBSSxlQUFlLE9BQU87QUFDekQ7QUFFTyxTQUFTLGVBQWUsU0FDN0Isa0JBQWtCLEtBQ2xCLGtCQUFrQixLQUFlO0FBQ2pDLFFBQU0sUUFBUSxjQUFjLFdBQVcsRUFBRTtBQUN6QyxRQUFNLFFBQVEsU0FBUyxNQUFPLEdBQUcsS0FBSyxNQUFNLFFBQVEsR0FBRyxJQUFJLEVBQUUsTUFBTTtBQUVuRSxRQUFNLFNBQVMsZUFBZSxPQUFPO0FBQ3JDLFFBQU0sU0FBUyxlQUFlLE9BQU87QUFFckMsUUFBTSxjQUFjLFNBQVMsa0JBQWtCLFNBQVM7QUFDeEQsUUFBTSxXQUFXLGNBQWMsSUFBSSxNQUFNLE9BQU8sU0FBUyxHQUFHLFdBQVcsSUFB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
