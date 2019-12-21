import React from 'react';
import { Route } from 'react-router-dom';
import config from './config';
import { map } from 'lodash-es';
import Layout from '../components/Layout';
function Pages() {
	return (
		<Layout>
			{map(config, nav => (
				<Route
					exact={nav.exact}
					key={nav.path}
					path={nav.path}
					component={nav.component}
				/>
			))}
		</Layout>
	);
}
export default Pages;
