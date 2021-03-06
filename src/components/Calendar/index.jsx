import React, { Component } from 'react';
import { Calendar as CalendarLib, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import PropTypes from 'prop-types';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';

import 'react-big-calendar/lib/sass/styles.scss';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.scss';
import './Calendar.scss';

const DnDCalendar = withDragAndDrop(CalendarLib);
const localizer = momentLocalizer(moment);

class Calendar extends Component {
	resizeEvent = ({ event, start, end }) => {
		const { events } = this.props;

		const nextEvents = events.map(existingEvent => {
			return existingEvent.id === event.id
				? { ...existingEvent, start, end }
				: existingEvent;
		});

		this.props.onChangeEvents(nextEvents);
	};

	moveEvent = ({ event, start, end, isAllDay: droppedOnAllDaySlot }) => {
		const { events } = this.props;

		const idx = events.indexOf(event);
		let allDay = event.allDay;

		if (!event.allDay && droppedOnAllDaySlot) {
			allDay = true;
		} else if (event.allDay && !droppedOnAllDaySlot) {
			allDay = false;
		}

		const updatedEvent = { ...event, start, end, allDay };

		const nextEvents = [...events];
		nextEvents.splice(idx, 1, updatedEvent);

		this.props.onChangeEvents(nextEvents);
	};
	render() {
		const { events, onSelectEvent, handleSelect } = this.props;

		return (
			<>
				<DnDCalendar
					selectable
					localizer={localizer}
					events={events}
					startAccessor="start"
					endAccessor="end"
					onEventDrop={this.moveEvent}
					onEventResize={this.resizeEvent}
					onSelectSlot={handleSelect}
					onSelectEvent={onSelectEvent}
				/>
			</>
		);
	}
}

Calendar.propTypes = {
	events: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			note: PropTypes.number.isRequired,
			start: PropTypes.instanceOf(Date)
		})
	).isRequired,
	onSelectEvent: PropTypes.func,
	onSelectSlot: PropTypes.func
};
export default Calendar;
