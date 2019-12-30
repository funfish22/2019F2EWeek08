import React from 'react';
import { HashRouter, BrowserRouter} from 'react-router-dom';
import styled from 'styled-components';

import Navbar from 'resources/components/organisms/Navbar';
import ListBar from 'resources/components/organisms/ListBar';

import Router from './Router';

interface Props { 
    advanced_close: Function
}

interface State { }

class App extends React.Component<Props, State> {

    handleCloseAdvanced = () => {
        const { advanced_close } = this.props

        advanced_close(false)
    }

    render() {
        return (
            <div onClick={this.handleCloseAdvanced}>
                <HashRouter>
                    <Navbar/>
                    <Router/>
                    <ListBarFooter showIcon={false}>storage</ListBarFooter>
                </HashRouter>
            </div>
        );
    }
}

export default App;

const ListBarFooter = styled(ListBar)`
    background-color: #fff;
    padding: 24px 0;
`;