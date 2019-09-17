import React from 'react'

import { render as _render } from 'utils/test'

import NotFound from '.'

describe(NotFound.name, () => {
	it('renders "Page Not Found" title', () => {
		const { getByText } = render()

		expect(getByText('Page Not Found')).not.toBeUndefined()
	})

	function render() {
		return _render(<NotFound />)
	}
})
