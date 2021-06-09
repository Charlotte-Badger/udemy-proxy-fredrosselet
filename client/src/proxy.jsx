import React from 'react';
import Overview from './components/overview.jsx';
import Sidebar from './components/sidebar.jsx';
import Content from './components/content.jsx';
import Reviews from './components/reviews.jsx';

import { Main } from './styles.js';

class Proxy extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Main>
        <Overview/>
        <Sidebar/>
        <Content/>
        <Reviews/>
      </Main>
    );
  }
}

export default Proxy;