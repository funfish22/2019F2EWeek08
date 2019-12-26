import React from 'react';
import styled from 'styled-components';

const array = [
    {
        id: 0,
        icon: 'icon-cloud_upload-24px'
    },
    {
        id: 1,
        icon: 'icon-create_new_folder-24px'
    }
]

interface Props {
    className?: string,
    source?: Array<{
        id: number,
        icon: string
    }>
}

interface State {}

class IconList extends React.Component<Props, State> {
    static defaultProps = {
        source: array
    }
    render() {
        const { className, source} = this.props;
        return(
            <IconListRoot className={className}>
                {
                    source && source.map((row) => (
                        <Li key={row.id}>
                            <Icon className={row.icon}/>
                        </Li>
                    ))
                }
            </IconListRoot>
        )
    }
}

export default IconList;

const IconListRoot = styled.ul`
    display: flex;
    align-items: center;
`;

const Li = styled.li`
    margin: 0 16px;

    &:first-of-type{
        margin-left: 0;
    }

    &:last-of-type{
        margin-right: 0;
    }
`;

const Icon = styled.span`
    font-size: 24px;
    cursor: pointer;
`;