import React from 'react';
import { HashRouter, BrowserRouter} from 'react-router-dom';
import styled from 'styled-components';
import firebase from 'firebase';

import config from 'config/utils/configureFirebase'

import Navbar from 'resources/components/organisms/Navbar';
import Footer from 'resources/components/organisms/Footer';

import Router from './Router';

interface Props { 
    advanced_close: Function,
    drag: Function,
    drag_root: Function,
    footerDrag: boolean,
    dragRoot: boolean
}

interface State { }

const folder = ""

class App extends React.Component<Props, State> {

    componentDidMount() {
        const DragContainer = document.getElementById('DragContainer')

        if(DragContainer === null) return

        window.addEventListener('click', (event) => {
            // event.stopImmediatePropagation();
            this.handleCloseAdvanced()
        })

        // window.addEventListener('mouseup', this.onDragLeave);
        window.addEventListener("dragenter", this.onDragEnter);
        window.addEventListener('dragover', this.onDragOver);;
        DragContainer.addEventListener("dragleave", this.onDragLeave)
        window.addEventListener("drop", this.onDrop)
    }

    componentWillUnmount() {
        const DragContainer = document.getElementById('DragContainer')

        if(DragContainer === null) return

        // window.removeEventListener('mouseup', this.onDragLeave);
        window.removeEventListener('dragenter', this.onDragEnter);
        window.addEventListener('dragover', this.onDragOver);
        DragContainer.removeEventListener('dragleave', this.onDragLeave);
        window.removeEventListener('drop', this.onDrop);
    }

    handleCloseAdvanced = () => {
        const { advanced_close } = this.props

        advanced_close(false)
    }

    onDragEnter = (e: any) => {
        e.stopPropagation();
        e.preventDefault();
        const { drag } = this.props
        drag(true)
        return false;
    }

    onDragOver = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }

    onDragLeave = (e: any) => {
        e.stopPropagation();
        e.preventDefault();
        const { drag, drag_root } = this.props
        drag(false)
        // drag_root(false)
        return false;
    }

    onDrop = (e:any) => {
        e.preventDefault();

        const { drag } = this.props
        let files = e.dataTransfer.files;
        console.log('Files dropped: ', files);
        for(let i = 0; i < files.length; i++) {
            const path = folder + files[i].name;
            const storageReference = firebase.storage().ref(path);
            const task = storageReference.put(files[i]);
    
            task.on(
                "state_changed",
                function progress(snapshot) {
                //   let uploadValue = snapshot.bytesTransferred / snapshot.totalBytes * 100;
                //   uploaded[i].value = uploadValue;
                },
                function error() {
                    drag(false);
                },
                function complete() {
                    drag(false);
                }
            );
        }
        
        return false;
    }

    render() {
        const { footerDrag, dragRoot} = this.props
        return (
            <HashRouter>
                <Navbar/>
                <Router/>
                <Footer footerDrag={footerDrag} dragRoot={dragRoot}>storage</Footer>
            </HashRouter>
        );
    }
}

export default App;