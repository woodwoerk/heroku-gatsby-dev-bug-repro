import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function Home() {
  const data = useStaticQuery(graphql`
    query SiteMetaQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return <div>{data.site.siteMetadata.title}</div>
}
