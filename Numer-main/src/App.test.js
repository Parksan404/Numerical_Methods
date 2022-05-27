import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import LU from './Linear Algebra/LU'

it('test LU', () => {
    render(<LU />)
    expect(screen.getByText('LU Decomposition')).toBeInTheDocument()
})
