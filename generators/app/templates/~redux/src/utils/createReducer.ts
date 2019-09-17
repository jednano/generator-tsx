
import produce, { Draft, Immutable } from 'immer'
import { Reducer } from 'redux'

import RootActions from 'actions'

export default function createReducer<T>(
	name: string,
	defaultState: Immutable<T>,
) {
	return <A extends RootActions>(
		recipe: (draft: Draft<Partial<T>>, action: A) => void,
	) => {
		const reducer = produce(recipe, defaultState)
		return Object.defineProperty(reducer, 'name', {
			value: `${name}Reducer`,
			configurable: true,
		}) as Reducer<Immutable<T>, A>
	}
}
