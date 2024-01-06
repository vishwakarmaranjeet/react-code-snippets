import React from "react";

const cssStyles = {
  maxWidth: "350px",
  backgroundColor: "rgb(255, 239, 239)",
  padding: "16px",
  borderRadius: "4px",
  border: "1px solid #FF004D"
};
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
      return <div style={{ ...cssStyles }}>
        <h3>Opps, Something went wrong.</h3>
        <p style={{ fontSize: "14px" }}>Please either refresh the page or return home to try again.</p>
        <button onClick={()=> { window.location.reload() }}>Try again</button>
      </div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
