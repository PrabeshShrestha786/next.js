import '@testing-library/jest-dom';

// PROPER Request polyfill
if (typeof global.Request === 'undefined') {
  class MockRequest {
    url: string;
    method: string;
    headers: Headers;
    
    constructor(input: string | Request, init?: RequestInit) {
      this.url = typeof input === 'string' ? input : input.url;
      this.method = init?.method || 'GET';
      this.headers = new Headers(init?.headers);
    }
    
    async json() {
      return {};
    }
  }
  
  global.Request = MockRequest as any;
}

// PROPER Response polyfill
if (typeof global.Response === 'undefined') {
  class MockResponse {
    status: number;
    statusText: string;
    headers: Headers;
    body: any;
    
    constructor(body?: any, init?: ResponseInit) {
      this.status = init?.status || 200;
      this.statusText = init?.statusText || 'OK';
      this.headers = new Headers(init?.headers);
      this.body = body;
    }
    
    async json() {
      if (typeof this.body === 'string') {
        return JSON.parse(this.body);
      }
      return this.body;
    }
    
    async text() {
      return typeof this.body === 'string' ? this.body : JSON.stringify(this.body);
    }
  }
  
  global.Response = MockResponse as any;
}