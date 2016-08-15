import React from 'react';

export default class Layout extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>This text is coming from layout</h2>
        {this.props.childeren}
      </div>
    );
  }
}
