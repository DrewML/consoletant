import { connect } from 'react-redux';
import LogList from '../components/LogList';

const mapStateToProps = ({ logs, filters }) => {
    return {
        logs: logs.filter(log => {
            const matchesType = !filters.type.length || filters.type.includes(log.type);
            const matchesRegex = !filters.regex || new RegExp(filters.regex).test(log.args.join(' '));

            return matchesType && matchesRegex;

        })
    };
};

const Logs = connect(
    mapStateToProps
)(LogList);

export default Logs;
