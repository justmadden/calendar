import React from 'react';
import s from './Sidebar.module.css';
import cm from 'classnames';
import Icon from '../Icon';
import { NavLink } from 'react-router-dom';
import config from '../../pages/config';
import { map } from 'lodash-es';
export default function Sidebar() {
	return (
		<div className={s.Sidebar}>
			<div className={s.Logo}>IMPEKABLE</div>
			<nav>
				{map(config, nav => {
					return (
						<NavLink
							exact={nav.exact}
							to={nav.to}
							activeClassName={s.Active}>
							<div className={s.NavItem}>
								<Icon name={nav.icon} />
								{nav.title}
							</div>
						</NavLink>
					);
				})}
			</nav>
		</div>
	);
}
