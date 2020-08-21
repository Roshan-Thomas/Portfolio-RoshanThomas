import React from 'react';

import illustration from '../assets/images/404-illustrations/png/13.png'
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <section id="one" className="main-container">
      <div className="container">
        <div className="content">
          <img src={illustration} alt="" align="right" width="750" height="353.4" />
          <header className="major">
            <h2>I have bad news for you</h2>
          </header>
          <section>
            <h4>The page that you are looking for might be removed or temporarily unavailable</h4>
          </section>        
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
