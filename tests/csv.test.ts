import { parseRecord, parseRecords } from '../src/csv';

describe('parseRecord', () => {
  it('parses a two-row CSV into a flat key/value record', () => {
    const csv = 'Ticker,Price,Volume\nAAPL,180.00,1234567';
    expect(parseRecord(csv)).toEqual({ Ticker: 'AAPL', Price: '180.00', Volume: '1234567' });
  });

  it('throws when the CSV has no data rows', () => {
    expect(() => parseRecord('Ticker,Price')).toThrow('no data rows');
  });

  it('returns the first row when multiple data rows are present', () => {
    const csv = 'Ticker,Price\nAAPL,180.00\nMSFT,420.00';
    expect(parseRecord(csv)).toEqual({ Ticker: 'AAPL', Price: '180.00' });
  });
});

describe('parseRecords', () => {
  it('parses a multi-row CSV into an array of records', () => {
    const csv = 'Ticker,Price\nAAPL,180.00\nMSFT,420.00';
    expect(parseRecords(csv)).toEqual([
      { Ticker: 'AAPL', Price: '180.00' },
      { Ticker: 'MSFT', Price: '420.00' },
    ]);
  });

  it('returns an empty array for a header-only CSV', () => {
    expect(parseRecords('Ticker,Price')).toEqual([]);
  });

  it('handles quoted fields with commas', () => {
    const csv = 'Title,Source\n"AAPL, a great stock",Reuters';
    expect(parseRecords(csv)).toEqual([{ Title: 'AAPL, a great stock', Source: 'Reuters' }]);
  });
});
