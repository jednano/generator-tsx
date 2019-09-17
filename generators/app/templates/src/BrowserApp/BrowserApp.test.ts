import Storage from '@jedmao/storage'

import { BrowserApp } from './BrowserApp'

describe(BrowserApp.name, () => {
	const localStorage = new Storage()
	const app = new BrowserApp({ localStorage })

	beforeEach(() => {
		localStorage.clear()
	})

	it('exports an instance of BrowserApp', () => {
		expect(app instanceof BrowserApp).toBe(true)
	})
})
