import React from 'react';
import { HashRouter, BrowserRouter} from 'react-router-dom';
import styled from 'styled-components';

import Navbar from 'resources/components/organisms/Navbar';
import ListBar from 'resources/components/organisms/ListBar';

import Router from './Router';

interface Props { }

interface State { 
    Advanced: boolean
}

class App extends React.Component<Props, State> {
    render() {
        return (
            <HashRouter>
                <Navbar/>
                <Router/>
                <ListBarFooter showIcon={false}>storage</ListBarFooter>
            </HashRouter>
        );
    }
}

export default App;

const ListBarFooter = styled(ListBar)`
    background-color: #fff;
    padding: 24px 0;
`;