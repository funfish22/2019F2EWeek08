import React from 'react';
import styled from 'styled-components';

const array = [
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
        name: 'New document.doc',
        local: 'my drive',
        time: '2019/8/20',
        size: '102 kb'
    },
    {
        id: 4,
        icon: 'assets/img/ic-unkown.svg',
        name: 'Readme.txt',
        local: 'my drive',
        time: '2019/8/20',
        size: '2 kb'
    }
]

interface Props {
    className?: string,
    source?: Array<{
        id: number,
        icon: string,
        name: string,
        local: string,
        time: string,
        size: string
    }>
}

interface State {
    source: Array<{
        id: number,
        icon: string,
        name: string,
        local: string,
        time: string,
        size: string
    }>,
    sortArray: number
}

class List extends React.Component<Props, State> {
    static defaultProps = {
        source: array,
        changeSwitch: true
    }

    constructor(props: any) {
        super(props);
        this.state = { source: props.source, sortArray:0 };
    }

    sortName = (e: MouseEvent,sortArray: number) => {
        e.stopPropagation();
        const { source } = this.state;
        this.setState({
            source: source.sort((a, b) => a.name > b.name ? 1 : -1),
            sortArray: 1
        })
        if (sortArray === 2) {
            this.setState({
                source: source.sort((a, b) => a.name > b.name ? 1 : -1),
                sortArray: 1
            })
        } else if (sortArray === 1) {
            this.setState({
                source: source.sort((a, b) => b.name > a.name ? 1 : -1),
                sortArray: 2
            })
        }
    }

    render() {
        const { className } = this.props;
        const { source, sortArray } = this.state;
        return(
            <ListRoot className={className}>
                <ListHead>
                    <ListIcon />
                    <ListName onClick={(e: any) => this.sortName(e, sortArray)}>Name
                        {
                            sortArray === 1 ? <Icon className='icon-arrow_downward-24px' /> : sortArray === 2 && (<Icon className='icon-arrow_upward-24px' />)
                        }
                    </ListName>
                    <ListLocal>location</ListLocal>
                    <ListTime>last modified</ListTime>
                    <ListSize>size</ListSize>
                </ListHead>
                <ListBody>
                    { source && source.map((row) => (
                        <ListLi key={row.id}>
                            <ListIcon>
                                <img src={row.icon} alt="" />
                            </ListIcon>
                            <ListName>{row.name}</ListName>
                            <ListLocal>{row.local}</ListLocal>
                            <ListTime>{row.time}</ListTime>
                            <ListSize>{row.size}</ListSize>
                        </ListLi>
                    )) }
                    
                </ListBody>
                

            </ListRoot>
        )
    }
}

export default List;

const ListRoot = styled.div`
    max-width: 1110px;
    margin: 0 auto;
`;

const ListIcon = styled.div`
    flex: 1;
    max-width: 95px;
`;

const ListName = styled.div`
    flex: 1;
    max-width: 475px;
    display: flex;
    align-items: center;
`;

const Icon = styled.span`
    margin-left: 20px;
    font-size: 24px;
`;

const ListLocal = styled.div`
    flex: 1;
    max-width: 190px;
`;

const ListTime = styled.div`
    flex: 1;
    max-width: 190px;
`;

const ListSize = styled.div`
    flex: 1;
    max-width: 160px;
`;

const ListHead = styled.div`
    display: flex;
    padding: 16px 0;
    font-weight: bold;
    text-transform: uppercase;
    border-bottom: 1px solid #D5D5D5;
`;

const ListBody = styled.ul`

`;

const ListLi = styled.li`
    display: flex;
    padding: 24px 0;
    color: #707070;
    border-bottom: 1px solid #D5D5D5;

    ${ListIcon} {
        padding-left: 24px;
    }

    ${ListName} {
        color: #000;
    }

    ${ListLocal} {
        text-transform: capitalize;
    }

    ${ListSize} {
        text-transform: uppercase;
    }

`;