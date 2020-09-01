import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(/Edit my super code/i)
  expect(linkElement).toBeInTheDocument()
})

test('just to be ok', () => {
  expect(true).toBe(true)
})
