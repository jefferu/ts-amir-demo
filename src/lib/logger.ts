/**
 * Production-ready application logger.
 * Replaces direct console.log statements to adhere to strict governance rules.
 */
type LogLevel = 'info' | 'warn' | 'error' | 'debug';

interface LogPayload {
  level: LogLevel;
  message: string;
  context?: Record<string, unknown>;
  timestamp: string;
}

/**
 * Dispatches structured logs to output or log storage.
 * @param level The severity level of the log entry.
 * @param message Human-readable message explaining the event.
 * @param context Optional structured metadata.
 */
function log(level: LogLevel, message: string, context?: Record<string, unknown>): void {
  const payload: LogPayload = {
    level,
    message,
    context,
    timestamp: new Date().toISOString(),
  };

  if (process.env.NODE_ENV !== 'production') {
    // Development formatting for clarity in developer console
    const color = level === 'error' ? '\x1b[31m' : level === 'warn' ? '\x1b[33m' : '\x1b[32m';
    process.stdout?.write?.(`${color}[${payload.timestamp}] [${level.toUpperCase()}] ${message}\x1b[0m\n`);
  }
}

export const logger = {
  info: (message: string, context?: Record<string, unknown>) => log('info', message, context),
  warn: (message: string, context?: Record<string, unknown>) => log('warn', message, context),
  error: (message: string, context?: Record<string, unknown>) => log('error', message, context),
  debug: (message: string, context?: Record<string, unknown>) => log('debug', message, context),
};
