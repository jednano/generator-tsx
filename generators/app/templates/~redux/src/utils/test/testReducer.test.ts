import { Draft, Immutable } from 'immer'
import { AnyAction } from 'redux'

import createReducer from 'utils/createReducer'

import testReducer from './testReducer'

const defaultState: {
	foo?: string
} = {
	foo: 'DEFAULT_STATE',
}

const reducer = createReducer<typeof defaultState>('test', defaultState)<
	AnyAction
>((draft, action) => {
	if (action.type === 'UPDATE_FOO') {
		draft.foo = action.value
	}
})

testReducer(reducer, test => {
	const newValue = 'NEW_VALUE'
	const expectedState = { foo: newValue }
	const action = { type: 'UPDATE_FOO', value: newValue }

	test(defaultState, action, expectedState)
	test(defaultState, action, expectedState, 'handles expectedState')
	test(defaultState, action, onNewState, 'handles an expected state callback')

	function onNewState(newState: Immutable<Draft<Partial<{ foo: string }>>>) {
		expect(newState).toEqual(expectedState)
	}
})
