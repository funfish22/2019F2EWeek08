import Home from './Home';
import { connect } from 'react-redux'

const mapStateToProps = (state: { 
    list: any;}) => {
    return{
        list: state.list,
    }
}

const mapDispatchToProps = (_dispatch: any) => {
    return{
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);