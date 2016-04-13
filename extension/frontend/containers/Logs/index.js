import { connect } from 'react-redux';
import LogList from '../../components/LogList';

const mapStateToProps = state => {
    return {
        logs: state.logs
    };
};

const Logs = connect(
    mapStateToProps
)(LogList);

export default Logs;
