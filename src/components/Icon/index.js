import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Calendar } from './calendar.svg';
import { ReactComponent as Home } from './home.svg';
import { ReactComponent as Arrow } from './arrow.svg';
import { ReactComponent as Support } from './support.svg';
import { ReactComponent as Search } from './search.svg';
function Icon({ name }) {
	switch (name) {
		case 'calendar':
			return <Calendar />;
		case 'home':
			return <Home />;
		case 'arrow':
			return <Arrow />;
		case 'support':
			return <Support />;
		case 'search':
			return <Search />;
		default:
			return null;
	}
}
Icon.propTypes = {
	name: PropTypes.string.isRequired
};
export default Icon;
