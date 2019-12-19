import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CalenadPage from './Calendar';
import config from './config';
import { map } from 'lodash-es';
import Layout from '../components/Layout';
function Pages() {
	return (
		<Layout>
			{map(config, nav => (
				<Route
					exact={nav.exact}
					path={nav.path}
					component={nav.component}
				/>
			))}
		</Layout>
	);
}
export default Pages;
