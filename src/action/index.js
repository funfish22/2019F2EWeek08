export const Types = {
    ADVANCED_OPEN: 'toolBar/advanced_open',
    ADVANCED_CLOSE: 'toolBar/advanced_close',

    ADD_FOLDER: 'toolBar/add_folder'
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

export const add_folder = (name) => {
    return{
        type: Types.ADD_FOLDER,
        name
    }
}