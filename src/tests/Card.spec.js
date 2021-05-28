import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import {BrowserRouter as Router} from "react-router-dom"
import '@testing-library/jest-dom/extend-expect'

import Card from '../Card'


test('loads and displays greeting', async () => {
    const character = {
        url: "",
        name: "Test Character",
        films: [],
        birth_year: 19990
    }

    const  {getByText} = render(<Router>
        <Card character={character} />
    </Router>)

    fireEvent.click(getByText(/Add/)) // regex matching
    fireEvent.click(getByText(/Add/)) // regex matching
    fireEvent.click(getByText(/Add/)) // regex matching

    expect(screen.getByText('Counter: 3')).toBeVisible()
})

