import React from 'react'
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from './layout'

const Doc = ({ data: { doc } }) => (
  <Layout>
    <MDXRenderer>{doc.body}</MDXRenderer>
  </Layout>
)

export default Doc
