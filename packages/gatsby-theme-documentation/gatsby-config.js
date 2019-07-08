module.exports = options => {
  const { mdx = true, contentPath = 'docs' } = options

  return {
    plugins: [
      'gatsby-plugin-meta-redirect',
      'gatsby-plugin-theme-ui',
      mdx && {
        resolve: 'gatsby-plugin-mdx',
        options: {
          extensions: ['.mdx', '.md'],
          remarkPlugins: [require('remark-slug'), require('remark-emoji')]
        }
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          path: contentPath,
          name: contentPath
        }
      }
    ]
      .filter(Boolean)
  }
}
