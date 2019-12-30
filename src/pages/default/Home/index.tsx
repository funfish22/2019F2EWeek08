import Home from './Home';
import { connect } from 'react-redux'

import {advanced_open} from 'action/index'

const mapStateToProps = (state: 
    { 
        list: any;
        Advanced: boolean;
    }) => {
    return{
        list: state.list,
        Advanced: state.Advanced
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return{
        advanced_open: (advanced: Boolean) => {
            dispatch(advanced_open(advanced))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);