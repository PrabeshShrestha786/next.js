import { GET } from '../../app/api/hello/route';

describe('GET /api/hello', () => {
  it('should return status 200', async () => {
    const response = await GET();
    expect(response.status).toBe(200);
  });

  it('should return JSON with hello message', async () => {
    const response = await GET();
    const data = await response.json();
    
    expect(data).toHaveProperty('message');
    expect(data.message).toMatch(/hello/i); // Case-insensitive match
    expect(typeof data.message).toBe('string');
  });

  it('should include a timestamp', async () => {
    const response = await GET();
    const data = await response.json();
    
    expect(data).toHaveProperty('timestamp');
    // Check if timestamp is valid ISO string
    expect(new Date(data.timestamp).getTime()).toBeGreaterThan(0);
  });
});