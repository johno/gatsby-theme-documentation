/** @jsx jsx */
import { useState, useRef } from 'react'
import { Styled, Main, Container, jsx } from 'theme-ui'

import Header from './header'
import Sidenav from './sidenav'

export default ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const nav = useRef(null)

  return (
    <Styled.root>
      <Header nav={nav} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Main>
        <Container
          py={0}
          px={3}
        >
          <div
            sx={{
              display: ['block', 'flex'],
              mx: -3
            }}
          >
            <Sidenav
              ref={nav}
              open={menuOpen}
              sx={{ display: [null, 'block'] }}
              onFocus={() => setMenuOpen(true)}
              onBlur={() => setMenuOpen(false)}
              onClick={() => setMenuOpen(false)}
            />
            <div>
              {children}
            </div>
          </div>
        </Container>
      </Main>
    </Styled.root>
  )
}
