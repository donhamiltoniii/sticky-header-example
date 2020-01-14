import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header.component"
import "./layout.styles.scss"

interface LayoutProps {
  customStyle?: { height: string }
}

const Layout: React.FC<LayoutProps> = ({ children, customStyle }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          ...customStyle,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
