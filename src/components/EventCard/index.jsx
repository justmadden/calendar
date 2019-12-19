import React, { useState } from 'react';
import s from './EventCard.module.css';
import cm from 'classnames';
import DateTime from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Date.css';
function EventCard({ x, y, onClose, isEdit, title, onCreate, date, onChange }) {
	const [_title, setTitle] = useState(title);
	const [startDate, setStartDate] = useState(date);
	const [note, setNote] = useState('');
	return (
		<div
			className={s.Card}
			style={{
				top: `${y - 80}px`,
				left: `${x - 435}px`
			}}>
			<div className={s.Close} onClick={onClose}>
				X
			</div>
			<div className={s.EventName}>
				<input
					value={_title}
					onChange={e => {
						setTitle(e.target.value);
					}}
				/>
			</div>
			<div className={s.EventDate}>
				<DateTime
					selected={startDate}
					onChange={date => {
						console.log(date);
						setStartDate(date);
					}}
				/>
			</div>
			<div className={s.EventTime}>
				<DateTime
					selected={startDate}
					onChange={date => setStartDate(date)}
					showTimeSelect
					showTimeSelectOnly
					timeIntervals={15}
					timeCaption="Time"
					dateFormat="h:mm aa"
				/>
			</div>
			<div className={s.EventName}>
				<input
					value={note}
					onChange={e => {
						setNote(e.target.value);
					}}
				/>
			</div>
			<div className={cm(s.Controls, { [s.Edit]: isEdit })}>
				{isEdit ? (
					<>
						<button>Discard</button>
						<button
							onClick={() => {
								onChange({
									title: _title,
									start: startDate,
									note
								});
							}}>
							Edit
						</button>
					</>
				) : (
					<>
						<button>Cancel</button>
						<button
							onClick={() => {
								onCreate({
									title: _title,
									start: startDate,
									note
								});
							}}>
							Save
						</button>
					</>
				)}
			</div>
		</div>
	);
}
EventCard.defaultProps = {
	x: 0,
	y: 0,
	onClose: () => {},
	onCreate: () => {},
	title: '',
	time: '',
	date: ''
};
export default EventCard;
