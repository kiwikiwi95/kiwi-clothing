import React from "react";

import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from "./error-boundary.styles";

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false
    };
  }

  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  render() {
    if (this.state.hasErrored)
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/yW2W9SC.png"/>
          <ErrorImageText>sOrry~ This page iS Brrrrrokkkken!</ErrorImageText>
        </ErrorImageOverlay>
      );
    return this.props.children;
  }
}

export default ErrorBoundary;