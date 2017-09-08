import { fromJS } from 'immutable'
import { createSelector } from 'reselect'

// Constants
const CHANGE_MAP = 'map/CHANGE_MAP'
const MAPS_LOADED = 'map/MAPS_LOADED'
export const LOAD_MAPS = 'map/LOAD_MAPS'

// Actions
export function changeMap(mapId) {
  return {
    type: CHANGE_MAP,
    id: mapId
  }
}

export function mapsLoaded(list) {
  return {
    type: MAPS_LOADED,
    list: list
  }
}

export function loadMaps() {
  return {
    type: LOAD_MAPS
  }
}

// Selector
export const selectMap = (state) => state.get('map')
export const makeSelectMapList = () => createSelector(
  selectMap,
  (state) => state.get('list')
)
export const makeSelectMapId = () => createSelector(
  selectMap,
  (state) => state.get('id')
)
export const makeSelectMapData = () => createSelector(
  selectMap,
  (state) => { return {id: state.get('id'), name: state.get('name')} }
)

// Initial State
const initialState = fromJS({
  list: [],
  id: '',
  name: ''
})

// Reducer
export default function reducer(state = initialState, action) {
  switch(action.type){
    case CHANGE_MAP:
      return state.set('id', action.id)
    case MAPS_LOADED:
      return state.set('list', action.list)
    default:
      return state
  }
}

