const defaultState = {
    cards: [],
}

export const cardReduser = (state = defaultState, action) => {
    switch ( action.type ) {
        case 'GET_DATA':
            return {...state, cards: [...state.cards, ...action.payload]}
        default: 
            return state
    }
}