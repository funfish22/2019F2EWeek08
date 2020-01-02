import Home from './Home';
import { connect } from 'react-redux'

import {advanced_open, add_folder, remove_folder, target_folder, add_star} from 'action/index'

const mapStateToProps = (state: 
    { 
        list: any;
        folderArray: any;
        Advanced: boolean;
        targetFolder: number;
    }) => {
    return{
        list: state.list,
        folderArray: state.folderArray,
        Advanced: state.Advanced,
        targetFolder: state.targetFolder
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return{
        advanced_open: (advanced: Boolean) => {
            dispatch(advanced_open(advanced))
        },
        add_folder: (name: string) => {
            dispatch(add_folder(name))
        },
        remove_folder: () => {
            dispatch(remove_folder())
        },
        target_folder: (id: number) => {
            dispatch(target_folder(id))
        },
        add_star: (id: number) => {
            dispatch(add_star(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);