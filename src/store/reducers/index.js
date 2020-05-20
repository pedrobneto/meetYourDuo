const initialState = {
    screen: 'messages',
    msgTabColor: 'red',
    feedTabColor: 'gray'
}

function tinderApp(state = initialState, action) {
    switch (action.type) {
        case 'MSG_TAB_CLICK':
            return { ...state, screen: 'messages', msgTabColor: 'red', feedTabColor: 'gray' }
        case 'FEED_TAB_CLICK':
            return { ...state, screen: 'feed', msgTabColor: 'gray', feedTabColor: 'red' }
        default:
            return state;
    }
}

export default tinderApp;