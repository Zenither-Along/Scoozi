"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-cream flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md w-full text-center"
          >
            <div className="mb-8">
              <h1 className="font-serif text-6xl text-mocha mb-4">Oops!</h1>
              <p className="text-mocha-light text-lg">
                Something went wrong. We're sorry for the inconvenience.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
              <p className="text-sm text-mocha-light mb-4">
                Error: {this.state.error?.message || "An unexpected error occurred"}
              </p>
            </div>

            <div className="flex gap-4 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-mocha text-cream rounded-full font-medium hover:bg-mocha-light transition-colors"
              >
                Refresh Page
              </button>
              <a
                href="/"
                className="px-6 py-3 bg-sage text-white rounded-full font-medium hover:bg-sage-dark transition-colors"
              >
                Go Home
              </a>
            </div>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}
