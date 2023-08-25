export const themeData = JSON.parse("{\"style\":\"@vuepress-reco/style-default\",\"logo\":\"/hero.svg\",\"author\":\"SmallPigPig\",\"authorAvatar\":\"/head.png\",\"docsRepo\":\"https://github.com/ShiYiZhiHanZhuZhuYa/vuepressblog\",\"docsBranch\":\"main\",\"docsDir\":\"example\",\"lastUpdatedText\":\"\",\"series\":{\"/docs/document/\":[{\"text\":\"文档的说明\",\"children\":[\"/docs/document/BeforeRead.html\",\"/docs/document/rule.html\"]},{\"text\":\"七年级资料\",\"children\":[\"/docs/document/7/7A.html\",\"/docs/document/7/7B.html\"]},{\"text\":\"八年级资料\",\"children\":[\"/docs/document/8/8A.html\",\"/docs/document/8/8B.html\"]},{\"text\":\"九年级资料\",\"children\":[\"/docs/document/9/9A.html\",\"/docs/document/9/9B.html\"]}],\"/docs/about/\":[{\"text\":\"关于文档\",\"children\":[\"/docs/about/关于文档/关于网站.html\",\"/docs/about/关于文档/关于作者.html\"]},{\"text\":\"文档优势\",\"children\":[\"/docs/about/文档优势/标准的语法.html\",\"/docs/about/文档优势/简洁的代码.html\",\"/docs/about/文档优势/清晰的目标.html\",\"/docs/about/文档优势/整齐的分类.html\"]}]},\"navbar\":[{\"text\":\"文档\",\"icon\":\"Document\",\"children\":[{\"text\":\"七年级资料\",\"children\":[{\"text\":\"七年级上册\",\"link\":\"/docs/document/7/7A.md\"},{\"text\":\"七年级下册\",\"link\":\"/docs/document/7/7B.md\"}]},{\"text\":\"八年级资料\",\"children\":[{\"text\":\"八年级上册\",\"link\":\"/docs/document/8/8A.md\"},{\"text\":\"八年级下册\",\"link\":\"/docs/document/8/8B.md\"}]},{\"text\":\"九年级资料\",\"children\":[{\"text\":\"九年级上册\",\"link\":\"/docs/document/9/9A.md\"},{\"text\":\"九年级下册\",\"link\":\"/docs/document/9/9B.md\"}]}]},{\"text\":\"关于\",\"icon\":\"Account\",\"children\":[{\"text\":\"关于文档\",\"children\":[{\"text\":\"关于网站\",\"link\":\"/docs/about/关于文档/关于网站.md\"},{\"text\":\"关于作者\",\"link\":\"/docs/about/关于文档/关于作者.md\"}]},{\"text\":\"文档优势\",\"children\":[{\"text\":\"标准的语法\",\"link\":\"/docs/about/文档优势/标准的语法.md\"},{\"text\":\"简洁的代码\",\"link\":\"/docs/about/文档优势/简洁的代码.md\"},{\"text\":\"清晰的目标\",\"link\":\"/docs/about/文档优势/清晰的目标.md\"},{\"text\":\"整齐的分类\",\"link\":\"/docs/about/文档优势/整齐的分类.md\"}]}]},{\"text\":\"音乐\",\"link\":\"/docs/heomusic.html\",\"icon\":\"Music\"}]}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
