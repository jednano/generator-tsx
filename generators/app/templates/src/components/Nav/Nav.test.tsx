import React from 'react'

import { render as _render } from 'utils/test'

import Nav from '.'

describe(Nav.name, () => {
	it('renders a Home link', () => {
		const { getByText } = render()

		expect(getByText('Home')).toBeDefined()
	})

	it('renders an About link', () => {
		const { getByText } = render()

		expect(getByText('About')).toBeDefined()
	})

	function render() {
		return _render(<Nav />)
	}
})
