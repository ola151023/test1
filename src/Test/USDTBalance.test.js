import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import USDTBalance from '../../src/components/USDTBalance';
// Mock the Core class to avoid making real API calls during testing
jest.mock('@quicknode/sdk', () => ({
  Core: jest.fn(() => ({
    client: {
      getBalance: jest.fn(() => Promise.resolve(100)),
    },
  })),
}));

describe('USDTBalance Component', () => {
  test('renders the balance when loaded', async () => {
    render(<USDTBalance />);
    await waitFor(() => expect(screen.getByText('USDT Balance: 100')).toBeInTheDocument());
  });

  test('renders loading text initially', () => {
    render(<USDTBalance />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
