import React from 'react'

import { render as _render, wait } from 'utils/test'

import About from '.'

describe(About.name, () => {
	it('renders document title: About', async () => {
		render()

		await wait(() => {
			expect(document.title).toBe('About')
		})
	})

	function render() {
		return _render(<About />)
	}
})
