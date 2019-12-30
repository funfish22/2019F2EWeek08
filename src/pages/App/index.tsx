import App from './App';
import { connect } from 'react-redux'

import {advanced_close} from 'action/index'

const mapStateToProps = (state: 
    { 
        Advanced: boolean;
    }) => {
    return{
        Advanced: state.Advanced
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return{
        advanced_close: (advanced: Boolean) => {
            dispatch(advanced_close(advanced))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);