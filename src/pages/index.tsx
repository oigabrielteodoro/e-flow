import React from 'react'
import { Sidebar, Content, FavoriteCompanies, Layout } from 'ui'

export default function Dashboard() {
  return (
    <Layout>
      <Sidebar />
      <Content />
      <FavoriteCompanies />
    </Layout>
  )
}
