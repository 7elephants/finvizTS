/*
 * ---
 * Workflow Summary
 * Invocation: Thrown by FinvizClient.fetchCsv() when an HTTP request fails. Consumers can
 * catch FinvizError and inspect statusCode to distinguish rate-limit (429) from auth (401)
 * or server errors (5xx).
 *
 * | Step | Description                         | Input                           | Output           |
 * |------|-------------------------------------|---------------------------------|------------------|
 * | 1    | FinvizApiError constructor          | message, statusCode, retryAfter | FinvizApiError   |
 * ---
 */

import { ErrorLevel } from './types';


/** Thrown when the Finviz Elite API returns an error response or a network error occurs. */
export class FinvizError extends Error {
  /** HTTP status code from the response, or undefined for network-level errors. */
  readonly statusCode: number | undefined;
  /** Parsed value of the Retry-After response header in seconds, if present. */
  readonly retryAfter: number | undefined;
  /** Level of error */
  readonly level: ErrorLevel | undefined;


  constructor(message: string, level: ErrorLevel = ErrorLevel.ERROR, statusCode?: number, retryAfter?: number, options?: ErrorOptions) {
    super(message, options);
    this.level = level;
    this.name = 'FinvizError';
    this.statusCode = statusCode;
    this.retryAfter = retryAfter;
  }
}
