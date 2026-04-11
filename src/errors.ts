/*
 * ---
 * Workflow Summary
 * Invocation: Thrown by FinvizClient.fetchCsv() when an HTTP request fails. Consumers can
 * catch FinvizApiError and inspect statusCode to distinguish rate-limit (429) from auth (401)
 * or server errors (5xx).
 *
 * | Step | Description                         | Input              | Output           |
 * |------|-------------------------------------|--------------------|------------------|
 * | 1    | FinvizApiError constructor          | message, statusCode| FinvizApiError   |
 * ---
 */

/** Thrown when the Finviz Elite API returns an error response or a network error occurs. */
export class FinvizApiError extends Error {
  /** HTTP status code from the response, or undefined for network-level errors. */
  readonly statusCode: number | undefined;

  constructor(message: string, statusCode?: number) {
    super(message);
    this.name = 'FinvizApiError';
    this.statusCode = statusCode;
  }
}
