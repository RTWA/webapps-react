import '@testing-library/jest-dom/extend-expect';
import { server } from './__mocks__/server.js';

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
    constructor() { }

    disconnect() {
        return null;
    }

    observe() {
        return null;
    }

    takeRecords() {
        return null;
    }

    unobserve() {
        return null;
    }
};

// Establish API mocking before all tests.
beforeAll(() => server.listen())
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())
// Clean up after the tests are finished.
afterAll(() => server.close())