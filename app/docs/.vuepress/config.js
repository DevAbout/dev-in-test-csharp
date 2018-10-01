// .vuepress/config.js

module.exports = {
  title: 'Become a Developer in Test - C# Edition',
  description: 'This guide is an introduction to test automation in C#',
  markdown: {
    lineNumbers: true,
    config: md => {
      // use more markdown-it plugins!
      md.use(require('markdown-it-container'), 'spoiler', {
        validate: function(params) {
          return params.trim().match(/^spoiler\s+(.*)$/);
        },

        render: function (tokens, idx) {
          var m = tokens[idx].info.trim().match(/^spoiler\s+(.*)$/);

          if (tokens[idx].nesting === 1) {
            // opening tag
            return '<details><summary>' + md.utils.escapeHtml(m[1]) + '</summary><div class="spoiler">\n';

          } else {
            // closing tag
            return '</div></details>\n';
          }
        }
      });

      // console.log(md.render('::: spoiler click me\n*content*\n:::\n'));

    }
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
      '/guide/chapter-01/',
      '/guide/chapter-02/',
      '/guide/chapter-03/'
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