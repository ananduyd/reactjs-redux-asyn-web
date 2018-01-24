const initState = {
    count: 0
}
export default function pageReducer(state = initState, action) {
    switch (action.type) {
        case 'PAGE_VISIT':
            return { ...state,
                count: state.count++
            }

    }
    return state;
}