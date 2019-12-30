import React from 'react';

import ToolBar from 'resources/components/organisms/ToolBar';
import ListBar from 'resources/components/organisms/ListBar';

import FolderBlock from 'resources/components/molecules/FolderBlock'
import List from 'resources/components/organisms/List';

interface Props {
    list: any,
    folderArray: any,
    Advanced: boolean,
    advanced_open: Function,
    add_folder: Function
}

interface State { }

class Home extends React.PureComponent<Props, State> {

    handleOpenAdvanced = (e: MouseEvent) => {
        const { advanced_open } = this.props

        e.stopPropagation();

        advanced_open(true)
        
    }

    handleAddFolder = (folderName: string) => {
        const { add_folder } = this.props

        add_folder(folderName)
    }

    render() {
        const { list, Advanced, folderArray } = this.props
        return(
            <>
                <ToolBar Advanced={Advanced} onOk={this.handleAddFolder}/>
                <ListBar showIcon>folders</ListBar>
                <FolderBlock source={folderArray} onClick={this.handleOpenAdvanced}/>
                <ListBar showIcon>files</ListBar>
                <List source={list} />
            </>
        )
    }
}

export default Home;