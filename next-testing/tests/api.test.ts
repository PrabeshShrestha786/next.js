import { GET } from '../app/api/hello/route';

describe('GET /api/hello', () => {
  test('returns status 200', async () => {
    const response = await GET();
    expect(response.status).toBe(200);
  });

  test('returns JSON content type', async () => {
    const response = await GET();
    expect(response.headers.get('content-type')).toBe('application/json');
  });

  test('returns hello message with case-insensitive matching', async () => {
    const response = await GET();
    const data = await response.json();
    
    expect(data.message).toMatch(/hello/i);
  });
});