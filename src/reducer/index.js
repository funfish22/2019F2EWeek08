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

        default:
            return state;
    } 
}

export default ReducerRoot;