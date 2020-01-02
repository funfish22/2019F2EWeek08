import React from 'react';
import styled from 'styled-components';

import Title from 'resources/components/atoms/Title';

interface Props {
    className?: string
    children: string
}

interface State { }

class ListBar extends React.Component<Props, State> {
    render() {
        const { children, className } = this.props;
        return (
            <ToolBarRoot className={className}>
                <Container>
                    <TitleBlock>{children}</TitleBlock>
                    <Storage>
                        <span>16 gb </span> / <span>200 gb</span>
                    </Storage>
                </Container>
            </ToolBarRoot>
        )
    }
}

export default ListBar;

const ToolBarRoot = styled.div`
    padding: 16px 0;
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #fff;
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
    text-transform: uppercase;
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

const Storage = styled.div`
    text-transform: uppercase;
    margin-left: 16px;
`;
