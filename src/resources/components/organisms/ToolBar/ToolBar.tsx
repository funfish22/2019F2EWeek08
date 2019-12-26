import React from 'react';
import styled from 'styled-components';

import Title from 'resources/components/atoms/Title';
import IconList from 'resources/components/molecules/IconList';

const icon_1 = [
    {
        id: 0,
        icon: 'icon-cloud_upload-24px'
    },
    {
        id: 1,
        icon: 'icon-create_new_folder-24px'
    }
]

const icon_2 = [
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

interface State {}

class ToolBar extends React.Component<Props, State> {
    render() {
        const { className, Advanced } = this.props;
        return(
            <ToolBarRoot className={className}>
                <Container>
                    <TitleBlock>My drive</TitleBlock>
                    <IconRoot>
                        <IconList source={icon_1} />
                        { 
                            Advanced && (
                                <>
                                    <Hr />
                                    <IconList source={icon_2} />
                                </>
                            )
                        }
                    </IconRoot>
                    
                </Container>
            </ToolBarRoot>
        )
    }
}

export default ToolBar;

const ToolBarRoot = styled.div`
    padding: 24px 0;
    background-color: #EFEFEF;
`;

const Container = styled.div`
    max-width: 1110px;
    width: calc(100% - 30px);
    margin: 0 auto;
    display: flex;
    align-items: center;
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
