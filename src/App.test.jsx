import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  it('renders the main heading', () => {
    render(<App />)
    const heading = screen.getByText(/Hi, I'm Sayan Banerjee/i)
    expect(heading).toBeInTheDocument()
  })
})