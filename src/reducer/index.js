import { Types } from '../action'

import 'config/utils/configureFirebase'

const initState = {
    list: [
        {
            id: 0,
            icon: 'assets/img/ic-excel.svg',
            name: 'Ad-benefit-august.csv',
            local: 'my drive',
            time: '2019/8/20',
            size: '6 kb'
        },
        {
            id: 1,
            icon: 'assets/img/ic-ppt.svg',
            name: 'How To Pick A Right Web Font.pptx',
            local: 'my drive',
            time: '2019/8/20',
            size: '32 mb'
        },
        {
            id: 2,
            icon: 'assets/img/ic-pdf.svg',
            name: 'Presentation-Q1.pdf',
            local: 'my drive',
            time: '2019/8/20',
            size: '10 mb'
        },
        {
            id: 3,
            icon: 'assets/img/ic-word.svg',
            name: 'New document123.doc',
            local: 'my drive',
            time: '2019/8/20',
            size: '102 kb'
        }
    ],
    folderArray: [
        {
            id: 0,
            name: 'advertisement',
            star: true
        },
        {
            id: 1,
            name: 'business',
            star: false
        },
        {
            id: 2,
            name: 'commercial',
            star: false
        },
        {
            id: 3,
            name: 'customer',
            star: false
        },
        {
            id: 4,
            name: 'facebook',
            star: false
        },
        {
            id: 5,
            name: 'growth hacker',
            star: false
        }
    ],
    targetFolder: '',
    starFolderArray: [],
    Advanced: false,
    footerDrag: false,
    dragRoot: false,
    sortArray: 0
}


const ReducerRoot = (state = initState, action) => {
    switch(action.type){
        case Types.ADVANCED_OPEN :
            return Object.assign({}, state, {
                Advanced: true
            });

        case Types.ADVANCED_CLOSE :
            return Object.assign({}, state, {
                Advanced: false,
                targetFolder: ''
            });

        case Types.TARGET_FOLDER :
            return Object.assign({}, state, {
                targetFolder: action.id
            });

        case Types.ADD_FOLDER :
            const id = new Date().getTime()

            return {
                ...state,
                folderArray: [...state.folderArray, { id, name: action.name, star: false }]
            };

        case Types.REMOVE_FOLDER :
            const newFilterArray = state.folderArray.filter((row) => {
                return row.id !== state.targetFolder
            })

            return {
                ...state,
                folderArray: newFilterArray,
                targetFolder: ''
            }

        case Types.ADD_STAR :
            const targetStar = state.folderArray.find((row) => {
                return row.id === action.id
            })

            if(targetStar === undefined){
                return state
            }

            const newStarArray = state.folderArray.map((row) => {
                if(row.id === action.id) {
                    return {
                        ...targetStar,
                        star: !row.star
                    }
                } else {
                    return row
                }
            })

            return {
                ...state,
                folderArray: newStarArray
            }

        case Types.DRAG :
            return {
                ...state,
                footerDrag: action.dragSwitch
            }

        case Types.DRAG_ROOT:
            return {
                ...state,
                dragRoot: action.dragSwitch
            }

        case Types.ADD_FILES:
            let newFiles = []

            action.object.forEach((row, index) => {
                newFiles.push(
                    {
                        id: row.lastModified + index,
                        icon: 'assets/img/ic-excel.svg',
                        name: row.name,
                        local: 'my drive',
                        time: `${row.lastModifiedDate.getYear() + 1900}/${row.lastModifiedDate.getMonth() + 1}/${row.lastModifiedDate.getDate()}`,
                        size: '32 mb'
                    }
                )
            })

            const concatFiles = state.list.concat(newFiles)

            return {
                ...state,
                list: concatFiles
            };

        case Types.SORT_FILES:
            if(action.number === 0) {
                return {
                    ...state,
                    list: state.list.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1),
                    sortArray: 1
                }
            } else if (action.number === 2) {
                return {
                    ...state,
                    list: state.list.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1),
                    sortArray: 1
                }
            } else if (action.number === 1) {
                return{
                    ...state,
                    list: state.list.sort((a, b) => b.name.toLowerCase() > a.name.toLowerCase() ? 1 : -1),
                    sortArray: 2
                }
            } else {
                return state
            }

        default:
            return state;
    }
}

export default ReducerRoot;