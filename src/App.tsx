import React from 'react';
import { createStore,compose } from 'redux';
import styled from 'styled-components';

import Navbar from 'resources/components/organisms/Navbar';
import ToolBar from 'resources/components/organisms/ToolBar';
import ListBar from 'resources/components/organisms/ListBar';

import FolderBlock from 'resources/components/molecules/FolderBlock'
import List from 'resources/components/organisms/List';

import ReducerRoot from './reducer/index';

import { Provider } from 'react-redux';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
  ReducerRoot,
  composeEnhancers()
)

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
    name: 'New document123.doc',
    local: 'my drive',
    time: '2019/8/20',
    size: '102 kb'
  }
]

interface Props { }

interface State { 
  Advanced: boolean
}

class App extends React.Component<Props, State> {
  state = {
    Advanced: false
  }

  handleOpenAdvanced = (e: MouseEvent) => {
    e.stopPropagation();
    this.setState({
      Advanced: true
    })
  }

  handleCloseAdvanced = () => {
    // this.setState({
    //   Advanced: false
    // })
  }

  render() {
    const { Advanced } = this.state

    return (
      <Provider store={store}>
        <div className="App" onClick={this.handleCloseAdvanced}>
          <Navbar />
          <ToolBar Advanced={Advanced}/>
          <ListBar showIcon>folders</ListBar>
          <FolderBlock onClick={this.handleOpenAdvanced}/>
          <ListBar showIcon>files</ListBar>
          <List source={array} />
          <ListBarFooter showIcon={false}>storage</ListBarFooter>
        </div>
      </Provider>
      
    )
  }
}

export default App;

const ListBarFooter = styled(ListBar)`
  background-color: #fff;
  padding: 24px 0;
`;
