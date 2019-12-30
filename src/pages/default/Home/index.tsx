import Home from './Home';
import { connect } from 'react-redux'

import {advanced_open, add_folder} from 'action/index'

const mapStateToProps = (state: 
    { 
        list: any;
        folderArray: any;
        Advanced: boolean;
    }) => {
    return{
        list: state.list,
        folderArray: state.folderArray,
        Advanced: state.Advanced
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return{
        advanced_open: (advanced: Boolean) => {
            dispatch(advanced_open(advanced))
        },
        add_folder: (name: string) => {
            dispatch(add_folder(name))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);