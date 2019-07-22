const heading = {
	fontFamily: 'heading',
	fontWeight: 'heading',
	lineHeight: 'heading',
	a: {
		color: 'inherit',
		textDecoration: 'none',
	},
}

export default {
	breakpoints: ['52em', '90em', '100em'],
	initialColorMode: 'light',
	colors: {
		text: '#000',
		background: '#fff',
		primary: '#0099ff',
		secondary: '#8855ff',
		muted: '#fdfdfd',
		highlight: '#03d8ff',
		gray: '#eeeeee',
	},
	fonts: {
		body: 'system-ui, sans-serif',
		heading: 'Roboto',
		monospace: 'Roboto Mono, Menlo, monospace',
	},
	fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
	fontWeights: {
		body: '400',
		heading: '700',
	},
	lineHeights: {
		body: 1.5,
		heading: 1.25,
	},
	textStyles: {
		heading,
		display: {
			variant: 'textStyles.heading',
			fontSize: [5, 6, 7],
			mt: 3,
		},
	},
	styles: {
		Container: {
			p: 3,
			maxWidth: 1024,
		},
		root: {
			fontFamily: 'body',
			lineHeight: 'body',
			fontWeight: 'body',
		},
		h1: {
			variant: 'textStyles.display',
		},
		h2: {
			variant: 'textStyles.heading',
			fontSize: 5,
		},
		h3: {
			variant: 'textStyles.heading',
			fontSize: 4,
		},
		h4: {
			variant: 'textStyles.heading',
			fontSize: 3,
		},
		h5: {
			variant: 'textStyles.heading',
			fontSize: 2,
		},
		h6: {
			variant: 'textStyles.heading',
			fontSize: 1,
		},
		a: {
			color: 'primary',
			'&:hover': {
				color: 'secondary',
			},
		},
		pre: {
			variant: 'prism',
			maxWidth: '100%',
			fontFamily: 'monospace',
			fontSize: 1,
			p: 3,
			color: '#666',
			bg: '#fdfdfd',
			borderRadius: 4,
			border: '1px solid #efefef',
			overflow: 'scroll',
			scroll: 'auto',
			code: {
				color: 'inherit',
			},
		},
		code: {
			fontFamily: 'monospace',
			color: '#666',
			fontSize: 1,
		},
		inlineCode: {
			fontSize: 1,
			fontFamily: 'monospace',
			color: '#2d2d2d',
			bg: '#fdfdfd',
			border: '1px solid #efefef',
			px: 1,
			borderRadius: 4,
		},
		table: {
			width: '100%',
			my: 4,
			borderCollapse: 'separate',
			borderSpacing: 0,
			[['th', 'td']]: {
				textAlign: 'left',
				py: '4px',
				pr: '4px',
				pl: 0,
				borderColor: 'muted',
				borderBottomStyle: 'solid',
			},
		},
		th: {
			verticalAlign: 'bottom',
			borderBottomWidth: '2px',
		},
		td: {
			verticalAlign: 'top',
			borderBottomWidth: '1px',
		},
		hr: {
			border: 0,
			borderBottom: '1px solid',
			borderColor: 'muted',
		},
		li: {
			my: 1,
		},
		p: {
			mb: 3,
		},
	},
	prism: {
		[['.regex', '.property-access', '.important', '.variable', '.parameter']]: {
			color: '#444',
		},
		[[
			'.cdata',
			'.comment',
			'.doctype',
			'.entity',
			'.operator',
			'.prolog',
			'.punctuation',
			'.url',
			'.operator',
		]]: {
			color: '#999999',
		},
		'.comment': {
			fontStyle: 'italic',
		},
		[[
			'.boolean',
			'.class-name',
			'.constant',
			'.deleted',
			'.function',
			'.important',
			'.property',
			'.regex',
			'.symbol',
			'.tag',
			'.variable',
		]]: {
			color: '#ff8800',
		},
		[['.number']]: {
			color: '#ff8866',
		},
		[['.keyword', '.method']]: {
			color: '#00bbcc',
		},
		[['.atrule', '.attr-value', '.keyword', '.maybe-class-name']]: {
			color: '#0bf',
		},
		[['.important', '.bold']]: {
			fontWeight: 500,
		},
		[['.italic']]: {
			fontStyle: 'italic',
		},
		[['.entity']]: {
			cursor: 'help',
		},
		[['.has-highlight-line .line:not(.highlight-line)']]: {
			opacity: '0.25',
		},
		[[
			'.attr-value',
			'.builtin',
			'.char',
			'.inserted',
			'.selector',
			'.string',
		]]: {
			color: '#8855ff',
		},
	},
}
