'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { logger } from '@/lib/logger';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
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
    logger.error('Uncaught error caught in React ErrorBoundary', {
      errorName: error.name,
      errorMessage: error.message,
      componentStack: errorInfo.componentStack,
    });
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-[300px] flex items-center justify-center p-6 bg-red-950/20 border border-red-500/20 rounded-2xl m-4 backdrop-blur-md">
          <div className="text-center max-w-md">
            <div className="inline-flex p-3 bg-red-500/10 rounded-full text-red-400 mb-4">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Etwas ist schiefgelaufen</h3>
            <p className="text-sm text-slate-400 mb-6">
              Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es erneut.
            </p>
            <button
              onClick={this.handleReset}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-red-500 hover:bg-red-600 text-white transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              Erneut laden
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

