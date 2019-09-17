import RootActions from 'actions'
import { Immutable } from 'immer'
import { Reducer } from 'redux'

export default async function testReducer<T, A extends RootActions>(
	reducer: Reducer<Immutable<T>, A>,
	callback: (test: typeof testReducer) => void,
) {
	describe(reducer.name, () => {
		callback(testReducer)
	})

	function testReducer(
		previousState: Immutable<T>,
		action: A,
		expectedState: Immutable<T> | ((newState: Immutable<T>) => void),
		customItName?: string,
	) {
		it(customItName || `handles ${action.type}`, () => {
			expect.hasAssertions()
			const newState = reducer(previousState, action)
			if (typeof expectedState === 'function') {
				;(expectedState as ((newState: Immutable<T>) => void))(newState)
				return
			}
			expect(newState).toEqual(expect.objectContaining(expectedState))
		})
	}
}
