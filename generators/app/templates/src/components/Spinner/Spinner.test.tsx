import React from 'react'

import { render as _render } from 'utils/test'

import Spinner from '.'

describe(Spinner.name, () => {
	it('renders', () => {
		const { getByAltText } = render()

		expect(getByAltText('Spinner')).toBeDefined()
	})

	function render() {
		return _render(<Spinner />)
	}
})
