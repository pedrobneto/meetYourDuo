import { createStore } from 'redux'
import tinderApp from './reducers/index'

const store = createStore(tinderApp);

export default store;