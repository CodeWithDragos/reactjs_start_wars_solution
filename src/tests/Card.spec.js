import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import {BrowserRouter as Router} from "react-router-dom"
import '@testing-library/jest-dom/extend-expect'

import Card from '../Card'


test('loads and displays greeting', async () => {
    const character = {
        url: "",
        name: "Test",
        films: []
    }

    render(<Router>
        <Card character={character} />
    </Router>)

    expect(screen.getByText('Test')).toBeVisible()
})

