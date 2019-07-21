module.exports = (options) => {
	const { mdx = true, contentPath = 'docs' } = options

	return {
		plugins: [
			'gatsby-plugin-meta-redirect',
			'gatsby-plugin-theme-ui',
			'gatsby-plugin-react-helmet',
			'gatsby-plugin-redirects',
			mdx && {
				resolve: 'gatsby-plugin-mdx',
				options: {
					extensions: ['.mdx', '.md'],
					remarkPlugins: [require('remark-slug'), require('remark-emoji')],
				},
			},
			{
				resolve: 'gatsby-source-filesystem',
				options: {
					path: contentPath,
					name: contentPath,
				},
			},
			{
				resolve: `gatsby-plugin-prefetch-google-fonts`,
				options: {
					fonts: [
						{
							family: `Roboto`,
						},
						{
							family: `Roboto Mono`,
						},
					],
				},
			},
		].filter(Boolean),
	}
}
