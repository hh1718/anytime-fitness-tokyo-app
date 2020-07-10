import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getAllByText } = render(<App />);
  const elements = getAllByText(/エニタイムフィットネスランキング/i);
  expect(elements.length).toBe(2);
});
