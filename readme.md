# gatsby-theme-documentation

A minimalist Gatsby Theme for documentation sites built with
[MDX](https://mdxjs.com) and [Theme UI](https://theme-ui.com).

## Features

- 📑 MDX
- 🎨 Theme UI-based theming
- 💻 Syntax highlighting
- 📰 MDX-based sidebar navigation
- 🍔 Collapsible menu
- 🛣 Automatically turns readme.md files into the index of a directory

## Installation

```
yarn add gatsby-theme-documentation
```

## Usage

```js
// gatsby-config.js
module.exports = {
  plugins: [
    'gatsby-theme-documentation'
  ]
}
```

### Customizing the sidebar

`gatsby-theme-documentation` uses a `sidebar.mdx` file to populate the navigation.
In order to customize it you can shadow it by creating a file at
`src/gatsby-theme-documentation/sidebar.mdx`.

#### Example `sidebar.mdx`

```mdx
- [Introduction](/introduction/)
- [Getting Started](/getting-started/)
- [GitHub](https://github.com/johno/gatsby-theme-documentation)
```

### Adding component shortcodes

You can add shortcodes to your docs site which can be used throughout
your docs pages by extending the components passed to MDXProvider. You
can do this by using component shadowing and creating the following file
in the root of your project: `src/gatsby-theme-documentation/components.js`.

#### Example `components.js`

```
import baseComponents from 'gatsby-theme-documentation/src/components'

import MyCustomH1 from '../components/my-custom-h1'

export default {
  ...baseComponents,
  h1: MyCustomH1
}
```

### Docs schema

This theme creates a `Docs` type which can be queried as
an individual document or a collection. This data can be
used to create additional pages, create summaries, etc.

#### Query an individual document

```graphql
{
  docs(slug: {eq: "/some-page"}) {
    slug
    body
  }
}
```

#### Query a collection

```graphql
{
  allDocs {
    slug
  }
}
```
