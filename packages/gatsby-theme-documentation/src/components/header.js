/** @jsx jsx */
import { jsx, Header, Container, Flex, useColorMode } from 'theme-ui'
import { MDXProvider } from '@mdx-js/react'

import MenuButton from './menu-button'
import NavLink from './nav-link'
import Content from '../header.mdx'
import Button from './button'

const modes = ['light', 'dark', 'deep', 'swiss']

const components = {
  a: NavLink
}

const styles = {
  alignItems: 'center',
  width: '100%',
  h1: {
    m: 0
  },
  ul: {
    ml: 'auto',
    display: 'flex',
    listStyleType: 'none',
  },
  li: {
    ml: 3
  }
}

export default ({ menuOpen, setMenuOpen, nav }) => {
  const [mode, setMode] = useColorMode()

  const cycleMode = e => {
    const i = modes.indexOf(mode)
    const next = modes[(i + 1) % modes.length]
    setMode(next)
  }

  return (
    <Header>
      <Container>
        <Flex sx={{ justifyContent: 'space-between' }}>
          <Flex sx={styles}>
            <MenuButton
              onClick={e => {
                setMenuOpen(!menuOpen)
                if (!nav.current) return
                const navLink = nav.current.querySelector('a')
                if (navLink) navLink.focus()
              }}
            />
            <MDXProvider components={components}>
              <Content />
            </MDXProvider>
            <Button
              sx={{
                ml: 2,
              }}
              onClick={cycleMode}>
              {mode}
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Header>
  )
}
