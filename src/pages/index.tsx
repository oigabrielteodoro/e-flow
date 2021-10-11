import React from 'react'
import Head from 'next/head'

import { Sidebar, Content, FavoriteCompanies, Layout } from 'ui'

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Monetus</title>
      </Head>

      <Layout>
        <Sidebar />
        <Content />
        <FavoriteCompanies />
      </Layout>
    </>
  )
}
