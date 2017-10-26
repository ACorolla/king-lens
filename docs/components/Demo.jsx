import React from 'react';
import { Button, Icon } from 'lens';

class Demo extends React.Component {
  handleClick = (e) => {
    console.log(e);
  };

  render() {
    return (
      <div>
        <Icon name="github"/>
        <Button
          onClick={this.handleClick}
          size="small"
        >点我
        </Button>
      </div>
    );
  }
}

export default Demo;
