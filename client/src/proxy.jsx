import React from 'react';
import Overview from './components/overview.jsx';
import Sidebar from './components/sidebar.jsx';
import Content from './components/content.jsx';
import FeaturedReview from './components/featuredReview.jsx';
import TopCompaniesMiddle from './components/topCompaniesMiddle.jsx';
import ReportAbuse from './components/reportAbuse.jsx';
import TopCompaniesFooter from './components/topCompaniesFooter.jsx';
import Reviews from './components/reviews.jsx';


import { ProxyBody, ProxyMain } from './styles.js';

class Proxy extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ProxyBody>
        <Overview/>
        <ProxyMain>
          <Sidebar/>
          <Content/>
          <TopCompaniesMiddle/>
          <FeaturedReview/>
          <Reviews/>
          <ReportAbuse/>
        </ProxyMain>
        <TopCompaniesFooter/>
      </ProxyBody>
    );
  }
}

export default Proxy;