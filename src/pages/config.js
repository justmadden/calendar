import Calendar from './Calendar';
import Home from './Home';

export default [
	{
		title: 'Home',
		to: '/',
		path: '/',
		component: Home,
		icon: 'home',
		exact: true
	},
	{
		title: 'Calendar',
		to: '/calendar',
		path: '/calendar',
		component: Calendar,
		icon: 'calendar',
		exact: true
	}
];
