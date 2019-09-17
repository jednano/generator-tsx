import React from 'react'

import { render as _render } from 'utils/test'

import Layout from '.'

describe('Layout component', () => {
	it('renders', () => {
		expect(() => render()).not.toThrow()
	})

	function render() {
		return _render(<Layout />)
	}
})
