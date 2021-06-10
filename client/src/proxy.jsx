import React from 'react';
import NavBar from './components/navBar.jsx';
import Overview from './components/overview.jsx';
import Sidebar from './components/sidebar.jsx';
import Content from './components/content.jsx';
import FeaturedReview from './components/featuredReview.jsx';
import TopCompaniesMiddle from './components/topCompaniesMiddle.jsx';
import ReportAbuse from './components/reportAbuse.jsx';
import TopCompaniesFooter from './components/topCompaniesFooter.jsx';
import Reviews from './components/reviews.jsx';


import {
  ProxyBody,
  ProxyHeader,
  ProxyMain,
  ProxyLeftSide,
  ProxyFooter
} from './styles.js';

class Proxy extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ProxyBody>
        <ProxyHeader>
          <NavBar/>
        </ProxyHeader>
        {/* <Overview/> */}
        <ProxyMain>
          <Sidebar/>
          <ProxyLeftSide>
            <Content/>
            <TopCompaniesMiddle/>
            <FeaturedReview/>
            <Reviews/>
            <ReportAbuse/>
          </ProxyLeftSide>
        </ProxyMain>
        <ProxyFooter>
          <TopCompaniesFooter/>
        </ProxyFooter>
      </ProxyBody>
    );
  }
}

export default Proxy;