import React from 'react';

export default class Layout extends React.Component {
  render() {
    
    return (
      <div>
        <h2>This text is coming from layout</h2>
        {this.props.children}
      </div>
    );
  }
}
