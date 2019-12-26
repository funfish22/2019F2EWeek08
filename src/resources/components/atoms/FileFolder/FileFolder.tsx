import React from 'react';
import styled from 'styled-components';

interface Props {
    children: string,
    onClick: Function
}

interface State {
    star: boolean
}

class FileFolder extends React.Component<Props, State> {

    state = {
        star: false
    }

    handleAddStar = (e: any) => {
        const {onClick} = this.props;
        const {star} = this.state;

        this.setState({
            star: !star
        })

        onClick(e)
    }

    render() {
        const {children} = this.props;
        const {star} = this.state;
        return(
            <FileFolderRoot onClick={(e) => this.handleAddStar(e)}>
                {
                    !star ? <Icon className="icon-folder-24px"></Icon> : <Icon className="icon-folder_special-24px"></Icon>
                }
                {/* <FileFolderImg src={!star ? "assets/img/folder-24px.svg" : "assets/img/folder_special-24px.svg"} alt="" /> */}
                <FileFolderName>{children}</FileFolderName>
            </FileFolderRoot>
        )
    }
}

export default FileFolder;

const FileFolderName = styled.span`
    display: inline-block;
    vertical-align: middle;
    text-transform:capitalize;
    transition: .5s;
`;

const Icon = styled.span`
    display: inline-block;
    vertical-align: middle;
    margin-right: 16px;
    font-size: 24px;
`;

const FileFolderRoot = styled.div`
    width: 100%;
    max-width: 255px;
    padding: 22px 24px 24px 24px;
    border-top: 2px solid #fff;
    box-shadow: 0px 2px 4px #00000029;
    border-radius: 8px;
    background-color: #fff;
    transition: .5s;
    cursor: pointer;
    margin: 12px 15px;

    &:hover{
        border-top-color: #2A8CFD;
        &:after{

        }

        ${FileFolderName} {
            color: #2A8CFD;
        }
    }
`;