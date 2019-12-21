import React from 'react';
import s from './Layout.module.css';
import Sidebar from '../Sidebar';
import Header from '../Header';

export default function Layout({ children }) {
	return (
		<div className={s.Layout}>
			<div className={s.Sidebar}>
				<Sidebar />
			</div>
			<div className={s.Header}>
				<Header />
			</div>

			<div className={s.Content}>{children}</div>
		</div>
	);
}
