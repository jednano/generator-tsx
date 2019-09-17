import { AnyAction } from 'redux'

import createReducer from './createReducer'

describe('createReducer', () => {
	it('returns a function that updates state', () => {
		const reducer = createReducer<{ foo?: string }>('test', {
			foo: 'DEFAULT_STATE',
		})<AnyAction>((draft, action) => {
			if (action.type === 'UPDATE_FOO') {
				draft.foo = 'new'
			}
		})

		const newState = reducer(void 0, { type: 'UPDATE_FOO' })

		expect(newState).toEqual({ foo: 'new' })
	})
})
