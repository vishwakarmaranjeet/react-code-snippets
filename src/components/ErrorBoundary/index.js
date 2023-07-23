import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    /**
     * Update state so the next render will show the fallback UI.
     */
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    /**
     * Log the error error reporting service
     */
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      /**
       * Render anu custom fallback UI
       */
      return <h2>Opps, Something went wrong</h2>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
