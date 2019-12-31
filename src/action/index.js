export const Types = {
    ADVANCED_OPEN: 'toolBar/advanced_open',
    ADVANCED_CLOSE: 'toolBar/advanced_close',

    TARGET_FOLDER: 'toolbar/target_folder',
    ADD_FOLDER: 'toolBar/add_folder',
    REMOVE_FOLDER: 'toolBar/remove_folder',

    ADD_STAR: 'toolbar/add_star'
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

export const target_folder = (id) => {
    return{
        type: Types.TARGET_FOLDER,
        id
    }
}

export const add_folder = (name) => {
    return{
        type: Types.ADD_FOLDER,
        name
    }
}

export const remove_folder = () => {
    return{
        type: Types.REMOVE_FOLDER
    }
}

export const add_star = (id) => {
    return{
        type: Types.ADD_STAR,
        id
    }
}