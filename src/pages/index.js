import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi Everyone!</h1>
    <p>Welcome to my first Gatsby site.</p>
    <p>At the JAMstack Hackathon, I will build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
