import React from 'react';
import { Link } from 'gatsby';

import Layout from '../layouts/layout';
import SEO from '../components/seo';

const BootcampPage = () => (
  <Layout>
    <SEO title="Bootcamp" />
    <h1>Welcome to bootcamp page</h1>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default BootcampPage;
