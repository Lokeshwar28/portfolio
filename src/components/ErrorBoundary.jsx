import { Component } from "react";
import PropTypes from "prop-types";

/**
 * ErrorBoundary component to catch JavaScript errors anywhere in the component tree
 * Logs error information and displays a fallback UI
 *
 * Best Practice: Wrap major sections or the entire app with this component
 * @see https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary
 */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details for debugging
    console.error("ErrorBoundary caught an error:", error, errorInfo);

    this.setState({
      error,
      errorInfo,
    });

    // You can also log the error to an error reporting service here
    // e.g., Sentry.captureException(error);
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default fallback UI
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-teal-50 dark:from-primary dark:via-secondary dark:to-tertiary flex items-center justify-center px-4">
          <div className="max-w-2xl w-full bg-white/80 dark:bg-tertiary/80 backdrop-blur-sm rounded-2xl p-8 shadow-glass border border-white/20 dark:border-slate-700/50">
            <div className="text-center">
              <div className="mb-6">
                <span className="text-6xl">⚠️</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-textPrimary mb-4">
                Oops! Something went wrong
              </h1>

              <p className="text-lg text-slate-600 dark:text-textSecondary mb-6">
                We encountered an unexpected error. Don&apos;t worry, your data
                is safe.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={this.handleReset}
                  className="px-6 py-3 bg-gradient-to-r from-accent to-highlight text-white font-semibold rounded-xl shadow-lg hover:shadow-neon transition-all duration-300 hover:scale-105"
                >
                  Try Again
                </button>

                <button
                  onClick={() => (window.location.href = "/")}
                  className="px-6 py-3 bg-white/80 dark:bg-secondary/80 backdrop-blur-sm border-2 border-accent/50 text-accent dark:text-highlight font-semibold rounded-xl hover:bg-accent/10 dark:hover:bg-accent/10 transition-all duration-300"
                >
                  Go Home
                </button>
              </div>

              {/* Show error details in development mode */}
              {import.meta.env.DEV && this.state.error && (
                <details className="mt-8 text-left">
                  <summary className="cursor-pointer text-sm font-semibold text-slate-700 dark:text-textSecondary mb-2 hover:text-accent">
                    Error Details (Development Mode)
                  </summary>
                  <div className="bg-slate-100 dark:bg-secondary rounded-lg p-4 overflow-auto">
                    <pre className="text-xs text-red-600 dark:text-red-400 whitespace-pre-wrap">
                      {this.state.error.toString()}
                      {this.state.errorInfo?.componentStack}
                    </pre>
                  </div>
                </details>
              )}
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  fallback: PropTypes.node,
};

export default ErrorBoundary;
