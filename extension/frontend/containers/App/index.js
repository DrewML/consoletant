import { connect } from 'react-redux';
import App from '../../components/App';

const mapStateToProps = state => {
    return {
        logs: state.logs
    };
};

const ContainerApp = connect(
    mapStateToProps
)(App);

export default ContainerApp;
