const MSG_TAB_CLICK = 'MSG_TAB_CLICK'
const FEED_TAB_CLICK = 'FEED_TAB_CLICK'

export function msgTab() {
    return {
        type: MSG_TAB_CLICK
    }
}

export function feedTab() {
    return {
        type: FEED_TAB_CLICK
    }
}
