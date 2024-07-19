import { combineReducers, createStore } from 'redux';
import { cardReduser } from './cardsReduser';

const rootReducer = combineReducers({
    cards: cardReduser
})

export const store = createStore(rootReducer)
