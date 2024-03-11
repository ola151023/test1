import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import LastBlock from '../../src/components/LastBlock';

// Mock the Core class to avoid making real API calls during testing
jest.mock('@quicknode/sdk', () => ({
  Core: jest.fn(() => ({
    client: {
      getBlockNumber: jest.fn(() => Promise.resolve(100)), // Mock the getBlockNumber method to return a fixed value
    },
  })),
}));

describe('LastBlock Component', () => {
  test('renders the block number when loaded', async () => {
    render(<LastBlock />);
    // Wait for the "LastBlock: 100" text to be present in the DOM
    await waitFor(() => expect(screen.getByText('LastBlock: 100')).toBeInTheDocument());
  });

  test('renders loading text initially', () => {
    render(<LastBlock />);
    // Verify that the "Loading..." text is present initially
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
