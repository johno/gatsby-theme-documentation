/** @jsx jsx */
import { useState, useRef } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Styled, Main, Container, jsx } from 'theme-ui'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Header from './header'
import Sidebar from './sidebar'

export default ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const nav = useRef(null)

  const { docs: sidebar } = useStaticQuery(graphql`
    {
      docs(slug: { eq: "/_sidebar" }) {
        body
      }
    }
  `)

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
            <Sidebar
              ref={nav}
              open={menuOpen}
              sx={{ display: [null, 'block'] }}
              onFocus={() => setMenuOpen(true)}
              onBlur={() => setMenuOpen(false)}
              onClick={() => setMenuOpen(false)}
            >
              <MDXRenderer>{sidebar.body}</MDXRenderer>
            </Sidebar>
            <div>
              {children}
            </div>
          </div>
        </Container>
      </Main>
    </Styled.root>
  )
}
