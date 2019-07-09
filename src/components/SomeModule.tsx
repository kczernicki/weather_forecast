import * as React from 'react';
import { Application } from '../interfaces/AppInterface';

class SomeModule extends React.Component<Application, {}> {
  render() {
    return (
      <div>
        <h1>Welcome to React with Typescript</h1>
        <p>The webapp name: {this.props.appName}</p>
      </div>
    );
  }
}

export default SomeModule;