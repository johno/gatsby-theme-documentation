/** @jsx jsx */
import { jsx, Header, Container, Flex } from 'theme-ui'

import MenuButton from './menu-button'
import NavLink from './nav-link'

export default ({ menuOpen, setMenuOpen, nav }) => {

  return (
    <Header>
      <Container>
        <Flex sx={{ justifyContent: 'space-between' }}>
          <Flex sx={{ alignItems: 'center' }}>
            <MenuButton
              onClick={e => {
                setMenuOpen(!menuOpen)
                if (!nav.current) return
                const navLink = nav.current.querySelector('a')
                if (navLink) navLink.focus()
              }}
            />
            <NavLink
              to="/"
              sx={{
                color: 'text',
                '&.active': {
                  color: 'text',
                }
              }}
            >
              Docs
            </NavLink>
          </Flex>
        </Flex>
      </Container>
    </Header>
  )
}
