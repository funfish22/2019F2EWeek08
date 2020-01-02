import App from './App';
import { connect } from 'react-redux'

import {advanced_close, drag} from 'action/index'

const mapStateToProps = (state: 
    { 
        Advanced: boolean;
        footerDrag: boolean;
    }) => {
    return{
        Advanced: state.Advanced,
        footerDrag: state.footerDrag
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return{
        advanced_close: (advanced: Boolean) => {
            dispatch(advanced_close(advanced))
        },
        drag: (dragSwitch: Boolean) => {
            dispatch(drag(dragSwitch))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);