/** @jsx jsx */
import { jsx, Header, Container, Flex, Box } from 'theme-ui'
import { MDXProvider } from '@mdx-js/react'

import MenuButton from './menu-button'
import NavLink from './nav-link'
import Content from '../header.mdx'

const components = {
	a: NavLink,
}

const styles = {
	alignItems: 'center',
	width: '100%',
	borderBottom: '1px solid #666',
	h1: {
		m: 0,
		fontSize: [3, 4],
		p: 2,
		lineHeight: 1,
	},
	ul: {
		ml: 'auto',
		display: 'flex',
		listStyleType: 'none',
	},
	li: {
		ml: 3,
	},
}

export default ({ menuOpen, setMenuOpen, nav }) => {
	return (
		<Header>
			<Container
				sx={{
					px: [0, 3],
					py: 0,
					position: ['fixed', 'static'],
					top: 0,
					left: 0,
					backgroundColor: '#FFFFFF',
				}}
			>
				<Flex sx={{ justifyContent: 'space-between', pt: [1, 3], px: [3, 0] }}>
					<Flex sx={styles}>
						<MenuButton
							sx={{ mr: 2 }}
							onClick={(e) => {
								setMenuOpen(!menuOpen)
								if (!nav.current) return
								const navLink = nav.current.querySelector('a')
								if (navLink) navLink.focus()
							}}
						/>
						<MDXProvider components={components}>
							<Content />
						</MDXProvider>
					</Flex>
				</Flex>
			</Container>
		</Header>
	)
}
