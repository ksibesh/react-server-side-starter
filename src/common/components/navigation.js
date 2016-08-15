import React from 'react';
import {Link} from 'react-router';

export default class Navigation extends React.Component {
  render() {
    return (
      <ul>
        <li><Link to="/">Link1</Link></li>
        <li><Link to="/123">Link2</Link></li>
      </ul>
    );
  }
}
