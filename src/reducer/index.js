import { Types } from '../action'

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
        },
        {
            id: 4,
            icon: 'assets/img/ic-pdf.svg',
            name: 'Presentation-Q1.pdf',
            local: 'my drive',
            time: '2019/8/20',
            size: '102 kb'
        }
    ],
    folderArray: [
        {
            id: 0,
            name: 'advertisement'
        },
        {
            id: 1,
            name: 'business'
        },
        {
            id: 2,
            name: 'commercial'
        },
        {
            id: 3,
            name: 'customer'
        },
        {
            id: 4,
            name: 'facebook'
        },
        {
            id: 5,
            name: 'growth hacker'
        }
    ],
    Advanced: false
}

const ReducerRoot = (state = initState, action) => {
    switch(action.type){
        case Types.ADVANCED_OPEN :
            return Object.assign({}, state, {
                Advanced: true
            });

        case Types.ADVANCED_CLOSE :
            return Object.assign({}, state, {
                Advanced: false
            });

        case Types.ADD_FOLDER :
            const id = new Date().getTime()

            return {
                ...state,
                folderArray: [...state.folderArray, { id, name: action.name }]
            }

        default:
            return state;
    }
}

export default ReducerRoot;