import React, { useState } from 'react';
import s from './EventCard.module.css';
import cm from 'classnames';
import DateTime from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
function EventCard({
	x,
	y,
	id,
	title,
	start,
	note,
	isEdit,
	onClose,
	onCreate,
	onChange,
	onRemove
}) {
	const [_title, setTitle] = useState(title);
	const [startDate, setStartDate] = useState(start);
	const [_note, setNote] = useState(note);
	return (
		<div
			className={s.Card}
			style={{
				top: `${y}px`,
				left: `${x}px`
			}}>
			<div className={s.Close} onClick={onClose}>
				X
			</div>
			<div className={s.EventName}>
				<label>Event name</label>
				<input
					value={_title}
					maxLength={30}
					onChange={e => {
						setTitle(e.target.value);
					}}
				/>
			</div>
			<div className={s.EventDate}>
				<label>Event date</label>
				<DateTime
					selected={startDate}
					onChange={date => {
						console.log(date);
						setStartDate(date);
					}}
				/>
			</div>
			<div className={s.EventTime}>
				<label>Event time</label>
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
				<label>Note</label>
				<input
					value={_note}
					onChange={e => {
						setNote(e.target.value);
					}}
				/>
			</div>
			<div className={cm(s.Controls, { [s.Edit]: isEdit })}>
				{isEdit ? (
					<>
						<button onClick={() => onRemove(id)}>Discard</button>
						<button
							onClick={() => {
								onChange({
									title: _title,
									start: startDate,
									end: startDate,
									note: _note,
									id: id
								});
							}}>
							Edit
						</button>
					</>
				) : (
					<>
						<button onClick={onClose}>Cancel</button>
						<button
							onClick={() => {
								onCreate({
									title: _title,
									start: startDate,
									note: _note
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
	onRemove: () => {},
	title: '',
	time: Date.now(),
	start: Date.now(),
	note: ''
};
export default EventCard;
