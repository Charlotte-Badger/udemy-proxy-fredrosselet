import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import querystring from 'querystring';

class Proxy extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let id = Number(querystring.parse(window.location.search)['?courseId']);
    axios.get(`http://127.0.0.1:5001/?courseId=${id}`)
      .then((response) => {
        console.log(response.data);
      });
  }

  render() {
    return (
      <div>Hi from proxy</div>
    );
  }

}

// ReactDOM.render(<Proxy/>, document.getElementById('proxy'));