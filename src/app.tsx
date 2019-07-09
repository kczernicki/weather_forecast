import * as React from 'react';

import SomeModule from './components/SomeModule'

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <SomeModule appName={'React test name!!'}/>
      </div>
  );
  }
}

export default App;