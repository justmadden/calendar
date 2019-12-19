import React from 'react';
import { ReactComponent as Calendar } from './calendar.svg';
import { ReactComponent as Home } from './home.svg';
export default function Icon({ name }) {
	switch (name) {
		case 'calendar':
			return <Calendar />;
		case 'home':
			return <Home />;
		default:
			return null;
	}
}
