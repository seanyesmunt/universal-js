import {
  LOAD_EVENT_REQUEST,
  LOAD_EVENT_SUCCESS,
  LOAD_EVENT_ERROR
} from '../constants'

const initialState = {
  loading: false,
  error: null
}

export default function event (state = initialState, action) {
  switch (action.type) {
    case LOAD_EVENT_REQUEST:
      return { ...state,
        loading: true,
        error: null}
    case LOAD_EVENT_SUCCESS:
      return { ...state,
        events: action.payload,
        loading: false}
    case LOAD_EVENT_ERROR:
      return { ...state,
        error: action.payload}
    default:
      return state
  }
}