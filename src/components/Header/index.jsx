import React from 'react';
import s from './Header.module.css';
import Icon from '../Icon';

export default function Header() {
	return (
		<div className={s.Header}>
			<div className={s.LeftSide}>
				<Icon name="search" />
				<input placeholder="Search transactions, invoices or help" />
			</div>
			<div className={s.RightSide}>
				<div className={s.Icons}>
					<Icon name="support" />
					<Icon name="support" />
					<Icon name="support" />
				</div>
				<div className={s.Divider}></div>
				<div className={s.Name}>John Doe</div>
				<Icon name="arrow" />
				<div className={s.Avatar}></div>
			</div>
		</div>
	);
}
