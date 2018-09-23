// .vuepress/config.js

module.exports = {
  title: 'Become a Developer in Test - C# Edition',
  description: 'This guide is an introduction to test automation in C#',
  themeConfig: {
    sidebar: true,
    sidebarDepth: 2,
    displayAllHeaders: true,
    sidebar: [
      '/',
      '/guide/chapter-00/',
      '/guide/chapter-00/prerequisites',
      {
        title: 'Chapter 1',
        collapsable: false,
        children: [ '/guide/chapter-01/introduction-html' ]
      }
    ]
  }
}