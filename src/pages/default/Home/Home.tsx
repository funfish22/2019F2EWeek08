import React from 'react';

import ToolBar from 'resources/components/organisms/ToolBar';
import ListBar from 'resources/components/organisms/ListBar';

import FolderBlock from 'resources/components/molecules/FolderBlock'
import List from 'resources/components/organisms/List';

interface Props {
    list: any,
    Advanced: boolean,
    advanced_open: Function
}

interface State { }

class Home extends React.PureComponent<Props, State> {

    handleOpenAdvanced = (e: MouseEvent) => {
        const { advanced_open } = this.props

        e.stopPropagation();

        advanced_open(true)
        
    }

    render() {
        const { list, Advanced } = this.props
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