import { render, screen } from '@testing-library/react'
import App from './App'

test('renders appropriate text', () => {
  render(<App />)
  const linkElement = screen
  expect(linkElement)
})
