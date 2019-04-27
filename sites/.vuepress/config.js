module.exports = {
  title: '益达的博客',
  description: '有一些事情需要记录，会写在这里吧',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: '/blog/' },
      { text: '踩坑手册', link: '/workbook/' },
      { text: '简历', link: '/resume/' },
      { text: 'Github', link: 'https://github.com/edazh/' },
    ],
    sidebar: {
      '/blog/': [
        '',
        {
          title: 'Vue',
          children: ['vue/'],
        },
      ],
      '/workbook/': [''],

      // fallback
      '/': [
        '' /* / */,
        'blog' /* /contact.html */,
        'workbook' /* /about.html */,
      ],
    },
  },
}
