import React, { Component } from 'react';

const WithLogging = (WrappedComponent) => {
  return class extends Component {
    componentDidMount() {
      const componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
      console.log(`Component ${componentName} is mounted`);
    }

    componentWillUnmount() {
      const componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
      console.log(`Component ${componentName} is going to unmount`);
    }

    render() {
      const componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default WithLogging;
