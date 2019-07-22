/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { Sidenav } from '@theme-ui/sidenav'

import NavLink from './nav-link'
import Content from '../sidebar.mdx'

export default React.forwardRef((props, ref) => (
  <Sidenav
    {...props}
    components={{
      a: NavLink
    }}
    ref={ref}
    sx={{
      width: 256,
      flex: 'none',
      px: 3,
      pt: 3,
      pb: 4,
      mt: [64, 0],
    }}
  >
    <Content />
  </Sidenav>
))
