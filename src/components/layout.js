import React from 'react';
import Navigation from '../common/components/navigation';

export default class Layout extends React.Component {
  render() {

    return (
      <div>
        <Navigation />
        <h2>This text is coming from layout</h2>
        {this.props.children}
      </div>
    );
  }
}
