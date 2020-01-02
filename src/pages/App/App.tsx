import React from 'react';
import { HashRouter, BrowserRouter} from 'react-router-dom';
import styled from 'styled-components';

import Navbar from 'resources/components/organisms/Navbar';
import Footer from 'resources/components/organisms/Footer';

import Router from './Router';

interface Props { 
    advanced_close: Function
}

interface State { }

class App extends React.Component<Props, State> {

    componentDidMount() {
        console.log('123')
        window.addEventListener('click', (event) => {
            // event.stopImmediatePropagation();
            this.handleCloseAdvanced()
        })
    }

    handleCloseAdvanced = () => {
        const { advanced_close } = this.props

        advanced_close(false)
    }

    render() {
        return (
            <HashRouter>
                <Navbar/>
                <Router/>
                <Footer>storage</Footer>
            </HashRouter>
        );
    }
}

export default App;