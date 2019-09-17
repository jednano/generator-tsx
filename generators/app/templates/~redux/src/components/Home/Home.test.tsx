import React from 'react'
import { DeepPartial } from 'redux'

import RootState from 'store/RootState'
import { render as _render } from 'utils/test'

import Home from '.'

describe(Home.name, () => {
	it('renders a logo', () => {
		const rendered = render()

		expect(rendered.getByAltText('logo')).toBeDefined()
	})

	function render({
		state = {},
	}: {
		state?: DeepPartial<RootState>
	} = {}) {
		return _render(<Home />, {
			state,
		})
	}
})
