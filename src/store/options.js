const options = {
    currentWeek: 1
}

const defaultState = options

export const optionsReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'CHANGE_WEEK':
            console.log('adssa')
            return {...state, currentWeek: action.payload}
        default:
            return state
    }
}