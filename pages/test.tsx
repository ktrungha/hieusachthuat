import React from 'react';

interface State {
  count: number;
}

class Test extends React.Component<{}, State> {
  state = { count: 1 };
  render() {
    return <div>Test {this.state.count}</div>;
  }
}

export default Test;
