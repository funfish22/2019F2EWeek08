export const Types = {
    ADVANCED_OPEN: 'toolBar/advanced_open',
    ADVANCED_CLOSE: 'toolBar/advanced_close',

    TARGET_FOLDER: 'toolbar/target_folder',
    ADD_FOLDER: 'toolBar/add_folder',
    REMOVE_FOLDER: 'toolBar/remove_folder',

    ADD_FILES: 'toolbar/add_files',
    SORT_FILES: 'toolbar/sort_files',

    ADD_STAR: 'toolbar/add_star',

    DRAG: 'drag/drag',
    DRAG_ROOT: 'drag/drag_root',

    GET_FIREBASE_REQUEST: 'firebase/get_firebase_request',
    GET_FIREBASE_SUCCESS: 'firebase/get_firebase_success'
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

export const drag = (dragSwitch) => {
    return{
        type: Types.DRAG,
        dragSwitch
    }
}

export const drag_root = (dragSwitch) => {
    return {
        type: Types.DRAG_ROOT,
        dragSwitch
    }
}

export const add_files = (object) => {
    return {
        type: Types.ADD_FILES,
        object
    }
}

export const sort_files = number => {
    return {
        type: Types.SORT_FILES,
        number
    }
}

export const getFirebaseRequest = () => ({
    type: Types.GET_FIREBASE_REQUEST
});

export const getFirebaseSuccess = ({items}) => ({
    type: Types.GET_FIREBASE_SUCCESS,
    payload: {
        items
    }
});