// .vuepress/config.js

module.exports = {
  title: 'Become a Developer in Test - C# Edition',
  description: 'This guide is an introduction to test automation in C#',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    repo: 'https://github.com/DevAbout/dev-in-test-csharp',
    docsDir: 'app/docs',
    editLinks: true,
    sidebar: true,
    sidebarDepth: 2,
    lastUpdated: true,
    displayAllHeaders: true,
    sidebar: [
      '/',
      '/guide/chapter-00/',
      '/guide/chapter-00/prerequisites',
      '/guide/chapter-01/introduction-html'
      // {
      //   title: '01 - Introduction',
      //   collapsable: true,
      //   children: [
      //     '/guide/chapter-01/introduction-html'
      //    ]
      // }
    ]
  }
}