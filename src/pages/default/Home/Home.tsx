import React from 'react';

import ToolBar from 'resources/components/organisms/ToolBar';
import ListBar from 'resources/components/organisms/ListBar';

import FolderBlock from 'resources/components/molecules/FolderBlock'
import List from 'resources/components/organisms/List';

// const array = [
//     {
//         id: 0,
//         icon: 'assets/img/ic-excel.svg',
//         name: 'Ad-benefit-august.csv',
//         local: 'my drive',
//         time: '2019/8/20',
//         size: '6 kb'
//     },
//     {
//         id: 1,
//         icon: 'assets/img/ic-ppt.svg',
//         name: 'How To Pick A Right Web Font.pptx',
//         local: 'my drive',
//         time: '2019/8/20',
//         size: '32 mb'
//     },
//     {
//         id: 2,
//         icon: 'assets/img/ic-pdf.svg',
//         name: 'Presentation-Q1.pdf',
//         local: 'my drive',
//         time: '2019/8/20',
//         size: '10 mb'
//     },
//     {
//         id: 3,
//         icon: 'assets/img/ic-word.svg',
//         name: 'New document123.doc',
//         local: 'my drive',
//         time: '2019/8/20',
//         size: '102 kb'
//     }
// ]

interface Props {
    list: any
}

interface State { 
    Advanced: boolean
}

class Home extends React.PureComponent<Props, State> {

    state = {
        Advanced: false
    }

    handleOpenAdvanced = (e: MouseEvent) => {
        e.stopPropagation();
        this.setState({
            Advanced: true
        })
    }

    render() {
        const { list } = this.props
        const { Advanced } = this.state
        return(
            <>
                <ToolBar Advanced={Advanced}/>
                <ListBar showIcon>folders</ListBar>
                <FolderBlock onClick={this.handleOpenAdvanced}/>
                <ListBar showIcon>files</ListBar>
                <List source={list} />
            </>
        )
    }
}

export default Home;