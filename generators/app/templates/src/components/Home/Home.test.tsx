import React from 'react'

import { render as _render } from 'utils/test'

import Home from '.'

describe(Home.name, () => {
	it('renders a logo', () => {
		const rendered = render()

		expect(rendered.getByAltText('logo')).toBeDefined()
	})

	function render() {
		return _render(<Home />)
	}
})
