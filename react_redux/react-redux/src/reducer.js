

const initialState = { value: 0 };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INC':
            return {
                ...state,
                value: state.value + 1
            };
        case 'DEC':
            return {
                ...state,
                value: state.value - 1
            };
        case 'RND':
            return {
                ...state,
                value: state.value * action.payload
            };
        case 'INC_FIVE':
            return {
                ...state,
                value: state.value + 5
            };
        case 'DEC_THREE':
            return {
                ...state,
                value: state.value - 3
            };
        default:
            return state;
    }
}

export default reducer;
