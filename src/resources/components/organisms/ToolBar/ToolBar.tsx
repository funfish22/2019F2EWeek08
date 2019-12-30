import React from 'react';
import styled, {css} from 'styled-components';

import Title from 'resources/components/atoms/Title';
import IconList from 'resources/components/molecules/IconList';
import NewFolder from 'resources/components/molecules/NewFolder';


const icon_1 = [
    {
        id: 0,
        icon: 'icon-cloud_upload-24px'
    }
]

const icon_2 = [
    {
        id: 0,
        icon: 'icon-create_new_folder-24px'
    }
]

const icon_3 = [
    {
        id: 0,
        icon: 'icon-star-24px'
    },
    {
        id: 1,
        icon: 'icon-cloud_download-24px'
    },
    {
        id: 2,
        icon: 'icon-link-24px'
    },
    {
        id: 3,
        icon: 'icon-delete-24px'
    }
]

interface Props {
    className?: string,
    Advanced: boolean
}

interface State {
    openNewFolder: boolean
}

class ToolBar extends React.Component<Props, State> {
    state = {
        openNewFolder: false
    }

    handleOPenNewFolder = () => {
        const { openNewFolder } = this.state;

        this.setState({
            openNewFolder: !openNewFolder
        })
    }

    handleCloseNewFolder = () => {

        this.setState({
            openNewFolder: false
        })
    }

    render() {
        const { className, Advanced } = this.props;
        const { openNewFolder } = this.state;
        return(
            <ToolBarRoot className={className}>
                <Container>
                    <TitleBlock>My drive</TitleBlock>
                    <IconRoot>
                        <Icon source={icon_1} />
                        <NewIcon source={icon_2} open={openNewFolder} onClick={this.handleOPenNewFolder}/>
                        { 
                            Advanced && (
                                <>
                                    <Hr />
                                    <IconList source={icon_3} />
                                </>
                            )
                        }
                    </IconRoot>
                    <NewFolderRoot open={openNewFolder} onClick={this.handleCloseNewFolder}/>
                </Container>
            </ToolBarRoot>
        )
    }
}

export default ToolBar;

const ToolBarRoot = styled.div`
    background-color: #EFEFEF;
`;

const Container = styled.div`
    max-width: 1110px;
    width: calc(100% - 30px);
    margin: 0 auto;
    display: flex;
    align-items: center;
    padding: 24px 0;
    position: relative;
`;

const TitleBlock = styled(Title)`
    font-size: 24px;
    font-weight: bold;
`;

const IconRoot = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
`;

const Hr = styled.hr`
    height: 23px;
    width: 1px;
    background-color: #707070;
    border: none;
    margin: 0 32px;
`;

const Icon = styled(IconList)`
    margin-right: 32px;
`;

const NewIcon = styled(IconList)`
    position: relative;

    ${props => props.open && css`
        color: #2A8CFD;
        &:after {
            content: '';
            position: absolute;
            background-color: #F5F7FA;
            width: 48px;
            height: 48px;
            z-index: 1;
            border-radius: 50%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        
    `};
`;

const NewFolderRoot = styled(NewFolder)`
    position: absolute;
    top: calc(100% + 8px);
    right: -50px;
    z-index: 3;
    display: ${props => !props.open ? 'none': 'block'};
`;
