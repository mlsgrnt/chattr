import React from 'react';
import PropTypes from 'prop-types';

import {animateScroll} from 'react-scroll';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import LogItem from './LogItem';

class Messages extends React.Component {

	componentDidUpdate() {
		animateScroll.scrollToBottom({
			containerId: 'messageBox',
			duration: 300
		});
	}

	render() {
		return (
			<div className="messageBox" id="messageBox">
				<ul className="messageBoxList">
					<ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={1} transitionLeaveTimeout={1}> {/* this timeout should be less hacky TODO */}
						{
							this.props.log.map(item => {
								return <LogItem key={item.timestamp} msg={item} names={this.props.names}/>;
							})
						}
					</ReactCSSTransitionGroup>
				</ul>
			</div>
		);
	}
}

Messages.propTypes = {
	log: PropTypes.array.isRequired,
	names: PropTypes.object.isRequired
};

export default Messages;
