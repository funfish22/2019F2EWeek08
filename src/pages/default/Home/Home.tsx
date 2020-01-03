import React from 'react';

import ToolBar from 'resources/components/organisms/ToolBar';
import ListBar from 'resources/components/organisms/ListBar';

import FolderBlock from 'resources/components/molecules/FolderBlock'
import List from 'resources/components/organisms/List';

interface Props {
    list: any,
    folderArray: any,
    Advanced: boolean,
    targetFolder: number,
    sortArray: number,
    advanced_open: Function,
    add_folder: Function,
    target_folder: Function,
    remove_folder: Function,
    add_star: Function,
    sort_files: Function
}

interface State { }

class Home extends React.PureComponent<Props, State> {

    handleOpenAdvanced = (e: MouseEvent, id:number) => {
        const { advanced_open, target_folder } = this.props

        e.stopPropagation();

        advanced_open(true)
        target_folder(id)
    }

    handleAddFolder = (folderName: string) => {
        const { add_folder } = this.props

        add_folder(folderName)
    }

    handleAddStar = (e: MouseEvent) => {
        e.stopPropagation();
        const { targetFolder, add_star } = this.props

        add_star(targetFolder)
    }

    handleSort = () => {
        const { sort_files, sortArray } = this.props

        sort_files(sortArray)
    }

    render() {
        const { list, Advanced, targetFolder, folderArray, remove_folder, sortArray } = this.props
        return(
            <>
                <ToolBar Advanced={Advanced} onStar={this.handleAddStar} onOk={this.handleAddFolder} onRemove={remove_folder}/>
                <ListBar>folders</ListBar>
                <FolderBlock source={folderArray} onClick={this.handleOpenAdvanced} active={targetFolder}/>
                <ListBar>files</ListBar>
                <List source={list} onClick={this.handleSort} sortArray={sortArray}/>
            </>
        )
    }
}

export default Home;