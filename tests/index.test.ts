/*
 * ---
 * Workflow Summary
 * Invocation: Run via `npx jest tests/index.test.ts` or `npm test`.
 *
 * | Step | Description                                             | Input                    | Output                  |
 * |------|----------------------------------------------------------|--------------------------|--------------------------|
 * | 1    | Collect every const object exported from src/types      | `import * from types`    | Map of const exports    |
 * | 2    | Assert each is re-exported from the package entry point | `import * from src`      | Passing assertions      |
 * | 3    | Assert internal helpers are not part of the public API  | `import * from src`      | Passing assertions      |
 * ---
 */

import * as pkg from '../src';
import * as types from '../src/types';

describe('package entry point', () => {
  const constNames = Object.keys(types).filter(
    (name) => typeof (types as Record<string, unknown>)[name] === 'object',
  );

  it('finds the const objects declared in src/types', () => {
    expect(constNames).toEqual(
      expect.arrayContaining(['ScreenerIndexFilter', 'ScreenerOrder', 'ScreenerSignal', 'PortfolioField', 'FilingOrder']),
    );
  });

  it.each(constNames)('re-exports %s', (name) => {
    expect((pkg as Record<string, unknown>)[name]).toBe((types as Record<string, unknown>)[name]);
  });

  it('does not expose internal helpers', () => {
    for (const name of ['parseRows', 'rawResponse', 'getPerformanceItems', 'getFundManagerItems']) {
      expect(pkg).not.toHaveProperty(name);
    }
  });
});
