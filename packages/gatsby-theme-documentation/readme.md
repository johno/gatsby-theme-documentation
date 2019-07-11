# gatsby-theme-documentation

A minimalist Gatsby Theme for documentation sites built with
[MDX](https://mdxjs.com) and [Theme UI](https://theme-ui.com).

## Features

- 📑 MDX
- 🎨 Theme UI-based theming
- 💻 Syntax highlighting
- 📰 MDX-based sidebar navigation
- 🍔 Collapsible menu
- 🛣 [Automatic readme routing](#readme-routing)

## Installation

```
yarn add gatsby-theme-documentation
```

### Install as a starter

Name | Command
---- | -------
[Base](https://github.com/johno/gatsby-starter-documentation) | `gatsby new johno/gatsby-starter-documentation`
[Dark](https://github.com/johno/gatsby-starter-documentation-dark) | `gatsby new johno/gatsby-starter-documentation-dark`

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

### Customizing the header

Similarly to sidebar customization, you can also change the header content by
writing MDX. You can shadow the default header by creating a file at
`src/gatsby-theme-documentation/header.mdx`

#### Example `header.mdx`

```mdx
# ![Docs Logo](https://contrast.now.sh/white/black?width=80&height=40&text=DOCS)

- [GitHub](https://github.com/johno/gatsby-theme-documentation)
- [Twitter](https://twitter.com/4lpine)
```

### Adding component shortcodes

You can add shortcodes to your docs site which can be used throughout
your docs pages by extending the components passed to MDXProvider. You
can do this by using component shadowing and creating the following file
in the root of your project: `src/gatsby-theme-documentation/components.js`.

#### Example `components.js`

```js
import baseComponents from 'gatsby-theme-documentation/src/components'

import MyCustomH1 from '../components/my-custom-h1'

export default {
  ...baseComponents,
  h1: MyCustomH1
}
```

### Readme routing

In order to get documents rendered in directories on GitHub, it's common
to specify a `readme.md` similarly to the `index.html` on normal websites.
Since this theme is meant to work seamlessly with docs directories on GitHub,
`file/path/readme.md` will be automatically turned into `/file/path/index.html`
in the built site. Links will also be redirected to support the new url scheme.

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
