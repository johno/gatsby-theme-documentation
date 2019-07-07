# gatsby-theme-documentation

A minimalist Gatsby Theme for documentation sites built with
[MDX](https://mdxjs.com) and [Theme UI](https://theme-ui.com).

## Features

- 📑 MDX
- 🎨 Theme UI-based theming
- 💻 Syntax highlighting
- 📰 MDX-based sidebar navigation
- 🍔 Collapsible menu
- 🛣 Automatic readme.md to index conversion

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