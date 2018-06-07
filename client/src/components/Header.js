import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return 'Still deciding';
			case false:
				return 'im logged out';
			default:
				return 'im logged in';
		}
	}

	render() {
		return (
			<nav>
				<div className="nav-wrapper">
					<a className="brand-logo">Emaily</a>
					<ul className="right hide-on-med-and-down">{this.renderContent()}</ul>
				</div>
			</nav>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Header);
