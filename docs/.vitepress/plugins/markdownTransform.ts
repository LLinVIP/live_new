import type { Plugin } from "vite";
import { getReadingTime } from "./pageInfo";

export function MarkdownTransform(): Plugin {
  return {
    name: "chodocs-md-transform",
    enforce: "pre",
    async transform(code, id) {
      // 若不以md结尾，则忽略处理
      if (!id.match(/\.md\b/)) return null;
      const [_name, i] = id.split("/").slice(-2);

      // convert img
      const imgRegex = /!\[(.+?)\]\((.+?)\)/g;
      let imgMatches = imgRegex.exec(code);

      if (id.match(/Play/)) {
        while (imgMatches) {
          const [text, link] = imgMatches.slice(1);
          code = code.replace(
            imgMatches[0],
            `<img src="${link}" alt="${
              text || "img"
            }" class="mx-auto w-80%"/><br>`
          );
          imgMatches = imgRegex.exec(code);
        }
      } else {
        while (imgMatches) {
          const [text, link] = imgMatches.slice(1);
          const width = extractPicWidth(text)
          code = code.replace(
            imgMatches[0],
            `<img src="${link}" alt="${text || "img"}" class="mx-auto w-${width}%"/>`
          );
          imgMatches = imgRegex.exec(code);
        }
      }

      // convert links to components
      // const linkRegex = /\[(.+?)\]\((.+?)\)/g
      // let matches = linkRegex.exec(code)
      // while (matches) {
      //   const [text, link] = matches.slice(1)
      //   code = code.replace(matches[0], `<CustomLink title="${text}" href="${link}" />`)
      //   matches = linkRegex.exec(code)
      // }

      // cut index.md
      if (_name === "docs" && i === "index.md") return code;

      // const { footer } = await getDocsMarkdown()
      // code = replacer(code, footer, 'FOOTER', 'tail')
      const { readTime, words } = getReadingTime(code);
      code = code.replace(
        /#111/,
        `\n\n<PageInfo readTime="${readTime}" words="${words}"/>\n`
      );

      return code;
    },
  };
}

// export async function getDocsMarkdown() {
//   const ContributorsSection = `## Contributors
//   <Contributors/>`

//   const CopyRightSection = `
//   <CopyRight/>`

//   const footer = `${ContributorsSection}\n${CopyRightSection}\n`

//   return {
//     footer,
//   }
// }
function extractPicWidth(input: string): number | null {
  const regex = /w-(\d+)/;
  const match = input.match(regex);
  if (match && match[1]) {
      return parseInt(match[1], 10);
  }
  return 70;
}