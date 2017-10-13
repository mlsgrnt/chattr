import React from 'react';
import PropTypes from 'prop-types';

import Time from 'react-time';

class LogItem extends React.Component {

/* From https://stackoverflow.com/questions/39426083/update-component-every-second-react
to enforce Time to update! */

	componentDidMount() {
		this.interval = setInterval(() => this.setState({time: Date.now()}), 5000);
	}
	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		const name = this.props.names[this.props.msg.sender] || this.props.msg.sender;

		if (name) {
			return (
				<li className={this.props.msg.type}>
					<em><Time value={this.props.msg.timestamp} relative/></em> {name}: {this.props.msg.msg}
				</li>
			);
		}
		return (
			<li className="log"><em><Time value={this.props.msg.timestamp} relative/> {this.props.msg.msg}</em></li>
		);
	}
}

LogItem.propTypes = {
	msg: PropTypes.object.isRequired,
	names: PropTypes.object
};

LogItem.defaultProps = {
	names: {}
};

export default LogItem;
