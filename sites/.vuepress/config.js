module.exports = {
  title: '益达的简历',
  description: '有一些事情需要记录，会写在这里吧',
  base: '/blog-vuepress/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: '/blog/' },
      { text: '踩坑手册', link: '/workbook/' },
      { text: 'Github', link: 'https://github.com/edazh/' },
    ],
    sidebar: {
      '/blog/': [
        '',
        'project',
        {
          title: 'Vue',
          children: ['vue/'],
        },
      ],
      '/workbook/': [''],
      // fallback
      '/': [],
    },
  },
}
