import React from 'react';
import s from './Layout.module.css';
import { map } from 'lodash-es';
import Sidebar from '../Sidebar';

export default function Layout({ children }) {
	return (
		<div className={s.Layout}>
			<div className={s.Sidebar}>
				<Sidebar />
			</div>
			<div className={s.Header}>header</div>

			<div className={s.Content}>{children}</div>
		</div>
	);
}
