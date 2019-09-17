/* eslint-env browser */

export class BrowserApp {
	public localStorage: Storage
	public window: Window

	public constructor(
		options: {
			localStorage?: Storage
			window?: Window
		} = {},
	) {
		this.window = options.window || window
		this.localStorage = options.localStorage || this.window.localStorage
	}
}

export default new BrowserApp()
