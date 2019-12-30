export const Types = {
    ADVANCED_OPEN: 'toolBar/advanced_open',
    ADVANCED_CLOSE: 'toolBar/advanced_close'
}

export const advanced_open = (advanced) => {
    return{
        type: Types.ADVANCED_OPEN,
        advanced
    }
}

export const advanced_close = (advanced) => {
    return{
        type: Types.ADVANCED_CLOSE,
        advanced
    }
}