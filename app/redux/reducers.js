import { fromJS } from 'immutable'
import { combineReducers } from 'redux-immutable'

import route from './modules/route'
import language from './modules/language'
import map from './modules/map'

export default function createReducer(asyncReducers) {
  return combineReducers({
    route,
    language,
    map,
    ...asyncReducers
  })
}

