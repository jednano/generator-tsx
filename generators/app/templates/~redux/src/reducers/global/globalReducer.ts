import { types } from 'actions/global'
import createReducer from 'utils/createReducer'

const defaultState = {}

export default createReducer('global', defaultState)<types.GlobalActions>(
	(/* draft, action */) => undefined,
)
