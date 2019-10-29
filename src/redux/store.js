import { createStore } from 'redux'

const initialState = {
  email: '',
  password: ''
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, ...action.payload }
    case 'LOGOUT':
      return initialState
    default:
      return state
  }
}

const store = createStore(
  userReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
