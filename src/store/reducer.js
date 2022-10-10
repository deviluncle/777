const reducer = (state, action) => {
    let { type, payload } = action

    switch (type) {
        case 'COUNT':
            return {
                ...state,
                count: payload
            };
        case 'DECREMENT':
            return payload;
        default:
            return state;
    }
}

export default reducer;