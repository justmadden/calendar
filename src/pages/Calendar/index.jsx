import React, { Component } from 'react';
import Calendar from '../../components/Calendar';
import EventCard from '../../components/EventCard';
import s from './CalendarPage.module.css';
import { ID } from '../../helper';

class CalendarPage extends Component {
	state = {
		card: {
			isVisible: false,
			x: 0,
			y: 0,
			isEdit: false,
			selected: null
		},
		events: [
			{
				id: ID(),
				title: 'Go shop',
				start: new Date(),
				end: new Date()
			},
			{
				id: ID(),
				title: 'Get order',
				start: new Date(),
				end: new Date()
			}
		]
	};
	handleSelect = arg => {
		console.log(arg);
		if (!this.state.card.isVisible) {
			this.setState({
				card: {
					isVisible: true,
					x: arg.box.x,
					y: arg.box.y,
					date: arg.start
				}
			});
		}
	};
	onClose = () => {
		this.setState({ card: { isVisible: false } });
	};
	onCreate = ({ title, start }) => {
		const newEvent = {
			title: title,
			start: start,
			end: start,
			id: ID()
		};
		this.setState(state => {
			return {
				...state,
				events: [...state.events, newEvent],
				card: {
					...state.card,
					isVisible: false
				}
			};
		});
	};
	onChangeEvents = events => {
		this.setState({ events });
	};
	onChange = event => {
		this.setState(state => {
			const arr = [...state.events];
			const index = arr.findIndex(item => item.id === event.id);
			if (index) {
				arr.slice(index, 1, event);
				return {
					...state,
					events: arr
				};
			}
		});
	};
	onSelectEvent = (event, e) => {
		console.log('onSelectEvent', event);
		console.log('onSelectEvent X', e.clientX);
		console.log('onSelectEvent Y', e.clientY);
		this.setState(state => {
			return {
				...state,
				card: {
					...state.card,
					isVisible: true,
					isEdit: true,
					selected: event,
					x: e.clientX + 1050,
					y: e.clientY
				}
			};
		});
	};
	render() {
		const {
			card: { isVisible, x, y, date, selected, isEdit },
			events
		} = this.state;
		console.log('events', events);
		return (
			<div>
				<div className={s.CalendarBlock}>
					<Calendar
						handleSelect={this.handleSelect}
						events={events}
						onChangeEvents={this.onChangeEvents}
						onSelectEvent={this.onSelectEvent}
					/>
					{isVisible && (
						<EventCard
							x={x}
							y={y}
							onClose={this.onClose}
							date={date}
							isEdit={isEdit}
							data={selected}
							onCreate={this.onCreate}
							onChange={this.onChange}
						/>
					)}
				</div>
			</div>
		);
	}
}
export default CalendarPage;
