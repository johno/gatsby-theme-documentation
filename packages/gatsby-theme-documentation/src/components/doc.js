import React from 'react'
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from './layout'
import SEO from './seo'

const Doc = ({ data: { doc } }) => (
  <Layout>
    <SEO
      title={doc.title}
      description={doc.excerpt}
    />
    <MDXRenderer>{doc.body}</MDXRenderer>
  </Layout>
)

export default Doc
