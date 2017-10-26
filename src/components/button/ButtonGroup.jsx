import React from 'react';

class ButtonGroup extends React.Component {
  render() {
    const newChildren = React.Children.map(this.props.children, item =>
      <p className="control">{item}</p>);
    return (
      <div className="field has-addons">
        {newChildren}
      </div>
    );
  }
}

export default ButtonGroup;
