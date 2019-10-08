/** @jsx jsx */
import { jsx } from 'theme-ui'

export default props => (
  <aside
    {...props}
    sx={{
      padding: 3,
      border: t => `1px solid ${t.colors.primary}`,
      borderRadius: 4,
      borderLeft: t => `8px solid ${t.colors.primary}`,
      p: {
        m: 0,
      },
    }}
  />
)